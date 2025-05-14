import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:tasker/data/data.dart';

class Initialize {
  static Future<void> start() async {
    await Hive.initFlutter();
    await Data.initialize();
    Data.app.put('test', 1243);
    print(Data.app.get('test'));
  }
}