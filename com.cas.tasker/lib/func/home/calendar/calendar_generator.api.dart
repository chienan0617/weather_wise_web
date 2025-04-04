
class CalendarGeneratorApi {
  static Map<dynamic, dynamic> getData(int year, int month) {
    return {
      "dateMonth": getCalendarMonthData(year, month)
    };
  }

  // * the initialize step to get calendar data
  static List<List<int>> getCalendarMonthData(int year, int month) {
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
}