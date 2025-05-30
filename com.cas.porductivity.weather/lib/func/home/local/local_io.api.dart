import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/util/library.dart';
import 'package:intl/intl.dart';


class LocalIoApi {
  static (String, bool) getFormatTime(int index) {
    index += 1;
    // index *= 3;
    bool isCurrent = hourIsCurrent(index);
    if (index < 12) {
      return ("${index.toString().padRight(2)}AM", isCurrent ? true : false);
    } else if (index == 12) {
      return ('12PM', isCurrent ? true : false);
    } else {
      return (
        "${(index - 12).toString().padRight(2)}PM",
        isCurrent ? true : false,
      );
    }
  }

  static SvgPicture getWeatherImage(int code, int isDay, Size size) {
    try {
      return SvgPicture.asset(
        'assets/weather/${isDay == 1 ? weatherData[code]![0] : weatherData[code]![1]}.svg',
        width: size.width,
        height: size.height,
      );
    } catch (e) {
      return SvgPicture.asset('assets/weather/smoke.svg');
    }
  }

  static SvgPicture getCurrentWeatherImage(Weather weather, Size size) {
    return getWeatherImage(
      weather.current.condition.code,
      weather.current.isDay,
      size,
    );
  }

  static bool hourIsCurrent(int hours) {
    return DateTime.now().hour == hours;
  }

  static List<(int, double, int, String)> getForecastHoursTemps(Weather w, int len) => w.forecast.expand((d) => d.hour.where((h) => DateTime.parse("${d.date} ${h.time.split(' ').last}").isAfter(DateTime.now())).map((h) => (h.condition.code, h.tempC, h.isDay, DateFormat('ha').format(DateTime.parse("${d.date} ${h.time.split(' ').last}"))))).take(len).toList();

  static Object? getDescription(int code, int isDay) {
    return weatherData[code]?[isDay == 1 ? 2 : 3];
  }
}
