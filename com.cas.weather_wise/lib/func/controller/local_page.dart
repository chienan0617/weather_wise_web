import 'package:flutter/material.dart';
import 'package:weather_wise/func/method/weather_data_info.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:weather_wise/util/library.dart';
import 'package:weather_wise/util/service/location.mod.dart';
import 'package:weather_wise/util/service/weather.mod.dart';
import 'package:intl/intl.dart';


class LocalPageController {
  static List<SearchedLocation> weatherStored = Data.search.box.values
      .toList()
      .cast<SearchedLocation>();
  static List<Weather> weatherList = WeatherInfo.getAllWeatherStored();
  static int index = 0;

  @registerFirst
  static Function() rebuild = () => ();

  @functional
  static void update() {
    weatherStored = Data.search.box.values
      .toList()
      .cast<SearchedLocation>();
  }

  static Future<Weather> getCurrentIndexCityInfo() async {
    SearchedLocation currentLocation = getCurrentLocation();
    return await WeatherInfo.getAndChecksDataTimesOut(currentLocation);
  }

  static Object? getDescription(int code, int isDay) =>
      weatherData[code]?[isDay == 1 ? 2 : 3];

  @functional
  static SearchedLocation getCurrentLocation() => weatherStored[index];

  static List<DropdownMenuEntry<SearchedLocation>> getDropDownMenuItems() {
    return weatherStored.map((e) => DropdownMenuEntry(
      value: Text(e.name, style: const TextStyle(color: style_0)),
      label: e.name//Text(e.name, style: const TextStyle(color: style_0)),
    )).toList().cast();
  }

  static onSelect(SearchedLocation? location) {
    if (location != null) {
      index = weatherStored.indexOf(location);
    }
  }

  static List<(int, double, int, String)> getForecastHoursTemps(Weather w, int len) => w.forecast.expand((d) => d.hour.where((h) => DateTime.parse("${d.date} ${h.time.split(' ').last}").isAfter(DateTime.now())).map((h) => (h.condition.code, h.tempC, h.isDay, DateFormat('ha').format(DateTime.parse("${d.date} ${h.time.split(' ').last}"))))).take(len).toList();
}
