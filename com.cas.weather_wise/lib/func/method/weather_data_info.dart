import 'dart:developer';
import 'dart:io';

import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:weather_wise/util/service/location.mod.dart';
import 'package:weather_wise/util/service/weather.mod.dart';

String apiKey = '569f2ae006bb4c4c9f8153435252005';

class WeatherInfo {
  @functional
  static void putData(Weather weather) {
    Data.weather.put<Weather>(
      'weather:<${weather.loc[0]},${weather.loc[1]}',
      weather,
    );
  }

  @functional
  static Future<Weather> _fetchWeather((double, double) located) async {
    final double lat = located.$1;
    final double lon = located.$2;
    try {
      return await Weather.fetchForecastWeather(
        apiKey: apiKey,
        queryLocation: '$lat,$lon', // 確保真的是 "緯度,經度"
        days: 14,
        lat: lat,
        lon: lon
      );
    } catch (error) {
      log('You are defeated: $error');
      // return null
      throw Exception();
    }
  }

  @functional
  static Weather getWeather(double lat, double lon) {
    try {
      return Data.weather.get<Weather>('weather:<$lat,$lon>');
    } catch (e) {
      throw FileSystemException();
    }
  }

  @initially
  static Future<void> initialize() async {
    var defaultLocation = (25.01195123107038, 121.45814408697204);
    if (!Data.weather.box.containsKey('weather:default')) {
      // 如果完全沒有 default，就先 fetch 並存
      final w = await _fetchWeather(defaultLocation);
      Data.weather.put<Weather>('weather:default', w);
    }
    // 再取一次 defaultWeather
    Weather defaultWeather = Data.weather.get<Weather>('weather:default');
    if (DateTime.now().difference(defaultWeather.lastFetchTime) >=
        Duration(hours: 3)) {
      final w2 = await _fetchWeather(defaultLocation);
      Data.weather.put<Weather>('weather:default', w2);
    }
  }

  static List<Weather> getAllWeatherStored() {
    return Data.weather.box.values.whereType<Weather>().toList();
  }

  static Future<Weather> getAndChecksDataTimesOut(SearchedLocation location) async {
  Weather? tempWeather;
  try {
    tempWeather = Data.weather.get<Weather>(
      'weather:<${location.lat},${location.lng}>'
    );
  } catch (e) {
    tempWeather = null;
  }

  if (tempWeather != null) {
    final diff = DateTime.now().difference(tempWeather.lastFetchTime);
    if (diff <= const Duration(hours: 3)) {
      return tempWeather;
    }
  }

  final newWeather = await _fetchWeather((location.lat, location.lng));
  Data.weather.put<Weather>(
    'weather:<${location.lat},${location.lng}>',
    newWeather,
  );
  return newWeather;
}

}
