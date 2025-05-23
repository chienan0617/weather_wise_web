import 'package:hive_flutter/adapters.dart';
import 'package:weather/util/data/data.dart';

class AppData implements DataBase {
  late final Box? box;

  AppData() {
    Data.register(this);
  }

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
    checkKeyExist('pageIndex', 0);
    checkKeyExist('tutorial', false);
  }

  @override
  Future<void> initialize() async {
    box = await Hive.openBox('app');
  }

  @override
  void put<T>(String key, value) => box?.put(key, value);

}