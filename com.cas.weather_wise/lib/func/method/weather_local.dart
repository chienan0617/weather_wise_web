import 'package:weather_wise/func/method/weather_data_info.dart';
import 'package:weather_wise/util/service/location.mod.dart';

class WeatherLocal {
  static List<SearchedLocation> filterSearchedByWeathers() {
    final allWeathers = WeatherInfo.getAllWeatherStored();

    return SearchedLocation.locations.where((s) {
      return allWeathers.any(
        (w) => w.loc[0] == s.lat && w.loc[1] == s.lng,
      );
    }).toList();
  }

  static List<SearchedLocation> filterSearchedByWeathersFast() {
    return SearchedLocation.locations.where((s) {
      final key = '${s.lat}_${s.lng}';
      return WeatherInfo.getAllWeatherStored()
        .map((w) => '${w.loc[0]}_${w.loc[1]}')
        .toSet()
        .contains(key);
    }).toList();
  }
}
