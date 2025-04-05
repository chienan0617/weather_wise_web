import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/calendar.ctrl.dart';

class CalendarGeneratorApi {
  // register the {setState} in topBar
  static late final VoidCallback topBarRebuild;

  // get the data
  static Map<dynamic, dynamic> getData(int year, int month) {
    return {
      "dateMonth": _getCalendarMonthData(year, month)
    };
  }

  // * the initialize step to get calendar data
  static List<List<int>> _getCalendarMonthData(int year, int month) {
    int totalDays = DateTime(year, month + 1, 0).day;
    int firstWeekday = DateTime(year, month, 1).weekday % DateTime.daysPerWeek;
    List<List<int>> date = [];
    List<int> weeks = [];
    int nextMonthDay = 1;

    if (firstWeekday != 0) {
      int prevMonthDays = DateTime(year, month, 0).day;
      for (int i = firstWeekday; i > 0; i--) {
        weeks.add(prevMonthDays - i + 1);
      }
    } else {
      int prevMonthDays = DateTime(year, month, 0).day;
      for (int i = 6; i >= 0; i--) {
        weeks.add(prevMonthDays - i);
      }
      date.add(weeks);
      weeks = [];
    }
    for (int i = 1; i <= totalDays; i++) {
      weeks.add(i);
      if (weeks.length == DateTime.daysPerWeek) {
        date.add(weeks);
        weeks = [];
      }
    }
    while (weeks.length < DateTime.daysPerWeek) {
      weeks.add(nextMonthDay++);
    }
    date.add(weeks);
    while (date.length < 6) {
      List<int> nextWeek = [];
      for (int i = 0; i < DateTime.daysPerWeek; i++) {
        nextWeek.add(nextMonthDay++);
      }
      date.add(nextWeek);
    }

    return date;
  }

  // detector by [CalendarCtrl.onPageChange()]
  // give the formate time to the [TopBar]
  static String getFormateTime() {
    topBarRebuild();
    print('rebuild');
    return "${CalendarCtrl.currentYear}-${CalendarCtrl.currentMonth}";
  }
}