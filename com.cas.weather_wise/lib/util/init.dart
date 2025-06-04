import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/base.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:weather_wise/util/language.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/adapters.dart';
import 'package:weather_wise/util/service/location.mod.dart';

class Initialize implements Initializable {
  @override
  Future<void> initialize() {
    throw UnimplementedError();
  }

  @initially
  static Future<void> setupApp() async {
    WidgetsFlutterBinding.ensureInitialized();
    await Hive.initFlutter();
    await Data.typeInit();
    await Data.initialize();
    await Language.initialize();
    await SearchedLocation.initialize();
    await test();
  }

  static Future<void> test() async {
    Data.app.put('tutored', true);
    // Data.app.box.clear();
  }
}
