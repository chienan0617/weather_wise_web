import 'package:bookkeeping/util/annotation.dart';
import 'package:bookkeeping/util/base.dart';
import 'package:bookkeeping/util/data/data.dart';
import 'package:bookkeeping/util/language.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/adapters.dart';

class Initialize implements Initializable {
  @override
  Future<void> initialize() {
    throw UnimplementedError();
  }

  @initially
  static Future<void> setupApp() async {
    WidgetsFlutterBinding.ensureInitialized();
    Hive.initFlutter();
    await Data.initialize();
    await Data.typeInit();
    await Language.initialize();
  }
}
