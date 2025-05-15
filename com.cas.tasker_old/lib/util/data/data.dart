import 'package:hive_flutter/adapters.dart';
import 'package:tasker/util/data/type/app.dart';
import 'package:tasker/util/data/type/task.dart';

class Data {
  static final AppData app = AppData('app');
  static final TaskData task = TaskData('task');

  static Future<void> initialize() async {
    await app.initialize();
    await task.initialize();
  }
}

abstract class DataBase {
  Future<void> initialize();

  Map<String, dynamic> getAllData();

  Box getBox();

  void checkKeyExist(String key, dynamic defaultValue);

  dynamic get<T>(String name, );

  void put<T>(String name, dynamic value);
}
