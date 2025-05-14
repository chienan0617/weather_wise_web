import 'package:tasker/model/app/app.dart';
import 'package:tasker/model/page/calendar/calendar_render.dart';

class Model {
  static late final BaseModel app;
  static late final CalendarRenderModel calendarRender;

  static void initialize() {
    app = BaseModel();
    calendarRender = CalendarRenderModel();
  }
}
