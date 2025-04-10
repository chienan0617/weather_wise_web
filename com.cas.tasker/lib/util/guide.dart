import 'package:flutter/material.dart';
import 'package:tasker/page/home/calendar/add/add.ui.m.dart';

class Guide {
  static var calendar = _Calendar();

  static void back(c) => Navigator.pop(c);
}

class _Calendar {
  
  void toAddPage(c) {
    Navigator.push(
      c, MaterialPageRoute(
        builder: (c) => CalendarAddScreen()
      )
    );
  }
}