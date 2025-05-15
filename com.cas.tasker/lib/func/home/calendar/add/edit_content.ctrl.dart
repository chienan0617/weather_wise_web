import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/calendar_io.api.dart';
import 'package:tasker/util/data/type.dart';

class AddTask {
  static final titleInput = _TitleInputCtrl();
  static final contentInput = _ContentInputCtrl();
  static final taskGroup = _PickTaskGroupCtrl();
  static final dateInput = _DateInputCtrl();
  static final type = _TypeCtrl();

  static void initEditor() {
    titleInput.controller.text = '';
    contentInput.controller.text = '';
    taskGroup.currentIndex = 0;
    type.taskType = TaskType.card;
  }
}

class _TitleInputCtrl {
  final TextEditingController controller = TextEditingController(
    text: ''
  );
}

class _ContentInputCtrl {
  final TextEditingController controller = TextEditingController(
    text: ''
  );
}

class _PickTaskGroupCtrl {
  int currentIndex = 0;
  List<TaskGroup> taskGroupList = CalendarIoApi.getTaskGroupList();
  List<String> taskGroupListName = CalendarIoApi.getTaskGroupListName();

  void onChange(int value) => currentIndex = value;
  String getColorName() => taskGroupListName[currentIndex];
  Color getColor() => Color(taskGroupList[currentIndex].color);
}

class _DateInputCtrl {
  static DateTime now = DateTime.now();
  DateTime pickedTime = now;
  int year = 0;
  int month = 0;
  int day = 0;

  final TextEditingController controller = TextEditingController(
    text: ''
  );
}

class _TypeCtrl {
  TaskType taskType = TaskType.card;
}
