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
}
