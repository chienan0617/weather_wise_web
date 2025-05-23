import 'package:flutter/material.dart';
import 'package:weather/page/home/home.m.dart';
import 'package:weather/util/annotation.dart';
import 'package:weather/util/data/data.dart';

class BottomBarCtrl {
  static int pageIndex = Data.app.get<int>('pageIndex');
  @registerFirst
  static void Function() refresh = () => {};

  static onValueChanged(int value) {
    pageIndex = value;
    Data.app.put<int>('pageIndex', value);
    // print(pageIndex);
    refresh();
  }

  static Widget getCurrentPage() {
    return pages[pageIndex];
  }
}
