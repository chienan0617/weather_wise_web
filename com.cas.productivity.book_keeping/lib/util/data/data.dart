import 'package:bookkeeping/util/annotation.dart';
import 'package:bookkeeping/util/base.dart';
import 'package:flutter/material.dart';

class Data {
  @initially static Future<void> initialize() async {
    solveRegister();
  }

  @original static List<Registerable> instances = [];

  @initially static Future<void> solveRegister() async {
    for (var e in instances) {
      e.initData();
    }
  }
}

abstract class Registerable implements Initializable {
  @override Future<void> initialize();

  @functional Future<void> initData();
}

abstract class Database implements Registerable {
  @override Future<void> initialize();

  @override Future<void> initData();

  @functional void put<E>(String key, Object value);

  @functional T get<T>(String key);

  @functional void checkKeyExist(String key, Object defaultValue);
}
