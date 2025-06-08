import 'package:hive_flutter/adapters.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/base.dart';
import 'package:weather_wise/util/data/type/app.dart';
import 'package:weather_wise/util/data/type/search.dart';
import 'package:weather_wise/util/data/type/weather.dart';
import 'package:weather_wise/util/service/location.mod.dart';
import 'package:weather_wise/util/service/weather.mod.dart';
import 'package:weather_wise/util/init.dart';

class Data {
  static AppData app = AppData();
  static WeatherData weather = WeatherData();
  static SearchData search = SearchData();

  @initially
  static Future<void> initialize() async {
    await app.initialize();
    await weather.initialize();
    await search.initialize();


    await Initialize.onDifferentVersion();
    solveRegister();
  }

  @original
  static List<Registerable> instances = [];

  @initially
  static Future<void> solveRegister() async {
    for (var e in instances) {
      e.initData();
    }

    // instances.forEach((e) => e.initData());
  }

  @functional
  static void register(Registerable object) => instances.add(object);

  @initially
  static Future<void> typeInit() async {
    // Hive.registerAdapter(ColorAdapter());
    Hive.registerAdapter(WeatherAdapter());
    Hive.registerAdapter(LocationAdapter());
    Hive.registerAdapter(CurrentWeatherAdapter());
    Hive.registerAdapter(ForecastDayAdapter());
    Hive.registerAdapter(DaySummaryAdapter());
    Hive.registerAdapter(AstroAdapter());
    Hive.registerAdapter(HourForecastAdapter());
    Hive.registerAdapter(ConditionAdapter());
    Hive.registerAdapter(AirQualityAdapter());
    Hive.registerAdapter(SearchedLocationAdapter());
    // Hive
  }
}

abstract class Registerable implements Initializable {
  @override
  Future<void> initialize();

  @functional
  Future<void> initData();
}

abstract class Database implements Registerable {
  @override
  Future<void> initialize();

  @override
  Future<void> initData();

  @functional
  void put<E>(String key, Object value);

  @functional
  T get<T>(String key);

  @functional
  void checkKeyExist(String key, Object defaultValue);
}
