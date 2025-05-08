import 'package:tasker/func/home/calendar/calendar_io.api.dart';
import 'package:tasker/util/data/type.dart';

class TaskIoApi {
  static final store = _TaskIoApiStore();
}

class _TaskStateIo {
  void storeNewTask(
    int year, int month, int day, {
    required String title,
    required String subtitle,
    required TaskType type,
    required int color,
    required dynamic content,
  }) {
    CalendarIoApi.newTask(
      year, month, day,
      title: title,
      subtitle: subtitle,
      type: type,
      color: color,
      content: content,
    );
  }
}

class _TaskIoApiStore extends _TaskStateIo {
  void storeNewFormAddScreen(
    int year, int month, int day, {
    required String title,
    required String subtitle,
    required TaskType type,
    required int color,
    required dynamic content,
  }) {
    storeNewTask(
      year, month, day,
      title: title,
      subtitle: subtitle,
      type: type,
      color: color,
      content: content,
    );
  }
}
