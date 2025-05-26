
import 'package:weather/util/data/data.dart';

class CityIoApi {
  static List<String> getCityList() {
    List<String> cityList = Data.app.get<List<String>>('location');
    if (cityList.contains('default')) {
      if (cityList.length == 1) {
        return cityList;
      } else {
        cityList.remove('default');
        return cityList;
      }
    }
    return cityList;
  }

  static void addCity(String cityName) {
    List<String> cityList = Data.app.get<List<String>>('location');
    cityList.add(cityName);
    Data.app.put<List<String>>('location', cityList);
  }

  static void removeCity(String cityName) {
    List<String> cityList = Data.app.get<List<String>>('location');
    cityList.remove(cityName);
    Data.app.put<List<String>>('location', cityList);
  }
}