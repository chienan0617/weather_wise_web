import 'package:flutter/material.dart';
import 'package:weather_wise/page/home/forecast/forecast.m.dart';
import 'package:weather_wise/page/home/local/local.m.dart';
import 'package:weather_wise/page/home/premium/premium.m.dart';
import 'package:weather_wise/page/home/search/search.m.dart';
import 'package:weather_wise/page/home/setting/setting.m.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/data/data.dart';

class TutorialController {
  static int currentPage = 0;

  @registerFirst
  static void Function() dotsRefresh = () => {};

  @registerFirst
  static void Function() pagesRefresh = () => {};

  @registerFirst
  static void Function() changeToNormalPage = () => {};

  static Widget getPage() => lockedPages[currentPage];
  static bool isCurrentPage(int index) => currentPage == index;
  static bool isLastPage() => currentPage == lockedPages.length -1;

  static void onPageChange() {
    detectEndPage();
    dotsRefresh();
    pagesRefresh();

  }

  static void nextPage() {
    onPageChange();
    currentPage += 1;
  }

  static void onSkipPressed() {
    currentPage = lockedPages.length - 1;
    onPageChange();
  }

  static void detectEndPage() {
    if (currentPage == lockedPages.length -1) {
      changeToNormalPage();
      Data.app.put<bool>('tutored', true);
    }
  }
}


const List<Widget> lockedPages = [
  AbsorbPointer(child: LocalPage()),
  AbsorbPointer(child: ForecastPage()),
  AbsorbPointer(child: PremiumPage()),
  AbsorbPointer(child: SearchPage()),
  AbsorbPointer(child: SettingPage()),
];