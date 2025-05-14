import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/data/type.dart';
class CalendarIoApi {

  // * getTheDate's task
  static Map<int, Task> getTaskByDate(int year, int month, int day) =>
    Data.task.getTask(year, month, day);

  static List<List<List>> getTaskDataToMonth(
    int year, int month, List<List<int>> data
  ) {
    return List.generate(6, (i) {
      return data[i].map((day) {
        var date = checkDateIsCorrectInCalendar(year, month, day, i);
        return Data.task.getTask(date.$1, date.$2, date.$3).values.toList();
      }).toList();
    });
  }

  // * create a new task and store
  static void newTask(int year, int month, int day, {
    required String title,
    required String subtitle,
    required TaskType type,
    required int color,
    required dynamic content,
    required String taskGroupName
    // required DateTime lastEdit,
    // required DateTime createTime
    // required bool done
  }) {
    // assert(type == TodoType.card && content is List);
    // assert(type == TodoType.list && content is Map);
    int newIndex = Data.task.newTaskIndex();
    Data.task.storeTask(
      year, month, day, newIndex, Task(
        title, type, DateTime.now(), DateTime.now(), color, content, newIndex, taskGroupName
      )
    );
  }

  // use in when create a new task and picking the task group
  static List<TaskGroup> getTaskGroupList() {
    return Data.taskGroup.getAllTaskGroup().values.toList().cast<TaskGroup>();
  }

  static List<String> getTaskGroupListName() {
    return getTaskGroupList().map((i) => i.name).toList();
  }

  static void updateNewInfo(
    int year, int month, int day, int taskIndex, Task changed
  ) {
    Data.task.storeTask(year, month, day, taskIndex, changed);
  }

  // check is next or previous month
  static (int, int, int) checkDateIsCorrectInCalendar(
    int year, int month, int day, int column
  ) {
    if ([0, 1].contains(column) && day > 15) {
      return checkDateIsCorrect(year, month - 1, day);
    } else if ([4, 5].contains(column) && day < 15) {
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
