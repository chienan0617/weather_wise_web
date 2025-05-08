import 'package:flutter/material.dart';
import 'package:tasker/util/customize.util.dart';
import 'package:tasker/util/data/type.dart';

class AddTask {
  static final titleInput = _TitleInputCtrl();
  static final contentInput = _ContentInputCtrl();
  static final pickColor = _PickColorCtrl();
  static final dateInput = _DateInputCtrl();
  static final type = _TypeCtrl();

  static void initEditor() {
    titleInput.controller.text = '';
    contentInput.controller.text = '';
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

class _PickColorCtrl {
  int currentIndex = 0;
  List<Color> colorList = colors;
  List<String> colorLang = com('color');

  void onChange(int value) => currentIndex = value;
  String getColorName() => colorLang[currentIndex];
  Color getColor() => colors[currentIndex];
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
