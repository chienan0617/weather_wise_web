import 'package:weather_wise/page/error/error.m.dart';
import 'package:weather_wise/page/home/premium/premium.m.dart';
import 'package:weather_wise/page/home/forecast/forecast.m.dart';
import 'package:weather_wise/page/home/local/local.m.dart';
import 'package:weather_wise/page/home/search/search.m.dart';
import 'package:weather_wise/page/home/setting/setting.m.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:flutter/material.dart';

@controller
class HomePageCtrl {
  static int _pageIndex = 0;

  static PageController controller = PageController(initialPage: _pageIndex);

  static int get pageIndex => _pageIndex;

  @registerFirst
  static void Function() refresh = () {};

  @initially
  static void onValueChanged(int newValue) {
    _pageIndex = newValue;
    controller.jumpToPage(newValue);
    refresh();
  }

  @functional
  static Widget getCurrentPage() {
    try {
      return pages[_pageIndex];
    } catch (e) {
      return ErrorPage();
    }
  }
}

final List<Widget> pages = [
  LocalPage(),
  ForecastPage(),
  PremiumPage(),
  SearchPage(),
  SettingPage(),
  // DebugConsole(),
];
