import 'package:hive_flutter/hive_flutter.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/model/model.dart';

class Initialize {
  static Future<void> start() async {
    await Hive.initFlutter();
    await Data.initialize();
    Model.initialize();
    initInstances();
    test();
    // await Model.initialize();
  }

  static List<Registerable> modelInstances = [];

  static void initInstances() {
    for (Registerable instance in modelInstances) {
      print('before it : false value');
      instance.initialize();
      instance.checkKey();
    }
  }

  static void register(Registerable object) {
    Initialize.modelInstances.add(object);
  }

  static void test() {
    // Data.app.put('pageIndex', 0);
    // Data.app.getBox().clear();
  }
}

abstract class Registerable {
  void initialize();
  void checkKey();
}
