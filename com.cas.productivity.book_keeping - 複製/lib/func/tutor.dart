import 'package:bookkeeping/util/annotation.dart';
import 'package:bookkeeping/util/data/data.dart';

@api
class Tutor {
  static bool checkTutored() {
    return Data.app.get<bool>('tutored');
  }

  static void markTutorDone() {
    Data.app.put('tutored', true);
  }
}
