import 'package:hive_flutter/hive_flutter.dart';

class Data {
  static Box? _box;

  // 初始化 Hive
  static Future<void> init() async {
    await Hive.initFlutter();
    _box = await Hive.openBox('appData'); // 打開或建立資料夾 (box)
  }

  // 存取 String 資料
  static void storeString(String key, String value) {
    _box?.put(key, value);
  }

  static String getString(String key) {
    return _box?.get(key, defaultValue: "") ?? "";
  }

  // 存取 int 資料
  static void storeInt(String key, int value) {
    _box?.put(key, value);
  }

  static int getInt(String key) {
    final value = _box?.get(key, defaultValue: 0);
    if (value is int) return value;
    if (value is String) return int.tryParse(value) ?? 0;
    return 0;
  }

  // 存取 bool 資料
  static void storeBool(String key, bool value) {
    _box?.put(key, value);
  }

  static bool getBool(String key) {
    final value = _box?.get(key, defaultValue: false);
    if (value is bool) return value; // 直接返回 boolean 類型資料
    if (value is String) return value.toLowerCase() == "true"; // 字串轉 boolean
    return false;
  }

  // 存取 double 資料
  static void storeDouble(String key, double value) {
    _box?.put(key, value);
  }

  static double getDouble(String key) {
    final value = _box?.get(key, defaultValue: 0.0);
    if (value is double) return value;
    if (value is String) return double.tryParse(value) ?? 0.0;
    return 0.0;
  }

  // 存取 Map 資料
  static void storeMap<String, V>(String key, V value) {
    _box?.put(key, value);
  }


  static Map<K, V> getMap<K, V>(String key) {
    final Map result = _box?.get(key, defaultValue: <K, V>{}) ?? <K, V>{};

    return result.cast<K, V>();
  }

  static void storeList(String key, List value) {
    _box?.put(key, value);
  }

  static void storeListAdd(String key, dynamic value) {
    List list = _box?.get(key, defaultValue: []) ?? [];
    list.add(value);
    storeList(key, list);
  }


  static List<T> getList<T>(String key) {
  return (_box?.get(key, defaultValue: <T>[]) as List).cast<T>();
}


  // 檢查 Key 是否存在
  static bool exists(String key) {
    return _box?.containsKey(key) ?? false;
  }

  // 修改 Map 中的值
  static void changeMap(String mapKey, dynamic key, dynamic value) {
    Map<dynamic, dynamic> map = getMap(mapKey);
    map[key] = value;
    storeMap(mapKey, map);
  }

  // 刪除資料
  static void delete(String key) {
    _box?.delete(key);
  }

  // 在 Map 中新增 Key
  static void addKeyInMap(String mapKey, String key, dynamic value) {
    Map<dynamic, dynamic> map = getMap(mapKey);
    map[key] = value;
    storeMap(mapKey, map);
  }

  // 取得所有資料
  static Map<String, dynamic> getAllData() {
    return _box?.toMap().cast<String, dynamic>() ?? {};
  }

  // 刪除所有資料
  static void deleteAllData() {
    _box?.clear(); // 清除 Box 內所有資料
  }

  static T get<T>(String key) {
    return _box?.get(key);
  }

  static void put<T>(String key, T value) {
  _box?.put(key, value);
}
}

class Type {
  static final String task = 'task';
  static final String currentPageIndex = 'currentPageIndex';
  static final String taskIndex = 'taskIndex';
}