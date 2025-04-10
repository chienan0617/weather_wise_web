import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/calendar_generator.api.dart';
import 'package:tasker/page/home/calendar/grid.ui.mod.dart';

class CalendarCtrl {
  static DateTime now = DateTime.now();
  static int currentYear = now.year;
  static int currentMonth = now.month;
  static int currentDay = now.day;
  static PageController controller = PageController(initialPage: 1);

  // get the page
  static List<Widget> getPageMonth(BoxConstraints cons) {
    var m1 = _checkDate(-1);
    var m2 = _checkDate(0);
    var m3 = _checkDate(1);

    return [
      CalendarGrid(
        constraints: cons, year: m1.$1, month: m1.$2, 
        data: CalendarGeneratorApi.getData(currentYear, currentMonth - 1)
      ),
      CalendarGrid(
        constraints: cons, year: m2.$1, month: m2.$2,
        data: CalendarGeneratorApi.getData(currentYear, currentMonth + 0),
      ),
      CalendarGrid(
        constraints: cons, year: m3.$1, month: m3.$2,
        data: CalendarGeneratorApi.getData(currentYear, currentMonth + 1),
      ),
    ];
  }

  // check whether `currentYear` and `currentMonth` were out of bound
  static (int, int) _checkDate(int os) {
    currentMonth -= os;

    if (currentMonth < 1) {
      currentYear - 1; currentMonth + 12;
    } else if (currentMonth > 12) {
      currentYear + 1; currentMonth - 12;
    }

    return (currentYear, currentMonth);
  }

  // when page move, run this function
  // connect with {onPageChange} function in [PageView]
  static void onPageChange(int index, VoidCallback rebuild) {
    switch (index) {
      case 0: _checkDate(1); controller.jumpToPage(1); break;
      case 2: _checkDate(-1); controller.jumpToPage(1); break;
      default: _checkDate(0); controller.jumpToPage(1); break;
    }

    rebuild();
    CalendarGeneratorApi.getFormateTime();
  }
}