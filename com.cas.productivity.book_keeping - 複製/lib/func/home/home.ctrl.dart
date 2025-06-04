
import 'package:bookkeeping/page/error/error.m.dart';
import 'package:bookkeeping/page/home/home.m.dart';
import 'package:bookkeeping/util/annotation.dart';
import 'package:bookkeeping/util/data/data.dart';
import 'package:flutter/material.dart';

@controller
class HomePageCtrl {
  static int pageIndex = Data.app.get<int>('pageIndex');

  @initially
  static void onValueChanged(int newValue) {
    pageIndex = newValue;
    Data.app.put('pageIndex', pageIndex);
  }

  @functional
  static Widget getCurrentPage() {
    try {
      return pages[pageIndex];
    } catch(e) {
      return ErrorPage();
    }
  }
}