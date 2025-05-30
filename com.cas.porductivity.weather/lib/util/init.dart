
import 'package:flutter/cupertino.dart';
import 'package:hive_flutter/adapters.dart';
import 'package:weather/util/data/data.dart';
import 'package:weather/util/language.dart';
import 'package:weather/util/location.dart';

Future<void> setupApp() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Hive.initFlutter();
  await Data.typeInitialize();
  await Data.initialize();
  await Language.initialize();
  await SearchedLocation.initialize();
  _test();
}


Future<void> _test() async {
  // print(Data.app.get('pageIndex'));
  // Data.app.put('pageIndex', 0);
  // CityIoApi.removeCity('cityName');
  // await CurrentWeatherApi.updateWeather();
}

void checkTutorial() {
  Data.app.get<bool>('tutorial');
}
