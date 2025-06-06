

import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/local_page.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:weather_wise/util/service/location.mod.dart';

class SearchPageController {
  @functional
  static void addCity(SearchedLocation city) {
    Data.search.put('search:<${city.lat},${city.lng}', city);
    LocalPageController.update();
  }

  @functional
  static List<SearchedLocation> getAllCityStored() {
    return Data.search.box.values.toList().cast<SearchedLocation>();
  }

  @functional
  static bool removeCity(SearchedLocation city) {
    if (Data.search.box.values.length == 1) {
      return false;
    } else {
      Data.search.box.delete('search:<${city.lat},${city.lng}');
      Data.weather.box.delete('weather:<${city.lat},${city.lng}');
      // log(Data.weather.box.values.toList().whereType<Weather>().map((e) => e.loc).toList().toString());
      // log(Data.search.box.values.toList().whereType<SearchedLocation>().map((e) => e.lat).toList().toString());
      LocalPageController.update();
      LocalPageController.index = 0;
      // Data.weather.box.delete('weather:<>');
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
      return location.name.toLowerCase().contains(query); // ||
      // location.state.toLowerCase().contains(query) ||
      // location.country.toLowerCase().contains(query) ||
      // location.county.toLowerCase().contains(query);
    });
  }

  @initially
  static Future<void> initialize() async {
    if (Data.search.box.values.isEmpty) {
      Data.search.put(
        'search:default',
        SearchedLocation('', '', '', 'default', 25.0097809, 121.4506019),
      );
    }
  }
}
