
import 'package:flutter/cupertino.dart';
import 'package:hive_flutter/adapters.dart';
import 'package:weather/util/data/data.dart';

Future<void> setupApp() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Hive.initFlutter();
  Data.typeInitialize();
  await Data.initialize();
  _test();
}


Future<void> _test() async {
  // print(Data.app.get('pageIndex'));
  Data.app.put('pageIndex', 0);
  // CityIoApi.removeCity('cityName');
}

void checkTutorial() {
  Data.app.get<bool>('tutorial');
}