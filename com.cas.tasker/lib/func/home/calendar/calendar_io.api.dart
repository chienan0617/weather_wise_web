import 'package:tasker/annotation.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/data/type.dart';
class CalendarIoApi {

  // * getTheDate's task
  @Method()
  static Map<int, Task> getTaskByDate(int year, int month, int day) =>
    Data.task.getTask(year, month, day);

  @UseIn('generator api file')
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
  @Method()
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
    Task task = Task(
      title, type, DateTime.now(), DateTime.now(), color, content, newIndex, taskGroupName, [year, month, day]
    );
    Data.task.storeTask(year, month, day, newIndex, task);
    Data.taskGroup.addTaskToTaskGroup(task, day);
  }

  // use in when create a new task and picking the task group
  @Method()
  static List<TaskGroup> getTaskGroupList() {
    return Data.taskGroup.getAllTaskGroup().values.toList().cast<TaskGroup>();
  }

  @Method()
  static List<String> getTaskGroupListName() {
    return getTaskGroupList().map((i) => i.name).toList();
  }

  @UseIn('modal sheet work update')
  static void updateNewInfo(
    int year, int month, int day, int taskIndex, Task changed
  ) {
    Data.taskGroup.addTaskToTaskGroup(changed, day);
    Data.task.storeTask(year, month, day, taskIndex, changed);
  }

  // check is next or previous month
  @Branch('checkDateIsCorrect')
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
  @Method()
  static (int, int, int) checkDateIsCorrect(
    int year, int month, [int day = 1]
  ) {
    if (month > 12) return (year + 1, month - 12, day);
    if (month <= 0) return (year - 1, month + 12, day);
    return (year, month, day);
  }
}
