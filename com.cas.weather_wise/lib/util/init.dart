import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/base.dart';
import 'package:weather_wise/util/constant.dart';
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
    // Data.app.put('tutored', false);
    // Data.app.box.clear();
    // Data.weather.box.clear();
    // Data.search.box.clear();
    Data.app.put('isDay', false);
  }

  static Future<void> onDifferentVersion() async {
    // ignore: unrelated_type_equality_checks
    late Map<String, String> information;

    try {
      information = Data.app.get<Map>('information').cast<String, String>();
    } catch(e) {
      e;
      return;
    }

    String version = information['version'] ?? '';

    // ignore: unnecessary_null_comparison
    if (version != null && version == System.version) {
      return;
    } else {
      if (System.isDebugMode) {
        Data.app.box.clear();
        Data.weather.box.clear();
        Data.search.box.clear();
      }
    }
  }
}
