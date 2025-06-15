import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/home_bottom_bar.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:flutter/services.dart';
import 'package:weather_wise/util/base.dart';
import 'package:weather_wise/util/data/data.dart';

class Language {
  static final wordData = _Word();
  static final weatherData = _Weather();
  static final backgroundImage = _BackgroundImage();

  static int index = 1;
  static String error = '<Error>';

  @initially
  static Future<void> initialize() async {
    await wordData.initialize();
    await weatherData.initialize();
    await backgroundImage.initialize();
  }

  @functional
  static String word(String text) {
    return wordData.words[text]?[index].toString() ?? error;
  }

  @functional
  static List<String> wordAll(List<String> words) {
    return words.map((e) => word(e)).toList();
  }

  static changeIndex(bool b, BuildContext context) {
    Data.app.put('language', b);
    index = Data.app.get<bool>('language') ? 1 : 0;
    // Navigator.pop(context);
    // Navigator.push(context, MaterialPageRoute(builder: (_) => HomePage()));
    HomePageCtrl.onValueChanged(3);
  }
}

class _Word implements Initializable {
  Map<String, List> words = {};

  @initially
  @override
  Future<void> initialize() async {
    final String wordContents = await rootBundle.loadString(
      'assets/document/word.json',
    );
    words = (jsonDecode(wordContents) as Map).cast<String, List>();
  }
}

class _Weather implements Initializable {
  Map<int, List<dynamic>> weatherData = {};

  @initially
  @override
  Future<void> initialize() async {
    final String weatherContents = await rootBundle.loadString(
      'assets/document/weather.json',
    );
    final List<dynamic> weatherList = jsonDecode(weatherContents);
    weatherData = (weatherList[Language.index] as Map<String, dynamic>).map(
      (key, value) => MapEntry(int.parse(key), value as List<dynamic>),
    );
  }
}

class _BackgroundImage implements Initializable {
  Map<int, List<int>> images = {};

  @initially
  @override
  Future<void> initialize() async {
    final String backgroundContents = await rootBundle.loadString(
      'assets/document/weather_icon.json',
    );
    final Map<String, dynamic> raw = jsonDecode(backgroundContents);

    images = <int, List<int>>{
      for (var entry in raw.entries)
        int.parse(entry.key): (entry.value as List<dynamic>).cast<int>(),
    };
  }
}
