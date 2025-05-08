import 'package:flutter/material.dart';
import 'package:tasker/util/customize.util.dart';
import 'package:tasker/util/guide.util.dart';

class CalendarAddCtrl {
  static var color = _ColorPick();
}

class _ColorPick {
  static int defaultColorIndex = 0;
  static int currentIndex = 0;
  List colorName = com('color');
  List colorList = colors;

  void get getIndex => currentIndex;

  void onIndexChange(
    int index,
    VoidCallback refresh,
    BuildContext context
  ) {
    currentIndex = index;
    refresh();
    Guide.back(context);
  }
}
