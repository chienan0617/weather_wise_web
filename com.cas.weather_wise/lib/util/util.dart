import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:weather_wise/util/library.dart';
import 'package:weather_wise/util/service/weather.mod.dart';

class Util {
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

  static (String, bool) getFormatTime(int index) {
    index += 1;
    // index *= 3;
    bool isCurrent = DateTime.now().hour == index;
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

  static List<(DateTime date, HourForecast)> getForecastHours(Weather weather, int length) {
    return weather.forecast
      .expand(
        (d) => d.hour
          .where(
            (h) => DateTime.parse("${d.date} ${h.time.split(' ').last}").isAfter(DateTime.now()),
          )
          .map(
            (h) => (
              DateTime.parse("${d.date} ${h.time.split(' ').last}"),
              h,
            ),
          ),
      )
      .take(length)
      .toList();
  }
}
