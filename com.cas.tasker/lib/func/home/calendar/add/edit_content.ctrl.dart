import 'package:flutter/material.dart';
import 'package:tasker/util/customize.util.dart';

class AddTask {
  static final _TitleInputCtrl titleInput = _TitleInputCtrl();
  static final _ContentInputCtrl contentInput = _ContentInputCtrl();
  static final _PickColorCtrl pickColor = _PickColorCtrl();

  static void initEditor() {
    titleInput.controller.text = '';
    contentInput.controller.text = '';
  }
}

class _TitleInputCtrl {
  TextEditingController controller = TextEditingController(
    text: ''
  );
}

class _ContentInputCtrl {
  TextEditingController controller = TextEditingController(
    text: ''
  );
}

class _PickColorCtrl {
  int currentIndex = 0;
  List<Color> colorList = colors;
  List<String> colorLang = com('name');

  void onChange(int value) => currentIndex = value;
}
