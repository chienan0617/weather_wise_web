

import 'package:hive_flutter/hive_flutter.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/data/type.dart';

class Init {

}

Future<void> start() async {
  await Hive.initFlutter();
  typeInit();
  await Data.initialize();
}


class Storage {
  static final Map defaultSettingFormat = {
    "userName": "",
    "userID": -1,
    "connect": {
      "mail": "0@example.com",
    },
    "darkMode": false,
    "primaryColor": "	#40E0D0"
  };
}
