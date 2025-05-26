import 'dart:convert';
import 'dart:developer';
import 'package:http/http.dart' as http;

/// 表示特定地點的即時天氣資訊
class WeatherCurrent {
  /// 城市名稱
  final String cityName;

  /// 地區或省份名稱
  final String region;

  /// 國家名稱
  final String country;

  /// 緯度
  final double lat;

  /// 經度
  final double lon;

  /// 時區 ID, 例如 "Asia/Taipei"
  final String timeZoneID;

  /// 當地時間的 Unix 時間戳
  final int localtimeEpoch;

  /// 當地時間的字串表示, 例如 "2025-05-25 22:25"
  final String localtime;

  /// 最後更新時間的 Unix 時間戳
  final int lastUpdatedEpoch;

  /// 最後更新時間的字串表示, 例如 "2025-05-25 22:15"
  final String lastUpdated;

  /// 溫度(攝氏)
  final double tempC;

  /// 溫度(華氏)
  final double tempF;

  /// 是否為白天(1:是, 0:否)
  final int isDay;

  /// 天氣狀況描述, 例如 "局部多雲"
  final String conditionText;

  /// 天氣圖示的 URL
  final String conditionIcon;

  /// 天氣狀況代碼
  final int conditionCode;

  /// 風速(英里/小時)
  final double windMph;

  /// 風速(公里/小時)
  final double windKph;

  /// 風向角度(度)
  final int windDegree;

  /// 風向, 例如 "E"
  final String windDir;

  /// 氣壓(毫巴)
  final double pressureMb;

  /// 氣壓(英吋)
  final double pressureIn;

  /// 降水量(毫米)
  final double precipMm;

  /// 降水量(英吋)
  final double precipIn;

  /// 相對濕度(百分比)
  final int humidity;

  /// 雲量(百分比)
  final int cloud;

  /// 體感溫度(攝氏)
  final double feelslikeC;

  /// 體感溫度(華氏)
  final double feelslikeF;

  /// 能見度(公里)
  final double visKm;

  /// 能見度(英里)
  final double visMiles;

  /// 紫外線指數
  final double uv;

  /// 陣風風速(英里/小時)
  final double gustMph;

  /// 陣風風速(公里/小時)
  final double gustKph;

  WeatherCurrent({
    required this.cityName,
    required this.region,
    required this.country,
    required this.lat,
    required this.lon,
    required this.timeZoneID,
    required this.localtimeEpoch,
    required this.localtime,
    required this.lastUpdatedEpoch,
    required this.lastUpdated,
    required this.tempC,
    required this.tempF,
    required this.isDay,
    required this.conditionText,
    required this.conditionIcon,
    required this.conditionCode,
    required this.windMph,
    required this.windKph,
    required this.windDegree,
    required this.windDir,
    required this.pressureMb,
    required this.pressureIn,
    required this.precipMm,
    required this.precipIn,
    required this.humidity,
    required this.cloud,
    required this.feelslikeC,
    required this.feelslikeF,
    required this.visKm,
    required this.visMiles,
    required this.uv,
    required this.gustMph,
    required this.gustKph,
  });

  /// 從 JSON 物件建立 WeatherCurrent 實例
  factory WeatherCurrent.fromJson(Map<String, dynamic> json) {
    final location = json['location'];
    final current = json['current'];
    final condition = current['condition'];

    return WeatherCurrent(
      cityName: location['name'],
      region: location['region'],
      country: location['country'],
      lat: location['lat'].toDouble(),
      lon: location['lon'].toDouble(),
      timeZoneID: location['tz_id'],
      localtimeEpoch: location['localtime_epoch'],
      localtime: location['localtime'],
      lastUpdatedEpoch: current['last_updated_epoch'],
      lastUpdated: current['last_updated'],
      tempC: current['temp_c'].toDouble(),
      tempF: current['temp_f'].toDouble(),
      isDay: current['is_day'],
      conditionText: condition['text'],
      conditionIcon: condition['icon'],
      conditionCode: condition['code'],
      windMph: current['wind_mph'].toDouble(),
      windKph: current['wind_kph'].toDouble(),
      windDegree: current['wind_degree'],
      windDir: current['wind_dir'],
      pressureMb: current['pressure_mb'].toDouble(),
      pressureIn: current['pressure_in'].toDouble(),
      precipMm: current['precip_mm'].toDouble(),
      precipIn: current['precip_in'].toDouble(),
      humidity: current['humidity'],
      cloud: current['cloud'],
      feelslikeC: current['feelslike_c'].toDouble(),
      feelslikeF: current['feelslike_f'].toDouble(),
      visKm: current['vis_km'].toDouble(),
      visMiles: current['vis_miles'].toDouble(),
      uv: current['uv'].toDouble(),
      gustMph: current['gust_mph'].toDouble(),
      gustKph: current['gust_kph'].toDouble(),
    );
  }

  static Future<WeatherCurrent> fetchData(
    String apiKey,
    String location,
  ) async {
    final url = Uri.parse(
      'https://api.weatherapi.com/v1/current.json?key=$apiKey&q=$location&aqi=yes',
    );
    final response = await http.get(url);

    log('get one');

    if (response.statusCode == 200) {
      final json = jsonDecode(response.body);
      return WeatherCurrent.fromJson(json);
    } else {
      throw Exception('Failed to load weather data');
    }
  }

  @override
  String toString() {
    return '''
      城市名稱: $cityName
      地區或省份名稱: $region
      國家名稱: $country
      緯度: $lat
      經度: $lon
      時區 ID: $timeZoneID
      當地時間的 Unix 時間戳: $localtimeEpoch
      當地時間: $localtime
      最後更新時間的 Unix 時間戳: $lastUpdatedEpoch
      最後更新時間: $lastUpdated
      溫度(攝氏): $tempC
      溫度(華氏): $tempF
      是否為白天(1:是, 0:否): $isDay
      天氣狀況描述: $conditionText
      天氣圖示 URL: $conditionIcon
      天氣狀況代碼: $conditionCode
      風速(英里/小時): $windMph
      風速(公里/小時): $windKph
      風向角度(度): $windDegree
      風向: $windDir
      氣壓(毫巴): $pressureMb
      氣壓(英吋): $pressureIn
      降水量(毫米): $precipMm
      降水量(英吋): $precipIn
      相對濕度(百分比): $humidity
      雲量(百分比): $cloud
      體感溫度(攝氏): $feelslikeC
      體感溫度(華氏): $feelslikeF
      能見度(公里): $visKm
      能見度(英里): $visMiles
      紫外線指數: $uv
      陣風風速(英里/小時): $gustMph
      陣風風速(公里/小時): $gustKph
      ''';
  }
}

const API_KEY = '569f2ae006bb4c4c9f8153435252005';
