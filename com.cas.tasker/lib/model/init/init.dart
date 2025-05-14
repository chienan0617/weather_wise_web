import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:tasker/data/data.dart';
import 'package:tasker/model/model.dart';

class Initialize {
  static Future<void> start() async {
    await Hive.initFlutter();
    await Data.initialize();
    Model();
    // await Model.initialize();
    initInstances();
  }

  static List<Registerable> modelInstances = [];

  static void initInstances() {
    // print(modelInstances);
    for (var instance in modelInstances) {
      instance.initialize();
      instance.checkKey();
      print("checked");
    }
  }

  static void register(Registerable object) {
    Initialize.modelInstances.add(object);
  }
}

abstract class Registerable {
  void initialize();
  void checkKey();
}