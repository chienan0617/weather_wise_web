import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/data/type.dart';
class CalendarIoApi {

  // * getTheDate's task
  static Map<int, Task> getTaskByDate(int year, int month, int day) {
    return Data.task.getTask(year, month, day);
  }

  static List getTaskDataToMonth(
    int year, int month, List<List<int>> data
  ) {
    List monthData = [];

    for (int i = 0; i < 6; i++) {
      List weekData = [];
      for (int day in data[i]) {
        var date = checkDateIsCorrectInCalendar(year, month, day, i);
        weekData.add(
          Data.task.getTask(date.$1, date.$2, date.$3),
        );
      }
      monthData.add(weekData);
    }

    return monthData;
  }

  // * create a new task and store
  static void newTask(int year, int month, int day, {
    required String title,
    required String subtitle,
    required TodoType type,
    required int color,
    required dynamic content,
    // required DateTime lastEdit,
    // required DateTime createTime
    // required bool done
  }) {
    // assert(type == TodoType.card && content is List);
    // assert(type == TodoType.list && content is Map);

    int taskIndex = Data.getInt(Type.taskIndex);
    Task task = Task(
      title, type, DateTime.now(), DateTime.now(), color, content
    );

    Data.task.storeTask(
      year, month, day, Data.task.newTaskIndex(), task
    );
  }

  // check is next or previous month
  static (int, int, int) checkDateIsCorrectInCalendar(
    int year, int month, int day, int column
  ) {
    if ([0, 1].contains(column) && day < 15) {
      return checkDateIsCorrect(year, month - 1, day);
    } else if ([4, 5].contains(column) && day > 15) {
      return checkDateIsCorrect(year, month + 1, day);
    } else {
      return checkDateIsCorrect(year, month, day);
    }
  }

  // check the month and year is correct
  static (int, int, int) checkDateIsCorrect(
    int year, int month, int day
  ) {
    if (month > 12) return (year + 1, month - 12, day);
    if (month < 0) return (year - 1, month + 12, day);
    return (year, month, day);
  }
}