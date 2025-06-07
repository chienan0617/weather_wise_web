import 'dart:convert';
import 'package:hive/hive.dart';
import 'package:http/http.dart' as http;

part 'weather.mod.g.dart';

/// 最外層容器，包含 location、current、forecastDay 列表
@HiveType(typeId: 0)
class Weather {
  /// JSON: location — 查詢地點資訊
  @HiveField(0)
  final Location location;

  /// JSON: current — 當前天氣資料
  @HiveField(1)
  final CurrentWeather current;

  /// JSON: forecast.forecastday — 預報列表 (最多 3 天)
  @HiveField(2)
  final List<ForecastDay> forecast;

  /// 本地緩存時間，用於判斷是否過期
  @HiveField(3)
  final DateTime lastFetchTime;

  @HiveField(4)
  final List<double> loc;

  @HiveField(5)
  final String cityName;

  Weather({
    required this.location,
    required this.current,
    required this.forecast,
    required this.lastFetchTime,
    required this.loc,
    required this.cityName,
  });

  /// 從 JSON 建構 Weather 實例
  factory Weather.fromJson(
    Map<String, dynamic> json, List<double> loca, String cityName
  ) {
    final loc = Location.fromJson(json['location']);
    final cur = CurrentWeather.fromJson(json['current']);
    final days = (json['forecast']['forecastday'] as List)
        .map((e) => ForecastDay.fromJson(e as Map<String, dynamic>))
        .toList();

    return Weather(
      location: loc,
      current: cur,
      forecast: days,
      lastFetchTime: DateTime.now(),
      loc: loca,
      cityName: cityName,
    );
  }

  /// 呼叫 WeatherAPI 的 forecast.json 端點，動態指定天數 (1–3)
  static Future<Weather> fetchForecastWeather({
    required String apiKey,
    required String queryLocation,
    required int days,
    required double lat,
    required double lon,
    required String cityName
  }) async {
    print('https://api.weatherapi.com/v1/forecast.json'
      '?key=$apiKey'
      '&q=$queryLocation'
      '&days=$days'
      '&aqi=yes'
      '&alerts=no');
    final uri = Uri.parse(
      'https://api.weatherapi.com/v1/forecast.json'
      '?key=$apiKey'
      '&q=$queryLocation'
      '&days=$days'
      '&aqi=yes',
    );

    final resp = await http.get(uri);
    if (resp.statusCode != 200) {
      throw Exception('WeatherAPI request failed: ${resp.statusCode}');
    }
    return Weather.fromJson(jsonDecode(resp.body), [lat, lon], cityName);
  }

  @override
  String toString() {
    final sb = StringBuffer();

    // 1. Location 全部欄位
    sb.writeln('=== Location ===');
    sb.writeln(' name          : ${location.name}');
    sb.writeln(' region        : ${location.region}');
    sb.writeln(' country       : ${location.country}');
    // sb.writeln(' lat           : ${location.lat}');
    // sb.writeln(' lon           : ${location.lon}');
    sb.writeln(' tzId          : ${location.tzId}');
    sb.writeln(' localtimeEpoch: ${location.localtimeEpoch}');
    sb.writeln(' localtime     : ${location.localtime}');

    // 2. CurrentWeather 全部欄位
    sb.writeln('\n=== CurrentWeather ===');
    sb.writeln(' lastUpdatedEpoch: ${current.lastUpdatedEpoch}');
    sb.writeln(' lastUpdated     : ${current.lastUpdated}');
    sb.writeln(' tempC           : ${current.tempC}');
    sb.writeln(' tempF           : ${current.tempF}');
    sb.writeln(' isDay           : ${current.isDay}');
    sb.writeln(' condition.text  : ${current.condition.text}');
    sb.writeln(' condition.icon  : ${current.condition.icon}');
    sb.writeln(' condition.code  : ${current.condition.code}');
    sb.writeln(' windMph         : ${current.windMph}');
    sb.writeln(' windKph         : ${current.windKph}');
    sb.writeln(' windDegree      : ${current.windDegree}');
    sb.writeln(' windDir         : ${current.windDir}');
    sb.writeln(' pressureMb      : ${current.pressureMb}');
    sb.writeln(' pressureIn      : ${current.pressureIn}');
    sb.writeln(' precipMm        : ${current.precipMm}');
    sb.writeln(' precipIn        : ${current.precipIn}');
    sb.writeln(' humidity        : ${current.humidity}');
    sb.writeln(' cloud           : ${current.cloud}');
    sb.writeln(' feelslikeC      : ${current.feelslikeC}');
    sb.writeln(' feelslikeF      : ${current.feelslikeF}');
    sb.writeln(' visKm           : ${current.visKm}');
    sb.writeln(' visMiles        : ${current.visMiles}');
    sb.writeln(' uv              : ${current.uv}');
    sb.writeln(' gustMph         : ${current.gustMph}');
    sb.writeln(' gustKph         : ${current.gustKph}');
    // sb.writeln(' airQuality.co   : ${current.airQuality.co}');
    // sb.writeln(' airQuality.no2  : ${current.airQuality.no2}');
    // sb.writeln(' airQuality.o3   : ${current.airQuality.o3}');
    // sb.writeln(' airQuality.so2  : ${current.airQuality.so2}');
    // sb.writeln(' airQuality.pm25 : ${current.airQuality.pm25}');
    // sb.writeln(' airQuality.pm10 : ${current.airQuality.pm10}');
    // sb.writeln(' airQuality.usEpaIndex : ${current.airQuality.usEpaIndex}');
    // sb.writeln(' airQuality.gbDefraIndex: ${current.airQuality.gbDefraIndex}');

    // 3. ForecastDay 清單
    for (var i = 0; i < forecast.length; i++) {
      final day = forecast[i];
      sb.writeln('\n=== ForecastDay #${i + 1} ===');
      sb.writeln(' date       : ${day.date}');
      sb.writeln(' dateEpoch  : ${day.dateEpoch}');

      // 3a. DaySummary
      sb.writeln('--- DaySummary ---');
      sb.writeln(' maxTempC         : ${day.day.maxTempC}');
      sb.writeln(' maxTempF         : ${day.day.maxTempF}');
      sb.writeln(' minTempC         : ${day.day.minTempC}');
      sb.writeln(' minTempF         : ${day.day.minTempF}');
      sb.writeln(' avgTempC         : ${day.day.avgTempC}');
      sb.writeln(' avgTempF         : ${day.day.avgTempF}');
      sb.writeln(' maxWindMph       : ${day.day.maxWindMph}');
      sb.writeln(' maxWindKph       : ${day.day.maxWindKph}');
      sb.writeln(' totalPrecipMm    : ${day.day.totalPrecipMm}');
      sb.writeln(' totalPrecipIn    : ${day.day.totalPrecipIn}');
      sb.writeln(' totalSnowCm      : ${day.day.totalSnowCm}');
      sb.writeln(' avgVisKm         : ${day.day.avgVisKm}');
      sb.writeln(' avgVisMiles      : ${day.day.avgVisMiles}');
      sb.writeln(' avgHumidity      : ${day.day.avgHumidity}');
      sb.writeln(' dailyWillItRain  : ${day.day.dailyWillItRain}');
      sb.writeln(' dailyChanceOfRain: ${day.day.dailyChanceOfRain}');
      sb.writeln(' dailyWillItSnow  : ${day.day.dailyWillItSnow}');
      sb.writeln(' dailyChanceOfSnow: ${day.day.dailyChanceOfSnow}');
      sb.writeln(' condition.text   : ${day.day.condition.text}');
      sb.writeln(' condition.icon   : ${day.day.condition.icon}');
      sb.writeln(' condition.code   : ${day.day.condition.code}');
      sb.writeln(' uv               : ${day.day.uv}');
      // sb.writeln(' day.airQuality.co         : ${day.day.airQuality.co}');
      // sb.writeln(' day.airQuality.no2        : ${day.day.airQuality.no2}');
      // sb.writeln(' day.airQuality.o3         : ${day.day.airQuality.o3}');
      // sb.writeln(' day.airQuality.so2        : ${day.day.airQuality.so2}');
      // sb.writeln(' day.airQuality.pm25       : ${day.day.airQuality.pm25}');
      // sb.writeln(' day.airQuality.pm10       : ${day.day.airQuality.pm10}');
      // sb.writeln(
      //   ' day.airQuality.usEpaIndex : ${day.day.airQuality.usEpaIndex}',
      // );
      // sb.writeln(
      //   ' day.airQuality.gbDefraIndex: ${day.day.airQuality.gbDefraIndex}',
      // );

      // 3b. Astro
      sb.writeln('--- Astro ---');
      sb.writeln(' sunrise        : ${day.astro.sunrise}');
      sb.writeln(' sunset         : ${day.astro.sunset}');
      sb.writeln(' moonrise       : ${day.astro.moonrise}');
      sb.writeln(' moonset        : ${day.astro.moonset}');
      sb.writeln(' moonPhase      : ${day.astro.moonPhase}');
      sb.writeln(' moonIllumination: ${day.astro.moonIllumination}');
      sb.writeln(' isMoonUp       : ${day.astro.isMoonUp}');
      sb.writeln(' isSunUp        : ${day.astro.isSunUp}');

      // 3c. 全部 HourForecast
      for (var h in day.hour) {
        sb.writeln('--- HourForecast @ ${h.time} ---');
        sb.writeln(' timeEpoch        : ${h.timeEpoch}');
        sb.writeln(' tempC            : ${h.tempC}');
        sb.writeln(' tempF            : ${h.tempF}');
        sb.writeln(' isDay            : ${h.isDay}');
        sb.writeln(' condition.text   : ${h.condition.text}');
        sb.writeln(' condition.icon   : ${h.condition.icon}');
        sb.writeln(' condition.code   : ${h.condition.code}');
        sb.writeln(' windMph          : ${h.windMph}');
        sb.writeln(' windKph          : ${h.windKph}');
        sb.writeln(' windDegree       : ${h.windDegree}');
        sb.writeln(' windDir          : ${h.windDir}');
        sb.writeln(' pressureMb       : ${h.pressureMb}');
        sb.writeln(' pressureIn       : ${h.pressureIn}');
        sb.writeln(' precipMm         : ${h.precipMm}');
        sb.writeln(' precipIn         : ${h.precipIn}');
        sb.writeln(' snowCm           : ${h.snowCm}');
        sb.writeln(' humidity         : ${h.humidity}');
        sb.writeln(' cloud            : ${h.cloud}');
        sb.writeln(' feelslikeC       : ${h.feelslikeC}');
        sb.writeln(' feelslikeF       : ${h.feelslikeF}');
        sb.writeln(' windchillC       : ${h.windchillC}');
        sb.writeln(' windchillF       : ${h.windchillF}');
        sb.writeln(' heatindexC       : ${h.heatindexC}');
        sb.writeln(' heatindexF       : ${h.heatindexF}');
        sb.writeln(' dewpointC        : ${h.dewpointC}');
        sb.writeln(' dewpointF        : ${h.dewpointF}');
        sb.writeln(' willItRain       : ${h.willItRain}');
        sb.writeln(' chanceOfRain     : ${h.chanceOfRain}');
        sb.writeln(' willItSnow       : ${h.willItSnow}');
        sb.writeln(' chanceOfSnow     : ${h.chanceOfSnow}');
        sb.writeln(' visKm            : ${h.visKm}');
        sb.writeln(' visMiles         : ${h.visMiles}');
        sb.writeln(' gustMph          : ${h.gustMph}');
        sb.writeln(' gustKph          : ${h.gustKph}');
        sb.writeln(' uv               : ${h.uv}');
        // sb.writeln(' shortRad         : ${h.shortRad}');
        // sb.writeln(' diffRad          : ${h.diffRad}');
        // sb.writeln(' hour.airQuality.co         : ${h.airQuality.co}');
        // sb.writeln(' hour.airQuality.no2        : ${h.airQuality.no2}');
        // sb.writeln(' hour.airQuality.o3         : ${h.airQuality.o3}');
        // sb.writeln(' hour.airQuality.so2        : ${h.airQuality.so2}');
        // sb.writeln(' hour.airQuality.pm25       : ${h.airQuality.pm25}');
        // sb.writeln(' hour.airQuality.pm10       : ${h.airQuality.pm10}');
        // sb.writeln(' hour.airQuality.usEpaIndex : ${h.airQuality.usEpaIndex}');
        // sb.writeln(
        //   ' hour.airQuality.gbDefraIndex: ${h.airQuality.gbDefraIndex}',
        // );
      }
    }

    return sb.toString();
  }
}

/// 查詢地點資訊
@HiveType(typeId: 1)
class Location {
  /// JSON: name — 城市名稱
  @HiveField(0)
  final String name;

  /// JSON: region — 地區／省份
  @HiveField(1)
  final String region;

  /// JSON: country — 國家
  @HiveField(2)
  final String country;

  /// JSON: lat — 緯度
  // @HiveField(3)
  // final double lat;

  // /// JSON: lon — 經度
  // @HiveField(4)
  // final double lon;

  /// JSON: tz_id — 時區 ID
  @HiveField(5)
  final String tzId;

  /// JSON: localtime_epoch — 當地時間 Unix 時間戳
  @HiveField(6)
  final int localtimeEpoch;

  /// JSON: localtime — 當地時間字串 (yyyy-MM-dd HH:mm)
  @HiveField(7)
  final String localtime;

  Location({
    required this.name,
    required this.region,
    required this.country,
    // required this.lat,
    // required this.lon,
    required this.tzId,
    required this.localtimeEpoch,
    required this.localtime,
  });

  factory Location.fromJson(Map<String, dynamic> json) => Location(
    name: json['name'],
    region: json['region'],
    country: json['country'],
    // lat: (json['lat'] as num).toDouble(),
    // lon: (json['lon'] as num).toDouble(),
    tzId: json['tz_id'],
    localtimeEpoch: json['localtime_epoch'],
    localtime: json['localtime'],
  );

  // @override
  // String toString() => '$name, $region, $country (@$lat,$lon) $localtime';
}

/// 當前天氣資料
@HiveType(typeId: 2)
class CurrentWeather {
  /// JSON: last_updated_epoch — 最後更新 Unix 時間戳
  @HiveField(0)
  final int lastUpdatedEpoch;

  /// JSON: last_updated — 最後更新時間字串
  @HiveField(1)
  final String lastUpdated;

  /// JSON: temp_c — 溫度 (°C)
  @HiveField(2)
  final double tempC;

  /// JSON: temp_f — 溫度 (°F)
  @HiveField(3)
  final double tempF;

  /// JSON: is_day — 是否為白天 (1/0)
  @HiveField(4)
  final int isDay;

  /// JSON: condition — 天氣狀況 (文字＋圖示＋代碼)
  @HiveField(5)
  final Condition condition;

  /// JSON: wind_mph — 風速 (mph)
  @HiveField(6)
  final double windMph;

  /// JSON: wind_kph — 風速 (kph)
  @HiveField(7)
  final double windKph;

  /// JSON: wind_degree — 風向角度
  @HiveField(8)
  final int windDegree;

  /// JSON: wind_dir — 風向文字
  @HiveField(9)
  final String windDir;

  /// JSON: pressure_mb — 氣壓 (mb)
  @HiveField(10)
  final double pressureMb;

  /// JSON: pressure_in — 氣壓 (in)
  @HiveField(11)
  final double pressureIn;

  /// JSON: precip_mm — 降水量 (mm)
  @HiveField(12)
  final double precipMm;

  /// JSON: precip_in — 降水量 (in)
  @HiveField(13)
  final double precipIn;

  /// JSON: humidity — 濕度 (%)
  @HiveField(14)
  final int humidity;

  /// JSON: cloud — 雲量 (%)
  @HiveField(15)
  final int cloud;

  /// JSON: feelslike_c — 體感溫度 (°C)
  @HiveField(16)
  final double feelslikeC;

  /// JSON: feelslike_f — 體感溫度 (°F)
  @HiveField(17)
  final double feelslikeF;

  /// JSON: vis_km — 能見度 (km)
  @HiveField(18)
  final double visKm;

  /// JSON: vis_miles — 能見度 (miles)
  @HiveField(19)
  final double visMiles;

  /// JSON: uv — 紫外線指數
  @HiveField(20)
  final double uv;

  /// JSON: gust_mph — 陣風 (mph)
  @HiveField(21)
  final double gustMph;

  /// JSON: gust_kph — 陣風 (kph)
  @HiveField(22)
  final double gustKph;

  /// JSON: air_quality — 空氣品質指標物件
  @HiveField(23)
  // final AirQuality airQuality;
  CurrentWeather({
    required this.lastUpdatedEpoch,
    required this.lastUpdated,
    required this.tempC,
    required this.tempF,
    required this.isDay,
    required this.condition,
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
    // required this.airQuality,
  });

  factory CurrentWeather.fromJson(Map<String, dynamic> json) {
    return CurrentWeather(
      lastUpdatedEpoch: json['last_updated_epoch'],
      lastUpdated: json['last_updated'],
      tempC: (json['temp_c'] as num).toDouble(),
      tempF: (json['temp_f'] as num).toDouble(),
      isDay: json['is_day'],
      condition: Condition.fromJson(json['condition']),
      windMph: (json['wind_mph'] as num).toDouble(),
      windKph: (json['wind_kph'] as num).toDouble(),
      windDegree: json['wind_degree'],
      windDir: json['wind_dir'],
      pressureMb: (json['pressure_mb'] as num).toDouble(),
      pressureIn: (json['pressure_in'] as num).toDouble(),
      precipMm: (json['precip_mm'] as num).toDouble(),
      precipIn: (json['precip_in'] as num).toDouble(),
      humidity: json['humidity'],
      cloud: json['cloud'],
      feelslikeC: (json['feelslike_c'] as num).toDouble(),
      feelslikeF: (json['feelslike_f'] as num).toDouble(),
      visKm: (json['vis_km'] as num).toDouble(),
      visMiles: (json['vis_miles'] as num).toDouble(),
      uv: (json['uv'] as num).toDouble(),
      gustMph: (json['gust_mph'] as num).toDouble(),
      gustKph: (json['gust_kph'] as num).toDouble(),
      // airQuality: AirQuality.fromJson(json['air_quality']),
    );
  }

  // @override
  // '[$lastUpdated] $tempC°C, ${condition.text}, wind ${windKph}kph, AQI ${airQuality.usEpaIndex}';
}

/// 單日預報
@HiveType(typeId: 3)
class ForecastDay {
  /// JSON: date — 預報日期 (yyyy-MM-dd)
  @HiveField(0)
  final String date;

  /// JSON: date_epoch — 日期 Unix epoch
  @HiveField(1)
  final int dateEpoch;

  /// JSON: day — 當日摘要物件
  @HiveField(2)
  final DaySummary day;

  /// JSON: astro — 天文資訊物件
  @HiveField(3)
  final Astro astro;

  /// JSON: hour — 每小時預報列表
  @HiveField(4)
  final List<HourForecast> hour;

  ForecastDay({
    required this.date,
    required this.dateEpoch,
    required this.day,
    required this.astro,
    required this.hour,
  });

  factory ForecastDay.fromJson(Map<String, dynamic> json) => ForecastDay(
    date: json['date'],
    dateEpoch: json['date_epoch'],
    day: DaySummary.fromJson(json['day']),
    astro: Astro.fromJson(json['astro']),
    hour: (json['hour'] as List)
        .map((e) => HourForecast.fromJson(e as Map<String, dynamic>))
        .toList(),
  );

  @override
  String toString() =>
      '[$date] ${day.condition.text}, H:${day.maxTempC}°C L:${day.minTempC}°C';
}

/// 當日摘要
@HiveType(typeId: 4)
class DaySummary {
  /// JSON: maxtemp_c — 最高溫 (°C)
  @HiveField(0)
  final double maxTempC;

  /// JSON: maxtemp_f — 最高溫 (°F)
  @HiveField(1)
  final double maxTempF;

  /// JSON: mintemp_c — 最低溫 (°C)
  @HiveField(2)
  final double minTempC;

  /// JSON: mintemp_f — 最低溫 (°F)
  @HiveField(3)
  final double minTempF;

  /// JSON: avgtemp_c — 平均溫 (°C)
  @HiveField(4)
  final double avgTempC;

  /// JSON: avgtemp_f — 平均溫 (°F)
  @HiveField(5)
  final double avgTempF;

  /// JSON: maxwind_mph — 最大風速 (mph)
  @HiveField(6)
  final double maxWindMph;

  /// JSON: maxwind_kph — 最大風速 (kph)
  @HiveField(7)
  final double maxWindKph;

  /// JSON: totalprecip_mm — 日降水量 (mm)
  @HiveField(8)
  final double totalPrecipMm;

  /// JSON: totalprecip_in — 日降水量 (in)
  @HiveField(9)
  final double totalPrecipIn;

  /// JSON: totalsnow_cm — 日雪量 (cm)
  @HiveField(10)
  final double totalSnowCm;

  /// JSON: avgvis_km — 平均能見度 (km)
  @HiveField(11)
  final double avgVisKm;

  /// JSON: avgvis_miles — 平均能見度 (miles)
  @HiveField(12)
  final double avgVisMiles;

  /// JSON: avghumidity — 平均濕度 (%)
  @HiveField(13)
  final int avgHumidity;

  /// JSON: daily_will_it_rain — 當日是否會下雨 (0/1)
  @HiveField(14)
  final int dailyWillItRain;

  /// JSON: daily_chance_of_rain — 下雨機率 (%)
  @HiveField(15)
  final int dailyChanceOfRain;

  /// JSON: daily_will_it_snow — 當日是否會下雪 (0/1)
  @HiveField(16)
  final int dailyWillItSnow;

  /// JSON: daily_chance_of_snow — 下雪機率 (%)
  @HiveField(17)
  final int dailyChanceOfSnow;

  /// JSON: condition — 當日天氣狀況
  @HiveField(18)
  final Condition condition;

  /// JSON: uv — 紫外線指數
  @HiveField(19)
  final double uv;

  /// JSON: air_quality — 當日空氣品質
  @HiveField(20)
  // final AirQuality airQuality;
  DaySummary({
    required this.maxTempC,
    required this.maxTempF,
    required this.minTempC,
    required this.minTempF,
    required this.avgTempC,
    required this.avgTempF,
    required this.maxWindMph,
    required this.maxWindKph,
    required this.totalPrecipMm,
    required this.totalPrecipIn,
    required this.totalSnowCm,
    required this.avgVisKm,
    required this.avgVisMiles,
    required this.avgHumidity,
    required this.dailyWillItRain,
    required this.dailyChanceOfRain,
    required this.dailyWillItSnow,
    required this.dailyChanceOfSnow,
    required this.condition,
    required this.uv,
    // required this.airQuality,
  });

  factory DaySummary.fromJson(Map<String, dynamic> json) => DaySummary(
    maxTempC: (json['maxtemp_c'] as num).toDouble(),
    maxTempF: (json['maxtemp_f'] as num).toDouble(),
    minTempC: (json['mintemp_c'] as num).toDouble(),
    minTempF: (json['mintemp_f'] as num).toDouble(),
    avgTempC: (json['avgtemp_c'] as num).toDouble(),
    avgTempF: (json['avgtemp_f'] as num).toDouble(),
    maxWindMph: (json['maxwind_mph'] as num).toDouble(),
    maxWindKph: (json['maxwind_kph'] as num).toDouble(),
    totalPrecipMm: (json['totalprecip_mm'] as num).toDouble(),
    totalPrecipIn: (json['totalprecip_in'] as num).toDouble(),
    totalSnowCm: (json['totalsnow_cm'] as num).toDouble(),
    avgVisKm: (json['avgvis_km'] as num).toDouble(),
    avgVisMiles: (json['avgvis_miles'] as num).toDouble(),
    avgHumidity: json['avghumidity'],
    dailyWillItRain: json['daily_will_it_rain'],
    dailyChanceOfRain: json['daily_chance_of_rain'],
    dailyWillItSnow: json['daily_will_it_snow'],
    dailyChanceOfSnow: json['daily_chance_of_snow'],
    condition: Condition.fromJson(json['condition']),
    uv: (json['uv'] as num).toDouble(),
    // airQuality: AirQuality.fromJson(json['air_quality']),
  );

  @override
  String toString() =>
      'Max:$maxTempC°C Min:$minTempC°C Condition:${condition.text}';
}

/// 天文資訊
@HiveType(typeId: 5)
class Astro {
  /// JSON: sunrise — 日出時間 (hh:mm AM/PM)
  @HiveField(0)
  final String sunrise;

  /// JSON: sunset — 日落時間 (hh:mm AM/PM)
  @HiveField(1)
  final String sunset;

  /// JSON: moonrise — 月出時間 (hh:mm AM/PM)
  @HiveField(2)
  final String moonrise;

  /// JSON: moonset — 月落時間 (hh:mm AM/PM)
  @HiveField(3)
  final String moonset;

  /// JSON: moon_phase — 月相描述
  @HiveField(4)
  final String moonPhase;

  /// JSON: moon_illumination — 月亮照明度 (%)
  @HiveField(5)
  final int moonIllumination;

  /// JSON: is_moon_up — 月亮是否可見 (0/1)
  @HiveField(6)
  final int isMoonUp;

  /// JSON: is_sun_up — 太陽是否可見 (0/1)
  @HiveField(7)
  final int isSunUp;

  Astro({
    required this.sunrise,
    required this.sunset,
    required this.moonrise,
    required this.moonset,
    required this.moonPhase,
    required this.moonIllumination,
    required this.isMoonUp,
    required this.isSunUp,
  });

  factory Astro.fromJson(Map<String, dynamic> json) => Astro(
    sunrise: json['sunrise'],
    sunset: json['sunset'],
    moonrise: json['moonrise'],
    moonset: json['moonset'],
    moonPhase: json['moon_phase'],
    moonIllumination: int.parse(json['moon_illumination'].toString()),
    isMoonUp: json['is_moon_up'],
    isSunUp: json['is_sun_up'],
  );

  @override
  String toString() =>
      'Sunrise:$sunrise Sunset:$sunset MoonPhase:$moonPhase Illum:$moonIllumination%';
}

/// 每小時預報
@HiveType(typeId: 6)
class HourForecast {
  /// JSON: time_epoch — 時間 Unix epoch
  @HiveField(0)
  final int timeEpoch;

  /// JSON: time — 時間字串 (yyyy-MM-dd HH:mm)
  @HiveField(1)
  final String time;

  /// JSON: temp_c — 溫度 (°C)
  @HiveField(2)
  final double tempC;

  /// JSON: temp_f — 溫度 (°F)
  @HiveField(3)
  final double tempF;

  /// JSON: is_day — 是否為白天 (1/0)
  @HiveField(4)
  final int isDay;

  /// JSON: condition — 天氣狀況
  @HiveField(5)
  final Condition condition;

  /// JSON: wind_mph — 風速 (mph)
  @HiveField(6)
  final double windMph;

  /// JSON: wind_kph — 風速 (kph)
  @HiveField(7)
  final double windKph;

  /// JSON: wind_degree — 風向角度
  @HiveField(8)
  final int windDegree;

  /// JSON: wind_dir — 風向文字
  @HiveField(9)
  final String windDir;

  /// JSON: pressure_mb — 氣壓 (mb)
  @HiveField(10)
  final double pressureMb;

  /// JSON: pressure_in — 氣壓 (in)
  @HiveField(11)
  final double pressureIn;

  /// JSON: precip_mm — 降水量 (mm)
  @HiveField(12)
  final double precipMm;

  /// JSON: precip_in — 降水量 (in)
  @HiveField(13)
  final double precipIn;

  /// JSON: snow_cm — 降雪量 (cm)
  @HiveField(14)
  final double snowCm;

  /// JSON: humidity — 濕度 (%)
  @HiveField(15)
  final int humidity;

  /// JSON: cloud — 雲量 (%)
  @HiveField(16)
  final int cloud;

  /// JSON: feelslike_c — 體感溫度 (°C)
  @HiveField(17)
  final double feelslikeC;

  /// JSON: feelslike_f — 體感溫度 (°F)
  @HiveField(18)
  final double feelslikeF;

  /// JSON: windchill_c — 風寒 (°C)
  @HiveField(19)
  final double windchillC;

  /// JSON: windchill_f — 風寒 (°F)
  @HiveField(20)
  final double windchillF;

  /// JSON: heatindex_c — 熱指數 (°C)
  @HiveField(21)
  final double heatindexC;

  /// JSON: heatindex_f — 熱指數 (°F)
  @HiveField(22)
  final double heatindexF;

  /// JSON: dewpoint_c — 露點 (°C)
  @HiveField(23)
  final double dewpointC;

  /// JSON: dewpoint_f — 露點 (°F)
  @HiveField(24)
  final double dewpointF;

  /// JSON: will_it_rain — 本小時是否會下雨 (0/1)
  @HiveField(25)
  final int willItRain;

  /// JSON: chance_of_rain — 下雨機率 (%)
  @HiveField(26)
  final int chanceOfRain;

  /// JSON: will_it_snow — 本小時是否會下雪 (0/1)
  @HiveField(27)
  final int willItSnow;

  /// JSON: chance_of_snow — 下雪機率 (%)
  @HiveField(28)
  final int chanceOfSnow;

  /// JSON: vis_km — 能見度 (km)
  @HiveField(29)
  final double visKm;

  /// JSON: vis_miles — 能見度 (miles)
  @HiveField(30)
  final double visMiles;

  /// JSON: gust_mph — 陣風 (mph)
  @HiveField(31)
  final double gustMph;

  /// JSON: gust_kph — 陣風 (kph)
  @HiveField(32)
  final double gustKph;

  /// JSON: uv — 紫外線指數
  @HiveField(33)
  final double uv;

  // /// JSON: air_quality — 空氣品質
  // @HiveField(34)
  // final AirQuality airQuality;

  // /// JSON: short_rad — 短波輻射量 (僅部分方案提供)
  // @HiveField(35)
  // final double shortRad;

  // /// JSON: diff_rad — 擴散輻射量 (僅部分方案提供)
  // @HiveField(36)
  // final double diffRad;

  HourForecast({
    required this.timeEpoch,
    required this.time,
    required this.tempC,
    required this.tempF,
    required this.isDay,
    required this.condition,
    required this.windMph,
    required this.windKph,
    required this.windDegree,
    required this.windDir,
    required this.pressureMb,
    required this.pressureIn,
    required this.precipMm,
    required this.precipIn,
    required this.snowCm,
    required this.humidity,
    required this.cloud,
    required this.feelslikeC,
    required this.feelslikeF,
    required this.windchillC,
    required this.windchillF,
    required this.heatindexC,
    required this.heatindexF,
    required this.dewpointC,
    required this.dewpointF,
    required this.willItRain,
    required this.chanceOfRain,
    required this.willItSnow,
    required this.chanceOfSnow,
    required this.visKm,
    required this.visMiles,
    required this.gustMph,
    required this.gustKph,
    required this.uv,
    // required this.airQuality,
    // required this.shortRad,
    // required this.diffRad,
  });

  factory HourForecast.fromJson(Map<String, dynamic> json) => HourForecast(
    timeEpoch: json['time_epoch'],
    time: json['time'],
    tempC: (json['temp_c'] as num).toDouble(),
    tempF: (json['temp_f'] as num).toDouble(),
    isDay: json['is_day'],
    condition: Condition.fromJson(json['condition']),
    windMph: (json['wind_mph'] as num).toDouble(),
    windKph: (json['wind_kph'] as num).toDouble(),
    windDegree: json['wind_degree'],
    windDir: json['wind_dir'],
    pressureMb: (json['pressure_mb'] as num).toDouble(),
    pressureIn: (json['pressure_in'] as num).toDouble(),
    precipMm: (json['precip_mm'] as num).toDouble(),
    precipIn: (json['precip_in'] as num).toDouble(),
    snowCm: (json['snow_cm'] as num).toDouble(),
    humidity: json['humidity'],
    cloud: json['cloud'],
    feelslikeC: (json['feelslike_c'] as num).toDouble(),
    feelslikeF: (json['feelslike_f'] as num).toDouble(),
    windchillC: (json['windchill_c'] as num).toDouble(),
    windchillF: (json['windchill_f'] as num).toDouble(),
    heatindexC: (json['heatindex_c'] as num).toDouble(),
    heatindexF: (json['heatindex_f'] as num).toDouble(),
    dewpointC: (json['dewpoint_c'] as num).toDouble(),
    dewpointF: (json['dewpoint_f'] as num).toDouble(),
    willItRain: json['will_it_rain'],
    chanceOfRain: json['chance_of_rain'],
    willItSnow: json['will_it_snow'],
    chanceOfSnow: json['chance_of_snow'],
    visKm: (json['vis_km'] as num).toDouble(),
    visMiles: (json['vis_miles'] as num).toDouble(),
    gustMph: (json['gust_mph'] as num).toDouble(),
    gustKph: (json['gust_kph'] as num).toDouble(),
    uv: (json['uv'] as num).toDouble(),
    // airQuality: AirQuality.fromJson(json['air_quality']),
    // shortRad: (json['short_rad'] as num).toDouble(),
    // diffRad: (json['diff_rad'] as num).toDouble(),
  );

  @override
  String toString() =>
      '$time: $tempC°C, ${condition.text}, rain:${willItRain == 1 ? "yes" : "no"}';
}

/// 共用的天氣狀況
@HiveType(typeId: 7)
class Condition {
  /// JSON: text — 狀況描述文字
  @HiveField(0)
  final String text;

  /// JSON: icon — 狀況圖示 URL
  @HiveField(1)
  final String icon;

  /// JSON: code — 狀況代碼
  @HiveField(2)
  final int code;

  Condition({required this.text, required this.icon, required this.code});

  factory Condition.fromJson(Map<String, dynamic> json) =>
      Condition(text: json['text'], icon: json['icon'], code: json['code']);

  @override
  String toString() => text;
}

/// 共用的空氣品質指標
@HiveType(typeId: 8)
class AirQuality {
  /// JSON: co — 一氧化碳 (µg/m3)
  @HiveField(0)
  final double co;

  /// JSON: no2 — 二氧化氮 (µg/m3)
  @HiveField(1)
  final double no2;

  /// JSON: o3 — 臭氧 (µg/m3)
  @HiveField(2)
  final double o3;

  /// JSON: so2 — 二氧化硫 (µg/m3)
  @HiveField(3)
  final double so2;

  /// JSON: pm2_5 — PM2.5 (µg/m3)
  @HiveField(4)
  final double pm25;

  /// JSON: pm10 — PM10 (µg/m3)
  @HiveField(5)
  final double pm10;

  /// JSON: us-epa-index — 美國 EPA 指數 (1–6)
  @HiveField(6)
  final int usEpaIndex;

  /// JSON: gb-defra-index — 英國 DEFRA 指數 (1–10)
  @HiveField(7)
  final int gbDefraIndex;

  AirQuality({
    required this.co,
    required this.no2,
    required this.o3,
    required this.so2,
    required this.pm25,
    required this.pm10,
    required this.usEpaIndex,
    required this.gbDefraIndex,
  });

  factory AirQuality.fromJson(Map<String, dynamic> json) => AirQuality(
    co: (json['co']) == null ? 0.toDouble() : (json['co'] as num).toDouble(),
    no2: (json['no2']) == null ? 0.toDouble() : (json['no2'] as num).toDouble(),
    o3: (json['o3']) == null ? 0.toDouble() : (json['o3'] as num).toDouble(),
    so2: (json['so2']) == null ? 0.toDouble() : (json['so2'] as num).toDouble(),
    pm25: (json['pm2_5']) == null
        ? 0.toDouble()
        : (json['pm2_5'] as num).toDouble(),
    pm10: (json['pm10']) == null
        ? 0.toDouble()
        : (json['pm10'] as num).toDouble(),
    usEpaIndex: (json['us-epa-index']) == null
        ? 0
        : (json['us-epa-index'] as num).toInt(),
    gbDefraIndex: (json['gb-defra-index']) == null
        ? 0
        : (json['gb-defra-index'] as num).toInt(),
  );
}

extension WeatherChineseString on Weather {
  String toChineseString() {
    final sb = StringBuffer();

    // 1. 位置資訊
    sb.writeln('=== 位置資訊 ===');
    sb.writeln('城市名稱 : ${location.name}');
    sb.writeln('地區／省份 : ${location.region}');
    sb.writeln('國家 : ${location.country}');
    // sb.writeln('緯度 : ${location.lat}');
    // sb.writeln('經度 : ${location.lon}');
    sb.writeln('時區編號 : ${location.tzId}');
    sb.writeln('當地時間戳 : ${location.localtimeEpoch}');
    sb.writeln('當地時間 : ${location.localtime}');

    // 2. 當前天氣
    sb.writeln('=== 當前天氣 ===');
    sb.writeln('更新時間戳 : ${current.lastUpdatedEpoch}');
    sb.writeln('更新時間 : ${current.lastUpdated}');
    sb.writeln('攝氏溫度 : ${current.tempC} ℃');
    sb.writeln('華氏溫度 : ${current.tempF} ℉');
    sb.writeln('是否白天 : ${current.isDay == 1 ? '是' : '否'}');
    sb.writeln(
      '天氣狀況 : ${current.condition.text}(代碼 ${current.condition.code})',
    );
    sb.writeln('狀況圖示網址 : ${current.condition.icon}');
    sb.writeln('風速(英里／小時) : ${current.windMph}');
    sb.writeln('風速(公里／小時) : ${current.windKph}');
    sb.writeln('風向角度 : ${current.windDegree}');
    sb.writeln('風向文字 : ${current.windDir}');
    sb.writeln('氣壓(毫巴) : ${current.pressureMb}');
    sb.writeln('氣壓(英吋) : ${current.pressureIn}');
    sb.writeln('降水量(毫米) : ${current.precipMm}');
    sb.writeln('降水量(英吋) : ${current.precipIn}');
    sb.writeln('相對濕度(％) : ${current.humidity}');
    sb.writeln('雲量(％) : ${current.cloud}');
    sb.writeln('體感溫度(℃) : ${current.feelslikeC}');
    sb.writeln('體感溫度(℉) : ${current.feelslikeF}');
    sb.writeln('能見度(公里) : ${current.visKm}');
    sb.writeln('能見度(英里) : ${current.visMiles}');
    sb.writeln('紫外線指數 : ${current.uv}');
    sb.writeln('陣風(英里／小時) : ${current.gustMph}');
    sb.writeln('陣風(公里／小時) : ${current.gustKph}');
    // sb.writeln('空氣品質 CO : ${current.airQuality.co}');
    // sb.writeln('空氣品質 NO₂ : ${current.airQuality.no2}');
    // sb.writeln('空氣品質 O₃ : ${current.airQuality.o3}');
    // sb.writeln('空氣品質 SO₂ : ${current.airQuality.so2}');
    // sb.writeln('空氣品質 PM2.5 : ${current.airQuality.pm25}');
    // sb.writeln('空氣品質 PM10  : ${current.airQuality.pm10}');
    // sb.writeln('美國 EPA 指數 : ${current.airQuality.usEpaIndex}');
    // sb.writeln('英國 DEFRA 指數 : ${current.airQuality.gbDefraIndex}');

    // 3. 預報(每天)
    for (var i = 0; i < forecast.length; i++) {
      final day = forecast[i];
      sb.writeln('=== 第 ${i + 1} 天預報(${day.date})===');
      sb.writeln('日期時間戳 : ${day.dateEpoch}');

      // 當日摘要
      sb.writeln('--- 當日摘要 ---');
      sb.writeln('最高溫(℃) : ${day.day.maxTempC}');
      sb.writeln('最高溫(℉) : ${day.day.maxTempF}');
      sb.writeln('最低溫(℃) : ${day.day.minTempC}');
      sb.writeln('最低溫(℉) : ${day.day.minTempF}');
      sb.writeln('平均溫(℃) : ${day.day.avgTempC}');
      sb.writeln('平均溫(℉) : ${day.day.avgTempF}');
      sb.writeln('最大風速(mph) : ${day.day.maxWindMph}');
      sb.writeln('最大風速(kph) : ${day.day.maxWindKph}');
      sb.writeln('日降水量(mm)  : ${day.day.totalPrecipMm}');
      sb.writeln('日降水量(in)  : ${day.day.totalPrecipIn}');
      sb.writeln('日雪量(cm) : ${day.day.totalSnowCm}');
      sb.writeln('平均能見度(km) : ${day.day.avgVisKm}');
      sb.writeln('平均能見度(mi) : ${day.day.avgVisMiles}');
      sb.writeln('平均濕度(％) : ${day.day.avgHumidity}');
      sb.writeln('當日會下雨 : ${day.day.dailyWillItRain == 1 ? '是' : '否'}');
      sb.writeln('下雨機率(％) : ${day.day.dailyChanceOfRain}');
      sb.writeln('當日會下雪 : ${day.day.dailyWillItSnow == 1 ? '是' : '否'}');
      sb.writeln('下雪機率(％) : ${day.day.dailyChanceOfSnow}');
      sb.writeln(
        '當日狀況 : ${day.day.condition.text}(代碼 ${day.day.condition.code})',
      );
      sb.writeln('當日紫外線指數 : ${day.day.uv}');
      sb.writeln(
        // '當日 AQI : US ${day.day.airQuality.usEpaIndex}，GB ${day.day.airQuality.gbDefraIndex}',
      );

      // 天文資訊
      sb.writeln('--- 天文資訊 ---');
      sb.writeln('日出時間 : ${day.astro.sunrise}');
      sb.writeln('日落時間 : ${day.astro.sunset}');
      sb.writeln('月出時間 : ${day.astro.moonrise}');
      sb.writeln('月落時間 : ${day.astro.moonset}');
      sb.writeln('月相 : ${day.astro.moonPhase}');
      sb.writeln('月亮照明度(％) : ${day.astro.moonIllumination}');
      sb.writeln('月亮是否可見 : ${day.astro.isMoonUp == 1 ? '是' : '否'}');
      sb.writeln('太陽是否可見 : ${day.astro.isSunUp == 1 ? '是' : '否'}');

      // 每小時預報
      sb.writeln('--- 每小時預報 ---');
      for (var h in day.hour) {
        sb.writeln('時間 : ${h.time}(時間戳 ${h.timeEpoch})');
        sb.writeln('  溫度(℃/℉) : ${h.tempC}/${h.tempF}');
        sb.writeln('  是否白天 : ${h.isDay == 1 ? '是' : '否'}');
        sb.writeln('  狀況 : ${h.condition.text}(代碼 ${h.condition.code})');
        sb.writeln('  風速(kph)  : ${h.windKph}');
        sb.writeln('  濕度(％) : ${h.humidity}');
        sb.writeln('  雲量(％) : ${h.cloud}');
        sb.writeln('  能見度(km) : ${h.visKm}');
        sb.writeln('  陣風(kph)  : ${h.gustKph}');
        sb.writeln(
          '  降水 : ${h.willItRain == 1 ? '是' : '否'}  機率 ${h.chanceOfRain}%',
        );
        sb.writeln(
          // '  AQI : US ${h.airQuality.usEpaIndex}，GB ${h.airQuality.gbDefraIndex}',
        );
      }
    }

    return sb.toString();
  }
}
