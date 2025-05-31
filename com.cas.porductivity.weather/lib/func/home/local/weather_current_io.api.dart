import 'dart:developer';

import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/util/data/data.dart';

String apiKey = '569f2ae006bb4c4c9f8153435252005';
bool isFreeVersion = true;

class CurrentWeatherApi {
  static String _makeLocationKey((double, double) located) {
    return '${located.$1},${located.$2}'; // 現在 key = "lat,lon"
  }

  static Future<Weather> _fetchWeather((double, double) located) async {
    final double lat = located.$1;
    final double lon = located.$2;
    log('→ _fetchWeather 收到 (lat,lon)=($lat,$lon)；傳給 API="$lat,$lon"');
    try {
      return await Weather.fetchForecastWeather(
        apiKey: apiKey,
        queryLocation: '$lat,$lon', // 確保真的是 "緯度,經度"
        days: isFreeVersion ? 14 : 3,
      );
    } catch (error) {
      log('⚠️ _fetchWeather 例外: $error');
      return weatherTemplate;
    }
  }

  static Future<Weather> getWeatherByLocated((double, double) located) async {
    final String key = _makeLocationKey(located);

    // 1. 先檢查 Hive 裡面有沒有這個 key 的舊資料
    //    如果沒有，就直接去 Fetch；若有，再看是否超過過期時間
    Data.weather.checkKeyExist('weatherCache', <String, Weather>{});
    Map<String, Weather> cacheMap =
        Data.weather.get<Map>('weatherCache').cast<String, Weather>();

    if (cacheMap.containsKey(key)) {
      final Weather cached = cacheMap[key]!;

      // 設定 3 小時為過期標準，如果還沒超過，就直接回傳快取
      if (DateTime.now().difference(cached.lastFetchTime) <
          Duration(hours: 3)) {
        return cached;
      }
      // 如果超過 3 小時，就算過期，會繼續下面 fetch
    }

    // 2. 沒有快取或已過期 → 去呼叫 API 拿最新
    final Weather fresh = await _fetchWeather(located);

    // 3. 拿到最新後，塞回 Hive
    cacheMap[key] = fresh;
    Data.weather.put<Map>('weatherCache', cacheMap);

    return fresh;
  }

  /// App 啟動時先執行：確保「預設地點」有第一筆快取
  static Future<void> weatherInitialize() async {
    // 1. 先看 Data.weather.getDefaultWeatherLocated() 取得 app 內定的經緯度
    final defaultLoc = getDefaultWeatherLocated();

    // 2. 用跟上面同樣的 key 生成邏輯
    final String key = _makeLocationKey(defaultLoc);

    // 3. 讀現有快取，若無或過期，就 fetch 一次並寫回
    Data.weather.checkKeyExist('weatherCache', <String, Weather>{});
    Map<String, Weather> cacheMap =
        Data.weather.get<Map>('weatherCache').cast<String, Weather>();

    final Weather? cached = cacheMap[key];
    if (cached == null ||
        DateTime.now().difference(cached.lastFetchTime) >= Duration(hours: 3)) {
      final Weather fresh = await _fetchWeather(defaultLoc);
      cacheMap[key] = fresh;
      Data.weather.put<Map>('weatherCache', cacheMap);
    }
  }

  /// 以下三個方法保留原本 Data 層用不到
  static Weather getWeather(Weather weather, [bool all = false]) {
    return getAllWeatherData()[weather.hashCode]!;
  }

  static Map<int, Weather> getAllWeatherData() {
    return Data.weather.get<Map>('weather').cast<int, Weather>();
  }

  static Weather getDefaultWeather() {
    return getAllWeatherData().values.toList()[0];
  }

  static (double, double) getDefaultWeatherLocated() {
    final def = getDefaultWeather().location;
    return (def.lat, def.lon);
  }
}
