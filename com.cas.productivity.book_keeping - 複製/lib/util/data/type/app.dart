import 'package:bookkeeping/util/data/data.dart';
import 'package:hive_flutter/adapters.dart';

class AppData implements Database {
  late final Box box;

  @override
  void checkKeyExist(String key, Object defaultValue) {
    if (!box.containsKey(key)) put(key, defaultValue);
  }

  @override
  T get<T>(String key) => box.get(key) as T;

  @override
  Future<void> initData() async {
    checkKeyExist('tutored', false);
  }

  @override
  Future<void> initialize() async => box = await Hive.openBox('app');

  @override
  void put<E>(String key, Object value) => box.put(key, value);
}
