import 'package:tasker/model/model.dart';

class Language {
  const Language();
  static int index = Model.app.getLanguageIndex();
  static String error = '<Error!>';

  static String word(String word) {
    return wordDictionary[word]?[index] ?? error;
  }

  static List<String> words(String word) {
    return wordListDictionary[word]?[index] ?? [error];
  }

  static const wordDictionary = {
    'error': ['error', '錯誤'],
  };

  static const wordListDictionary = {
    'week': [
      ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    ]
  };
}



// const words = [

// ]