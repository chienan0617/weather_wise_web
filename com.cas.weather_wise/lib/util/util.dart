import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:intl/intl.dart';
import 'package:weather_wise/func/controller/setting_page.dart';
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
      weather.forecast[0].hour[DateTime.now().hour].condition.code,
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

  static List<(DateTime, HourForecast)> getForecastHours(Weather weather) {
    final now = DateTime.now();

    return weather.forecast
      .expand((daily) => daily.hour.map((h) => (daily.date, h))) // 傳回 tuple
      .map((tuple) {
        final date = tuple.$1;
        final h = tuple.$2;
        final dt = DateTime.parse("$date ${h.time.split(' ').last}");
        return (dt, h);
      })
      .where((tuple) => !tuple.$1.isBefore(now.subtract(Duration(hours: 2))))
      .toList();
  }

  static List<(int, double, int, String)> getForecastHoursTemps(
    Weather w,
    int len,
  ) {
    final now = DateTime.now();

    return w.forecast
      .expand((day) {
        return day.hour
          .where((hour) {
            // 只保留未來時間的預報
            final dateTime = DateTime.parse(
              "${day.date} ${hour.time.split(' ').last}",
            );
            return dateTime.isAfter(now.subtract(Duration(hours: 1)));
          })
          .map((hour) {
            final dateTime = DateTime.parse(
              "${day.date} ${hour.time.split(' ').last}",
            );
            return (
              hour.condition.code, // 天氣狀態碼
              Util.tempIsC() ? hour.tempC : hour.tempF, // 溫度（攝氏）
              hour.isDay, // 是否白天 (1/0)
              DateFormat('ha').format(dateTime), // 格式化時間，例如 "8AM"
            );
          });
      })
      .take(len) // 限制最多取幾筆
      .toList();
  }

  static bool tempIsC() => isC();
}
