import 'package:tasker/func/home/calendar/calendar_io.api.dart';
import 'package:tasker/util/data/type.dart';

class TaskIoApi {
  static final store = _TaskIoApiStore();
}

class _TaskIoApiStore {
  void storeNewTask(
    int year, int month, int day, {
    required String title,
    required String subtitle,
    required TaskType type,
    required int color,
    required dynamic content,
    required String taskGroupName
  }) {
    CalendarIoApi.newTask(
      year, month, day,
      title: title,
      subtitle: subtitle,
      type: type,
      color: color,
      content: content,
      taskGroupName: taskGroupName
    );
  }

  void changedValue(int year, int month, int day, {
    required String title,
    required String subtitle,
    required TaskType type,
    required int color,
    required dynamic content,
    required String taskGroupName
  }) {
    CalendarIoApi.newTask(
      year, month, day,
      title: title,
      subtitle: subtitle,
      type: type,
      color: color,
      content: content,
      taskGroupName: taskGroupName
    );
  }
}
