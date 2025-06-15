
import 'package:flutter/material.dart';
import 'package:weather_wise/func/method/weather_data_info.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:weather_wise/util/library.dart';
import 'package:weather_wise/util/service/location.mod.dart';
import 'package:weather_wise/util/service/weather.mod.dart';


class LocalPageController {
  static List<SearchedLocation> weatherStored = Data.search.box.values
      .toList()
      .cast<SearchedLocation>();
  static List<Weather> weatherList = WeatherInfo.getAllWeatherStored();
  static int index = 0;
  static List<String> cityNameList = weatherStored.map((e) => e.name).toList();

  @registerFirst
  static Function() localPageRefresh = () => ();
  @registerFirst


  @functional
  static void update() {
    weatherStored = Data.search.box.values
      .toList()
      .cast<SearchedLocation>();

    cityNameList = weatherStored.map(
      (e) => e.name
    ).toList();

    weatherList = WeatherInfo.getAllWeatherStored();
    // ForecastPageController.refresh();
  }

  static Future<Weather> getCurrentIndexCityInfo() async {
    SearchedLocation currentLocation = getCurrentLocation();
    return await WeatherInfo.getAndChecksDataTimesOut(currentLocation);
  }

  static String getDescription(int code, int isDay) =>
      weatherData[code]?[isDay == 1 ? 2 : 3];

  @functional
  static SearchedLocation getCurrentLocation() {
    return weatherStored[index];
  }

  static List<DropdownMenuItem<String>> getDropDownMenuItems() {
    return cityNameList.map((e) => DropdownMenuItem<String>(
      value: e,
      child: Text(e, style: const TextStyle(color: style_0)),
    )).toList();
  }

  static String getDropDownMenuCurrentValue() {
    return cityNameList[index];
  }

  static void onSelect(String? location) {
    if (location == cityNameList[index]) {
      return;
    }

    if (location != null) {
      index = cityNameList.indexOf(location);
      localPageRefresh();
    }
  }

  static Weather getCurrentWeather() {
    return weatherList[index];
  }
}

const nothing = '25.011931104384683, 121.45834708830365';
