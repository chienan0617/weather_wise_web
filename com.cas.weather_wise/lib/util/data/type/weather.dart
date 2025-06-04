import 'package:weather_wise/func/method/weather_data_info.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:hive_flutter/adapters.dart';

class WeatherData implements Database {
  late final Box box;

  WeatherData() {
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
    // checkKeyExist('pageIndex', 0);
    // checkKeyExist('tutored', false);
    // checkKeyExist('weather:default', weatherTemplate);
  }

  @override
  Future<void> initialize() async {
    box = await Hive.openBox('weather');
    // log(box.values.toString());
    await WeatherInfo.initialize();
  }

  @override
  void put<E>(String key, Object value) => box.put(key, value);
}
