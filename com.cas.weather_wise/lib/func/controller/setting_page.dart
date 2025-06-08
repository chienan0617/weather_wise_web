
import 'package:flutter/material.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:weather_wise/util/library.dart';

class SettingPageController {
  @registerFirst
  static void Function() refresh = () {};

  static var tempType = _TempType();
  static var backgroundType = _BackgroundType();
  static var isDay = _IsDay();
}

class _TempType {
  String dataName = 'tempType';
  List<String> temps = ['C°', 'F°'];
  late String currentValue = temps[value];

  int get value => Data.app.get<int>(dataName);
  set value(int index) => Data.app.put<String>(dataName, index);

  // @method String getCurrentItem() => page

  @method
  void onValueChanged(String? newValue) {
    if (newValue != null) value = temps.indexOf(newValue);
    currentValue = temps[value];
    SettingPageController.refresh();
    // log('message');
  }

  @method
  List<DropdownMenuItem<String>> getItems() {
    return temps
      .map((v) => DropdownMenuItem(
        value: v, child:
        Text(
          v, style: const TextStyle(
            color: Colors.white,
            fontSize: 16,
            fontFamily: fontFamilyDefault
          ),
        )
      ))
      .toList();
  }
}

class _IsDay {
  bool get value => Data.app.get<bool>('isDay');
  set value(bool v) => Data.app.put<bool>('isDay', v);

  void onValueChanged(bool newValue) {
    value = newValue;
    SettingPageController.refresh();
  }
}

class _BackgroundType {
  String dataName = 'backgroundType';
  List<String> background = ['Morning', 'Noon', 'Night'];
  late String currentValue = background[value];

  int get value => Data.app.get<int>(dataName);
  set value(int index) => Data.app.put<String>(dataName, index);

  // @method String getCurrentItem() => page

  @method
  void onValueChanged(String? newValue) {
    if (newValue != null) value = background.indexOf(newValue);
    currentValue = background[value];
    SettingPageController.refresh();
    // log('message');
  }

  @method
  List<DropdownMenuItem<String>> getItems() {
    return background
      .map((v) => DropdownMenuItem(
        value: v, child:
        Text(
          v, style: const TextStyle(
            color: Colors.white,
            fontSize: 16,
            fontFamily: fontFamilyDefault
          ),
        )
      ))
      .toList();
  }
}

bool isC() => SettingPageController.tempType.value == 0;