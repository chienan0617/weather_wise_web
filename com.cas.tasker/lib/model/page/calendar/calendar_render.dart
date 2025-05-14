import 'package:tasker/util/init/init.dart';
import 'package:tasker/util/lang/language.dart';

class CalendarRenderModel implements Registerable {
  late List<String> weekDays;

  CalendarRenderModel() {
    Initialize.register(this);
  }

  @override
  void initialize() {
    weekDays = Language.words('week');
  }

  @override
  void checkKey() {
    // Data.app.checkKey('', defaultValue)
  }

  String getWeekName(int weekday) => weekDays[weekday];
}
