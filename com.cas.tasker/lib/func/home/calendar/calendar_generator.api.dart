import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/calendar.ctrl.dart';
import 'package:tasker/func/home/calendar/calendar_io.api.dart';
import 'package:tasker/util/data/type.dart';

class CalendarGeneratorApi {
  // register the {setState} in topBar
  static VoidCallback topBarRebuild = () {};

  // get the data
  static Map<dynamic, dynamic> getData(
    int year, int month,
  ) {
    var dateData = _getCalendarMonthData(year, month);

    return {
      "dateMonth": _getCalendarMonthData(year, month),
      "task": CalendarIoApi.getTaskDataToMonth(year, month, dateData),
      "date": [year, month]
      // "update":
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
    return "${CalendarCtrl.currentYear}-${CalendarCtrl.currentMonth}";
  }

  // use in generate task cell in calendar
  // (number of cell, if should add ..., of tow ${num})
  static (int, bool, int) getGridMaxCount(int num)
    => num > 5 ? (4, true, num -4 -1) : num == 5 ? (5, false, 0) : (num, false, 0);

  static List<bool> getChecked(Map data, int week, int day) {
    return List.generate(
      data['task'][week][day].length,
      (int index) {
        return (data['task'][week][day][index] as Task).done;
      }
    );
  }

  static void setValue(int week, int day, int index, bool value) {
    // TaskIoApi.store.changedValue(year, month, day, title: title, subtitle: subtitle, type: type, color: color, content: content)
  }
}
