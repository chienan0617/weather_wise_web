import 'package:flutter/material.dart';
import 'package:tasker/annotation.dart';
import 'package:tasker/func/home/calendar/calendar.ctrl.dart';
import 'package:tasker/func/home/calendar/calendar_io.api.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/data/type.dart';

class CalendarGeneratorApi {
  // register the {setState} in topBar
  static VoidCallback topBarRebuild = () {};

  // get the data
  @UseIn('generator calendar month')
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
  @Branch('getData')
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
  @UseIn('update calendar top bar')
  static String getFormateTime() {
    topBarRebuild();
    // refresh();
    var date = CalendarIoApi.checkDateIsCorrect(
      CalendarCtrl.currentYear, CalendarCtrl.currentMonth
    );

    print(date);
    return "${date.$1}-${date.$2}";
  }

  // use in generate task cell in calendar
  // (number of cell, if should add ..., of tow ${num})
  @UseIn('render task while day')
  static (int, bool, int) getGridMaxCount(int num)
    => num > 5 ? (4, true, num -4 -1) : num == 5 ? (5, false, 0) : (num, false, 0);

  @UseIn('get if the work of the day is done')
  static List<bool> getChecked(Map data, int week, int day) {
    return List.generate(
      data['task'][week][day].length,
      (int index) {
        return (data['task'][week][day][index] as Task).done;
      }
    );
  }

  @Deprecated()
  static void setValue(int week, int day, int index, bool value) {
    // TaskIoApi.store.changedValue(year, month, day, title: title, subtitle: subtitle, type: type, color: color, content: content)
  }

  @UseIn('while render modal sheet')
  static Color getGroupTaskColor(String name) {
    return Color(Data.taskGroup.getTaskGroup(name).color);
  }

  // static String getGroupTaskName
  @UseIn('while generate calendar')
  static Color getTheDayColor(List<int> date, int week) {
    DateTime now = DateTime.now();

    if (now.year == date[0] && now.month == date[1] && now.day == date[2]) {
      return primary;
    }

    if ([0, 1].contains(week) && date[2] > 15 || [4, 5].contains(week) && date[2] < 15) {
      return style_128;
      // return Colors.amber;
    }

    return style_0;
  }

  @UseIn('while generate calendar')
  static Color getTheDayTaskColor(List<int> date, int week, Color originColor) {
    if ([0, 1].contains(week) && date[2] > 15 || [4, 5].contains(week) && date[2] < 15) {
      return originColor.withAlpha(96);
      // return Colors.amber;
    }
    return originColor;
  }
}
