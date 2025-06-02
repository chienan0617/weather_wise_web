import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:weather/util/data/data.dart';
import 'package:weather/util/location.dart';

class CityIoApi {
  static VoidCallback localPageCityListRefresh = () => ();

  static List<SearchedLocation> getCityList() {
    List<SearchedLocation> cityList =
      Data.app.get('location').cast<SearchedLocation>();
    return cityList;
  }

  static List<SearchedLocation> getAllCity() {
    return (Data.app.get('location') as List).cast<SearchedLocation>();
  }

  static void addCity(SearchedLocation cityName) {
    List<SearchedLocation> cityList = getAllCity();
    cityList.add(cityName);
    Data.app.put('location', cityList);
  }

  static bool removeCity(SearchedLocation city) {
    List<SearchedLocation> cityList = getAllCity();

    if (cityList.length == 1) {
      return false;
    } else {
      cityList.remove(city);
      Data.app.put('location', cityList);

      return true;
    }
  }


  static Future<Iterable<SearchedLocation>> getDebouncedOptions(
    TextEditingValue textEditingValue,
  ) async {
    await Future.delayed(const Duration(milliseconds: 250));
    if (textEditingValue.text.isEmpty) {
      return const <SearchedLocation>[];
    }

    final query = textEditingValue.text.toLowerCase();

    return SearchedLocation.locations.where((location) {
      return location.name.toLowerCase().contains(query);// ||
        // location.state.toLowerCase().contains(query) ||
        // location.country.toLowerCase().contains(query) ||
        // location.county.toLowerCase().contains(query);
    });
  }
}
