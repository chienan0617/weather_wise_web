import 'package:weather_wise/func/controller/search_page.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:hive_flutter/adapters.dart';

class SearchData implements Database {
  late final Box box;

  SearchData() {
    Data.register(this);
  }

  @override
  void checkKeyExist(String key, defaultValue) {
    if (!box.containsKey(key)) {
      box.put(key, defaultValue);
    }
  }

  @override
  T get<T>(String key) => box.get(key) as T;

  @override
  Future<void> initData() async {

  }

  @override
  Future<void> initialize() async {
    box = await Hive.openBox('search');
    SearchPageController.initialize();
    // log(box.values.toString());
    // await WeatherInfo.initialize();
  }

  @override
  void put<E>(String key, Object value) => box.put(key, value);
}
