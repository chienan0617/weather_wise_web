import 'package:flutter/material.dart';
import 'package:tasker/page/home/calendar/grid.uif.dart';

class CalendarCtrl {
  static DateTime now = DateTime.now();
  static int currentYear = now.year;
  static int currentMonth = now.month;
  static int currentDay = now.day;
  static PageController controller = PageController(initialPage: 1);

  static List<Widget> getPageMonth(BoxConstraints cons) {
    var m1 = checkDate(currentYear, currentMonth, -1);
    var m2 = checkDate(currentYear, currentMonth, 0);
    var m3 = checkDate(currentYear, currentMonth, 1);

    return [
      CalendarGrid(constraints: cons, year: m1.$1, month: m1.$2),
      CalendarGrid(constraints: cons, year: m2.$1, month: m2.$2),
      CalendarGrid(constraints: cons, year: m3.$1, month: m3.$2),
    ];
  }

  static (int, int) checkDate(int year, int month, int os) {
    month -= os;

    if (month < 1) {
      return (year - 1, month + 12);
    } else if (month > 12) {
      return (year + 1, month - 12);
    } else {
      return (year, month);
    }
  }

  static void onPageChange(int index) {
    
  }
}