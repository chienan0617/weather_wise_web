import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:weather/util/data/data.dart';
import 'package:weather/util/location.dart';

class CityIoApi {
  static List<SearchedLocation> getCityList() {
    List<SearchedLocation> cityList =
        Data.app.get('location').cast<SearchedLocation>();
    // if (cityList.contains('default')) {
    //   if (cityList.length == 1) {
    //     return cityList;
    //   } else {
    //     cityList.remove('default');
    //     return cityList;
    //   }
    // }
    return cityList;
  }

  static void addCity(SearchedLocation cityName) {
    List<SearchedLocation> cityList = Data.app.get('location').cast<SearchedLocation>();
    cityList.add(cityName);
    Data.app.put('location', cityList);
  }

  static bool removeCity(SearchedLocation city) {
    List<SearchedLocation> cityList = Data.app.get('location').cast<SearchedLocation>();

    if (cityList.length == 1) {
      return false;
    } else {
      cityList.remove(city);
      Data.app.put('location', cityList);
      return true;
    }
  }

  static Iterable<SearchedLocation> getOptions(TextEditingValue value) {
    if (value.text == '') {
      return const Iterable<SearchedLocation>.empty();
    }
    return SearchedLocation.locations.where((SearchedLocation location) {
      return location.name.toLowerCase().contains(value.text.toLowerCase());
    });
  }

  static Future<Iterable<SearchedLocation>> getDebouncedOptions(
    TextEditingValue textEditingValue,
  ) async {
    await Future.delayed(const Duration(milliseconds: 250));
    return CityIoApi.getOptions(textEditingValue);
  }
}
