import 'package:flutter/material.dart';
import 'package:tasker/util/data/type.dart';

class TaskGroupEditInputCtrl {
  static final title = _Title();
}

class _Title {
  void setupInitText(String text) => controller.text = text;

  TaskGroup storeText(TaskGroup taskGroup) {
    taskGroup.name = controller.text;
    return taskGroup;
  }

  TextEditingController controller = TextEditingController(
    text: ""
  );
}