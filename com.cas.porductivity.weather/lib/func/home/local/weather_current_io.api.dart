import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/util/data/data.dart';

String apiKey = '569f2ae006bb4c4c9f8153435252005';
bool isFreeVersion = true;

class CurrentWeatherApi {
  static void putWeather(Weather weather) {
    Data.weather.put<Weather>('weather', weather);
  }

  static Future<Weather> fetchWeather() async {
    try {
      return await Weather.fetchForecastWeather(
        apiKey: apiKey,
        queryLocation: '25.0172177,121.4564431',
        days: isFreeVersion ? 14 : 3
      );
    } catch(error) {
      Data.app.put('error', error.toString());

      if (!Data.weather.box!.containsKey('weather')) {
        return Data.weather.get<Weather>('weather');
      } else {
        return weatherTemplate;
      }
    }
  }

  static Future<void> weatherInitialize() async {
    if (!Data.weather.box!.containsKey('weather')) {
      putWeather(await fetchWeather());
      return;
    }

    Weather weather = Data.weather.get<Weather>('weather');

    if (DateTime.now().difference(weather.lastFetchTime) > Duration(hours: 3)) {
      putWeather(await fetchWeather());
    }
    // if (DateTime.now().day != weather.lastFetchTime.day) {
    //   putWeather(await fetchWeather());
    // }
  }

  static Weather get weather => Data.weather.get('weather');
  // static set weather() =>

  static Future<void> updateWeather() async {
    putWeather(await fetchWeather());
  }
}
