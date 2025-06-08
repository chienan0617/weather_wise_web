import 'package:weather_wise/util/constant.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:hive_flutter/adapters.dart';

class AppData implements Database {
  late final Box box;

  AppData() {
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
    checkKeyExist('pageIndex', 0);
    checkKeyExist('tutored', false);
    checkKeyExist('language', true);
    checkKeyExist('information', System.toMap());
    checkKeyExist('tempType', 0);
    checkKeyExist('backgroundType', 0);
    checkKeyExist('isDay', false);
  }

  @override
  Future<void> initialize() async {
    box = await Hive.openBox('app');

    // log(box.values.toString());
  }

  @override
  void put<E>(String key, Object value) => box.put(key, value);
}
