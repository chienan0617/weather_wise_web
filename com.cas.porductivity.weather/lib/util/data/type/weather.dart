
import 'package:hive_flutter/hive_flutter.dart';
import 'package:weather/func/home/local/weater_current_io.api.dart';
import 'package:weather/util/data/data.dart';

class WeatherData implements DataBase {
  late final Box? box;

  WeatherData() {Data.register(this);}

  @override
  void checkKeyExist(String key, defaultValue) {
    if (!box!.containsKey(key)) {
      box?.put(key, defaultValue);
    }
  }

  @override
  T get<T>(String key) => box?.get(key) as T;

  @override
  Map getAllData() => box?.toMap().cast<String, dynamic>() ?? {};

  @override
  void initData() {
    CurrentWeatherApi.currentWeatherInitialize();
  }

  @override
  Future<void> initialize() async {
    box = await Hive.openBox('weather');
  }

  @override
  void put<T>(String key, value) => box?.put(key, value);

}
