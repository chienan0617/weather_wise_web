import 'package:hive_flutter/hive_flutter.dart';
import 'package:tasker/util/data/data.dart';

class AppData implements DataBase {
  late final Box? box;

  AppData() {Data.register(this);}

  @override
  Future<void> initialize() async {
    box = await Hive.openBox('app');
  }

  void storeString(String key, String value) {
    box?.put(key, value);
  }

  String getString(String key) {
    return box?.get(key, defaultValue: "") ?? "";
  }

  void storeInt(String key, int value) {
    box?.put(key, value);
  }

  int getInt(String key) {
    final value = box?.get(key, defaultValue: 0);
    if (value is int) return value;
    if (value is String) return int.tryParse(value) ?? 0;
    return 0;
  }

  void storeBool(String key, bool value) {
    box?.put(key, value);
  }

  bool getBool(String key) {
    final value = box?.get(key, defaultValue: false);
    if (value is bool) return value; // 直接返回 boolean 類型資料
    if (value is String) return value.toLowerCase() == "true"; // 字串轉 boolean
    return false;
  }

  void storeDouble(String key, double value) {
    box?.put(key, value);
  }

  double getDouble(String key) {
    final value = box?.get(key, defaultValue: 0.0);
    if (value is double) return value;
    if (value is String) return double.tryParse(value) ?? 0.0;
    return 0.0;
  }

  void storeMap<String, V>(String key, V value) {
    box?.put(key, value);
  }


  Map<K, V> getMap<K, V>(String key) {
    final Map result = box?.get(key, defaultValue: <K, V>{}) ?? <K, V>{};

    return result.cast<K, V>();
  }

  void storeList(String key, List value) {
    box?.put(key, value);
  }

  void storeListAdd(String key, dynamic value) {
    List list = box?.get(key, defaultValue: []) ?? [];
    list.add(value);
    storeList(key, list);
  }


  List<T> getList<T>(String key) {
  return (box?.get(key, defaultValue: <T>[]) as List).cast<T>();
}


  bool exists(String key) {
    return box?.containsKey(key) ?? false;
  }

  void changeMap(String mapKey, dynamic key, dynamic value) {
    Map<dynamic, dynamic> map = getMap(mapKey);
    map[key] = value;
    storeMap(mapKey, map);
  }

  void delete(String key) {
    box?.delete(key);
  }

  void addKeyInMap(String mapKey, String key, dynamic value) {
    Map<dynamic, dynamic> map = getMap(mapKey);
    map[key] = value;
    storeMap(mapKey, map);
  }

  @override
  Map<String, dynamic> getAllData() {
    return box?.toMap().cast<String, dynamic>() ?? {};
  }

  void deleteAllData() {
    box?.clear();
  }

  @override
  T get<T>(dynamic name) => get(name) as T;

  @override
  void put<T>(dynamic name, dynamic value) => box?.put(name, value);

  @override
  void checkKeyExist(String key, defaultValue) {
    if (!box!.containsKey(key)) {
      box?.put(key, defaultValue);
    }
  }

  @override
  Box getBox() => box!;

  @override
  void initData() {
  }
}


