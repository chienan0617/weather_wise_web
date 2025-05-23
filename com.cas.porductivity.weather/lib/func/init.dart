import 'package:weather/util/data/data.dart';

class InitState {
  static bool get tutorialBefore => Data.app.get<bool>('tutorial');
  static set tutorialBefore(bool value) => Data.app.put<bool>('tutorial', true);
}