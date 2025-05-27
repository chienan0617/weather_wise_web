import 'package:weather/func/home/local/weather_current.mod.dart';
import 'package:weather/util/data/data.dart';

class CurrentWeatherApi {
  static Future<void> currentWeatherInitialize() async {
    void putWeather(WeatherCurrent weather) {
      Data.weather.put<WeatherCurrent>('currentWeather', weather);
    }

    if (!Data.weather.box!.containsKey('currentWeather')) {
      WeatherCurrent weather = await WeatherCurrent.fetchData(
        API_KEY,
        'Taipei',
      );
      putWeather(weather);
      return;
    }
    WeatherCurrent weather = Data.weather.get<WeatherCurrent>('currentWeather');

    if (DateTime.now().difference(weather.lastFetchTime) > Duration(hours: 1)) {
      WeatherCurrent newWeather = await WeatherCurrent.fetchData(
        API_KEY,
        'Taipei',
      );
      putWeather(newWeather);
    }
  }

  static WeatherCurrent get currentWeather =>
      Data.weather.get('currentWeather');
  // static set currentWeather() =>
}
