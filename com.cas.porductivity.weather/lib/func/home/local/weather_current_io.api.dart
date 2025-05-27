import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/util/data/data.dart';

String API_KEY = '569f2ae006bb4c4c9f8153435252005';

class CurrentWeatherApi {
  static Future<void> weatherInitialize() async {
    void putWeather(Weather weather) {
      Data.weather.put<Weather>('weather', weather);
    }

    Future<Weather> fetchWeather() async {
      return await Weather.fetchForecastWeather(
        apiKey: API_KEY, queryLocation: 'Taipei'
      );
    }

    if (!Data.weather.box!.containsKey('weather')) {
      putWeather(await fetchWeather());
      return;
    }
    Weather weather = Data.weather.get<Weather>('weather');

    if (DateTime.now().difference(weather.lastFetchTime) > Duration(hours: 1)) {
      putWeather(await fetchWeather());
    }
  }

  static Weather get weather =>
      Data.weather.get('weather');
  // static set weather() =>
}
