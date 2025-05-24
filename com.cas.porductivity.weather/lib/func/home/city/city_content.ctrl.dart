import 'package:flutter/material.dart';

class CityContentCtrl {
  static var search = _Search();
}

class _Search {
  var controller = TextEditingController();

  String getText() => controller.text;
}