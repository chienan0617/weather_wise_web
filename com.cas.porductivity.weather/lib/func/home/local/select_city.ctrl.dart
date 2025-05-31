import 'package:weather/func/home/local/local_io.api.dart';
import 'package:weather/func/home/local/weather_current_io.api.dart';
import 'package:weather/util/data/data.dart';
import 'package:weather/util/location.dart';

class SelectCityCtrl {
  static List<String> locations = updateLocations();
  static int index = 0;

  static String getCurrentOption() => locations[index];
  static void onChanged(String newValue) {
    locations = updateLocations();
    index = locations.indexOf(newValue);
  }

  static List<String> updateLocations() {
    return (Data.app.get('location') as List)
      .cast<SearchedLocation>()
      .map((item) => item.name)
      .toList();
  }
}
