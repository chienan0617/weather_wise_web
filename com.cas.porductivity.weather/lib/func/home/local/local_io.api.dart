import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/util/library.dart';

class LocalIoApi {
  static String getFormatTime(int index) {
    index += 1;
    // index *= 3;
    if (index < 12) {
      return "${index.toString().padRight(2)}AM";
    } else if (index == 12) {
      return '12PM';
    } else {
      return "${(index - 12).toString().padRight(2)}PM";
    }
  }

  static SvgPicture getWeatherImage(int code, int isDay, Size size) {
    try {
        return SvgPicture.asset(
        'assets/weather/${
          isDay == 1
          ? weatherData[code]![0]
          : weatherData[code]![1]
        }.svg',
        width: size.width, height: size.height,
      );
    } catch (e) {
      return SvgPicture.asset('assets/weather/smoke.svg');
    }
  }

  static SvgPicture getCurrentWeatherImage(Weather weather, Size size) {
    return getWeatherImage(
      weather.current.condition.code,
      weather.current.isDay,
      size
    );
  }
}