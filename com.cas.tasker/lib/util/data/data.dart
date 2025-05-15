

import 'package:hive_flutter/hive_flutter.dart';
import 'package:tasker/util/data/type/app.dart';
import 'package:tasker/util/data/type/task.dart';
import 'package:tasker/util/data/type/task_group.dart';
    // await Hive.initFlutter();
class Data {
  static final AppData app = AppData();
  static final TaskData task = TaskData();
  static final TaskGroupData taskGroup = TaskGroupData();

  static List<DataBase> instances = [];

  static Future<void> initialize() async {
    await app.initialize();
    await task.initialize();
    await taskGroup.initialize();

    checkData();
  }

  static Future<void> checkData() async =>
    instances.forEach((i) {
      i.initialize;
      i.initData();
    });


  static register(DataBase object) => instances.add(object);
}


abstract class Registerable {
  void initialize();
  void checkKeyExist(String key, dynamic defaultValue);
}

abstract class DataBase implements Registerable {
  @override
  Future<void> initialize();

  Map<String, dynamic> getAllData();

  Box getBox();

  void initData();

  @override
  void checkKeyExist(String key, dynamic defaultValue);

  dynamic get<T>(dynamic name);

  void put<T>(String name, dynamic value);
}
