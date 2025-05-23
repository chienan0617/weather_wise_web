import 'package:flutter/material.dart';
import 'package:weather/page/start/pages.dart';
import 'package:weather/util/data/data.dart';

class IntroductionCtrl {
  static int currentPage = 0;
  static void Function() dotsRefresh = () => {};
  static void Function() pagesRefresh = () => {};
  static void Function() changeToNormalPage = () => {};

  static int getIndex() => currentPage;
  static void setIndex(int value) => currentPage = value;
  static Widget getPage() => pages[currentPage];
  static bool isCurrentPage(int index) => currentPage == index;
  static bool isLastPage() => currentPage == pages.length -1;

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
    currentPage = pages.length - 1;
    onPageChange();
  }

  static void detectEndPage() {
    if (currentPage == pages.length -1) {
      changeToNormalPage();
      Data.app.put<bool>('tutorial', true);
    }
  }
}
