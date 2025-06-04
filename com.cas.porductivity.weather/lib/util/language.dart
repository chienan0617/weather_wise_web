import 'dart:convert';
// import 'dart:io';  // ← 可以移除
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:weather/page/home/home.m.dart';
import 'package:weather/util/data/data.dart';

class Language {
  static Map<String, List> word = {};
  static Map<int, List<dynamic>> weatherData = {};
  static int index = Data.app.get<bool>('language') ? 1 : 0;
  static String err = '<Error>';

  static Future<void> initialize() async {
    // 1) 載入 word.json
    final String wordContents =
        await rootBundle.loadString('assets/lang/word.json');
    word = (jsonDecode(wordContents) as Map)
        .cast<String, List>();

    // 2) 載入 weather.json
    final String weatherContents =
        await rootBundle.loadString('assets/lang/weather.json');
    final List<dynamic> weatherList = jsonDecode(weatherContents);
    weatherData = (weatherList[index] as Map<String, dynamic>).map(
      (key, value) =>
          MapEntry(int.parse(key), value as List<dynamic>),
    );
  }

  static String get(String text) =>
      word[text]?[index]?.toString() ?? err;

  static Map<int, List<dynamic>> getWeatherData() => weatherData;

  static changeIndex(bool b, BuildContext context) {
    Data.app.put('language', b);
    index = Data.app.get<bool>('language') ? 1 : 0;
    Navigator.pop(context);
    Navigator.push(
      context,
      MaterialPageRoute(builder: (_) => HomePageScreen()),
    );
  }
}
