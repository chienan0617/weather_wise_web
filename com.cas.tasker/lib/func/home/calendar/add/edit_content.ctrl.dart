import 'package:flutter/material.dart';

class AddTaskInputCtrl {
  static final _TitleInputCtrl title = _TitleInputCtrl();
  static final _ContentInputCtrl content = _ContentInputCtrl();

  static void initEditor() {
    title.controller.text = '';
    content.controller.text = '';
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
