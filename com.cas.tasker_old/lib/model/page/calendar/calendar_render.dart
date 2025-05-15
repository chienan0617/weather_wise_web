import 'package:tasker/util/init/init.dart';
import 'package:tasker/util/lang/language.dart';

class CalendarRenderModel implements Registerable {
  late List<String> weekDays;

  CalendarRenderModel() {
    Initialize.register(this);
  }

  @override
  void initialize() {
    weekDays = Language.words('week_ab');
  }

  @override
  void checkKey() {
    // Data.app.checkKey('', defaultValue)
  }

  String getWeekName(int weekday) => weekDays[weekday];

  List<List<int>> getMonthData(int year, int month) {
    int totalDays = DateTime(year, month + 1, 0).day;
    int firstWeekday = DateTime(year, month, 1).weekday;
    int startIndex = firstWeekday % 7;
    List<List<int>> date = [];
    List<int> weeks = [];

    if (startIndex != 0) {
      int prevMonthDays = DateTime(year, month, 0).day;
      for (int i = startIndex - 1; i >= 0; i--) {
        weeks.add(prevMonthDays - i);
      }
    }

    for (int i = 1; i <= totalDays; i++) {
      weeks.add(i);
      if (weeks.length == 7) {
        date.add(weeks);
        weeks = [];
      }
    }

    int nextMonthDay = 1;
    if (weeks.isNotEmpty) {
      while (weeks.length < 7) {
        weeks.add(nextMonthDay++);
      }
      date.add(weeks);
    }

    while (date.length < 6) {
      List<int> nextWeek = [];
      for (int i = 0; i < 7; i++) {
        nextWeek.add(nextMonthDay++);
      }
      date.add(nextWeek);
    }

    return date;
  }

  // int
}
