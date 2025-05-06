import 'package:flutter/material.dart';
import 'package:tasker/page/home/calendar/add/add.m.dart';
import 'package:tasker/page/home/calendar/view/view.m.dart';
import 'package:tasker/page/home/home.m.dart';

class Guide {
  static var calendar = _Calendar();

  static void back(c) => Navigator.pop(c);
}

class _Calendar {

  void toAddPage(context) {
    Navigator.pop(context);
    Navigator.push(
      context, MaterialPageRoute(
        builder: (c) => CalendarAddScreen()
      )
    );
  }

  void toViewPage(context) {
    Navigator.pop(context);
    Navigator.push(
      context, MaterialPageRoute(
        builder: (c) => CalendarViewScreen()
      )
    );
  }

  void toCalendarPage(context) {
    Navigator.pop(context);
    Navigator.push(
      context, MaterialPageRoute(
        builder: (c) => HomeScreen()
      )
    );
  }
}