

import 'package:hive_flutter/hive_flutter.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/data/type.dart';

class Init {
  static void checkData() {
    if (!Data.exists(T.currentWindowIndex)) Data.storeInt(T.currentWindowIndex, 0);
    if (!Data.exists(T.task)) Data.storeMap(T.task, {"demo": null});
    if (!Data.exists(T.setting)) Data.storeMap(T.setting, Storage.defaultSettingFormat);
    if (!Data.exists(Type.taskIndex)) Data.storeInt(Type.taskIndex, 0);
  }

  static void create() {
    
  }

  static void test() async {
    Data.storeMap("setting", {
      "primaryColor": "255, 2, 140, 106"
    });
    Data.storeMap('calendarRepeat', {
      "year": [],
      "day": [],
      "month": [
        // {
        //   "title": "str",
        //   "subtitle": "str",
        //   "content": "str",
        //   "time": "str",
        //   "color": "#66CDAA",
        //   "expand": {
        //     "right": true,
        //     "left": false,
        //   },
        //   "way": "<2>"
        // }
      ]
    });

    //todo: test
    // TaskApi.addTask(title: "title", type: TodoType.card, createTime: DateTime.now(), lastEdit: DateTime.now(), color: primary(), content: "content");
  }
}

// todo: important in order
Future<void> start() async {
  await Hive.initFlutter();
  typeInit();
  await Data.init();
  // Init.debug();
  Init.test();
  Init.checkData();
  Init.create();
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