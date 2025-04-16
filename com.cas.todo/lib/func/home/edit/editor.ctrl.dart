import 'package:flutter/material.dart';
import 'package:todo_list/util/data/type.dart';

class EditorCtrl {
  static final title = _TitleEditor();
  static final content = _ContentEditor();
}

class _TitleEditor {
  var controller = TextEditingController();

  String get text => controller.text;

  void setUp(Todo todo) {
    try {
      controller.text = (todo.content) as String;
    } catch (e) {e;}
  }
}

class _ContentEditor {
  var controller = TextEditingController();

  String get text => controller.text;

  void setUp(Todo todo) {
    try {
      controller.text = (todo.content) as String;
    } catch (e) {e;}
  }
}