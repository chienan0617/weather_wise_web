import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/util/data/data.dart';

@api
class Tutor {
  static bool checkTutored() {
    return Data.app.get<bool>('tutored');
  }

  static void markTutorDone() {
    Data.app.put('tutored', true);
  }
}
