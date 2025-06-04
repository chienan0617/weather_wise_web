import 'dart:convert';

import 'package:bookkeeping/util/annotation.dart';
import 'package:flutter/services.dart';

class Language {
  static final wordData = _Word();

  static int index = 0;
  static String error = '<Error>';

  @initially
  static Future<void> initialize() async {
    await wordData.initialize();
  }

  @functional
  static String word(String text) {
    return wordData.words[text]?[index].toString() ?? error;
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
