import 'package:flutter/material.dart';
import 'package:hive_flutter/adapters.dart';
import 'package:tasker/data/type/app.dart';

class Data {
  static final AppData app = AppData('app');

  static Future<void> initialize() async {
    await app.initialize();
  }
}

abstract class DataBase {
  Future<void> initialize();

  Map<String, dynamic> getAllData();

  Box getBox();

  void checkKey(String key, dynamic defaultValue);

  dynamic get<T>(String name);

  void put<T>(String name, dynamic value);
}
