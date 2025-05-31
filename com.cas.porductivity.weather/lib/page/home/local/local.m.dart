import 'package:flutter/material.dart';
import 'package:weather/func/home/local/weather_current_io.api.dart';
import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/page/home/local/background.dart';
import 'package:weather/page/home/local/info.dart';
import 'package:weather/page/home/local/today_forecast.dart';

class LocalPageScreen extends StatefulWidget {
  const LocalPageScreen({super.key});

  @override
  State<LocalPageScreen> createState() => _LocalPageScreenState();
}

class _LocalPageScreenState extends State<LocalPageScreen> {
  @override
  Widget build(BuildContext context) {
    Weather weather = CurrentWeatherApi.getDefaultWeather();

    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      // appBar: AppBar(
      //   backgroundColor: const Color(0xFF1C1121),
      // ),
      body: LayoutBuilder(
        builder: (context, cons) {
          Size size = Size(cons.maxWidth, cons.maxHeight);
          return SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                SizedBox(
                  height: size.height * 5 / 7,
                  child: ColorGradient(size: size, weather: weather),
                ),
                SizedBox(
                  height: size.height * 2 / 7,
                  child: TodayForecast(size: size, weather: weather),
                ),
                SizedBox(
                  width: size.width,
                  child: TodayInfo(size: size, weather: weather),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
