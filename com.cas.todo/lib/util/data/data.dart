
import 'package:hive_flutter/hive_flutter.dart';
import 'package:todo_list/util/data/type.dart';

class Data {
  static Box? _box;
  static _TodoData todo = _TodoData();

  static Future<void> init() async {
    await Hive.initFlutter();
    await _TodoData.init();
    _box = await Hive.openBox('appData');
  }

  static void storeString(String key, String value) {
    _box?.put(key, value);
  }

  static String getString(String key) {
    return _box?.get(key, defaultValue: "") ?? "";
  }

  static void storeInt(String key, int value) {
    _box?.put(key, value);
  }

  static int getInt(String key) {
    final value = _box?.get(key, defaultValue: 0);
    if (value is int) return value;
    if (value is String) return int.tryParse(value) ?? 0;
    return 0;
  }

  static void storeBool(String key, bool value) {
    _box?.put(key, value);
  }

  static bool getBool(String key) {
    final value = _box?.get(key, defaultValue: false);
    if (value is bool) return value; // 直接返回 boolean 類型資料
    if (value is String) return value.toLowerCase() == "true"; // 字串轉 boolean
    return false;
  }

  static void storeDouble(String key, double value) {
    _box?.put(key, value);
  }

  static double getDouble(String key) {
    final value = _box?.get(key, defaultValue: 0.0);
    if (value is double) return value;
    if (value is String) return double.tryParse(value) ?? 0.0;
    return 0.0;
  }

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


  static bool exists(String key) {
    return _box?.containsKey(key) ?? false;
  }

  static void changeMap(String mapKey, dynamic key, dynamic value) {
    Map<dynamic, dynamic> map = getMap(mapKey);
    map[key] = value;
    storeMap(mapKey, map);
  }

  static void delete(String key) {
    _box?.delete(key);
  }

  static void addKeyInMap(String mapKey, String key, dynamic value) {
    Map<dynamic, dynamic> map = getMap(mapKey);
    map[key] = value;
    storeMap(mapKey, map);
  }

  static Map<String, dynamic> getAllData() {
    return _box?.toMap().cast<String, dynamic>() ?? {};
  }

  static void deleteAllData() {
    _box?.clear();
  }

  static T get<T>(String key) {
    return _box?.get(key);
  }

  static void put<T>(String key, T value) {
    _box?.put(key, value);
  }
}

class _TodoData {
  static Box? _todo;

  static Future<void> init() async {
    _todo = await Hive.openBox('todo');
    if (!_todo!.containsKey('index')) _todo!.put('index', 1);
  }


  newTodo(Todo todo) {
    storeTodo(todo, getNewIndex());
  }

  storeTodo(Todo todo, int index) {
    _todo?.put(index.toString(), todo);
  }

  int getNewIndex() {
    int index = _todo?.get('index');
    index += 1;
    _todo?.put('index', index);
    return index;
  }

  Todo getTodo(int index) => _todo?.get(index.toString()) as Todo;

  Map<String, dynamic> getAllTodo() {
    return _todo?.toMap().cast<String, dynamic>() ?? {};
  }

  void clear() => _todo?.clear();
}

class Type {
  static final String task = 'task';
  static final String currentPageIndex = 'currentPageIndex';
  static final String taskIndex = 'taskIndex';
}