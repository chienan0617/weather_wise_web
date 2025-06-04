
import 'package:weather_wise/page/error/error.m.dart';
import 'package:weather_wise/page/home/home.m.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:flutter/material.dart';

@controller
class HomePageCtrl {
  static int get pageIndex => Data.app.get<int>('pageIndex');

  @registerFirst
  static void Function() refresh = () => ();

  @initially
  static void onValueChanged(int newValue) {
    refresh();
    Data.app.put('pageIndex', newValue);
  }

  @functional
  static Widget getCurrentPage() {
    try {
      return pages[pageIndex];
    } catch (e) {
      return ErrorPage();
    }
  }
}
