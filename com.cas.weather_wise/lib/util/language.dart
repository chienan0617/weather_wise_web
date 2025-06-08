import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/home_bottom_bar.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:flutter/services.dart';
import 'package:weather_wise/util/data/data.dart';

class Language {
  static final wordData = _Word();
  static final weatherData = _Weather();

  static int index = 1;
  static String error = '<Error>';

  @initially
  static Future<void> initialize() async {
    await wordData.initialize();
    await weatherData.initialize();
  }

  @functional
  static String word(String text) {
    return wordData.words[text]?[index].toString() ?? error;
  }

  static changeIndex(bool b, BuildContext context) {
    Data.app.put('language', b);
    index = Data.app.get<bool>('language') ? 1 : 0;
    // Navigator.pop(context);
    // Navigator.push(context, MaterialPageRoute(builder: (_) => HomePage()));
    HomePageCtrl.onValueChanged(3);
  }
}

class _Word {
  Map<String, List> words = {};

  @initially
  Future<void> initialize() async {
    final String wordContents = await rootBundle.loadString(
      'assets/lang/word.json',
    );
    words = (jsonDecode(wordContents) as Map).cast<String, List>();
  }
}

class _Weather {
  Map<int, List<dynamic>> weatherData = {};

  @initially
  Future<void> initialize() async {
    final String weatherContents = await rootBundle.loadString(
      'assets/lang/weather.json',
    );
    final List<dynamic> weatherList = jsonDecode(weatherContents);
    weatherData = (weatherList[Language.index] as Map<String, dynamic>).map(
      (key, value) => MapEntry(int.parse(key), value as List<dynamic>),
    );
  }
}
