import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:intl/intl.dart';
import 'package:weather_wise/func/controller/setting_page.dart';
import 'package:weather_wise/util/file_handle.dart';
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
      weather.forecast[0].hour[DateTime.now().hour -1].condition.code,
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
        return day.hour.where((hour) {
          final lastUpdated = DateTime.parse(w.current.lastUpdated).toLocal();

          return DateTime.parse(
            "${day.date} ${hour.time.split(' ').last}"
          ).toLocal().isAfter(lastUpdated.subtract(Duration(hours: 1)));

        }).map((hour) {
          final dtLocal = DateTime.parse(
            "${day.date} ${hour.time.split(' ').last}"
          ).toLocal();

          return (
            hour.condition.code,
            Util.tempIsC() ? hour.tempC : hour.tempF,
            hour.isDay,
            DateFormat('${SettingPageController.timeType.currentValue == 0 ? 'H' : 'h'}a').format(dtLocal), // 用24小時制(local)
          );
        });
      })
      .take(len)
      .toList();
  }


  static bool tempIsC() => isC();

  static Image getBackgroundImage(
    Weather weather,
    Size size, [
    bool custom = true,
  ]) {
    final String pathBase = 'assets/image/background';

    Image getImage(String path) => Image.asset(
      path,
      width: double.infinity,//size.width,
      height: double.infinity,//size.height,
      fit: BoxFit.cover,
      alignment: Alignment.bottomCenter,
    );

    String getPath(int index, [bool c = true]) {
      // log(Language.backgroundImage.images.toString());
      int i = Language
          .backgroundImage
          .images[weather.forecast[0].hour[DateTime.now().hour -1].condition.code]![index];
      if (!c) {
        int n = SettingPageController.backgroundType.value;
        return '$pathBase/wi_${n > 0 ? n : -n}.${n > 0 ? 'webp' : 'jpg'}';
      } else {
        return '$pathBase/wi_${i > 0 ? i : -i}.${i > 0 ? 'webp' : 'jpg'}';
      }
    }

    if (!custom) {
      return getImage(getPath(0, false));
    } else {
      if (weather.current.isDay == 1 ? true : false) {
        int curHour = DateTime.parse(weather.current.lastUpdated).hour;
        if (curHour < 8 || curHour > 18) {
          return getImage(getPath(0));
        } else {
          return getImage(getPath(1));
        }
      } else {
        return getImage(getPath(2));
      }
    }
  }

  static void openDrawer(BuildContext context) {
    try {
      Scaffold.of(context).openDrawer();
    } catch (e) {
      log('message');
      throw Exception('no drawer widget on superior');
    }
  }

  static bool isBirthDay() {
    return (DateTime.now().month == DateTime.june && DateTime.now().day == 17);
  }
}
