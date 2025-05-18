import 'package:flutter/material.dart';
import 'package:tasker/util/customize.util.dart';

class TaskGroupAddInputCtrl {
  static final color = _Color();
  static final name = _Name();
}

class _Color {
  int currentIndex = 0;
  List<Color> colorList = colors;
  List<String> colorNames = com('color');
  int length = colors.length;

  void init() => currentIndex = 0;
  void onChanged(int index) => currentIndex = index;
  String currentColorName() => colorNames[currentIndex];
  Color currentColor() => colors[currentIndex];
}

class _Name {
  void setValue(String value) => controller.text = value;
  void init() => controller.text = '';
  String getValue() => controller.text;

  var controller = TextEditingController(
    text: "",
  );
}