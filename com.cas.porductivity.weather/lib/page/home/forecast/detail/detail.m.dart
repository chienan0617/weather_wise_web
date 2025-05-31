import 'package:flutter/material.dart';
import 'package:weather/func/home/forecast/forecast_io.api.dart';
import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/func/home/local/weather_current_io.api.dart';
import 'package:weather/page/home/forecast/detail/section.dart';
import 'package:weather/page/home/home.m.dart';
import 'package:weather/util/language.dart';
import 'package:weather/util/library.dart';

class ForecastDetailPageScreen extends StatefulWidget {
  const ForecastDetailPageScreen({super.key});

  @override
  State<ForecastDetailPageScreen> createState() =>
      _ForecastDetailPageScreenState();
}

class _ForecastDetailPageScreenState extends State<ForecastDetailPageScreen> {
  late Weather weather;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    weather = CurrentWeatherApi.getDefaultWeather();
  }

  @override
  Widget build(BuildContext context) {
    Size s = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1933),
        title: Text(
          Language.get('Weather Forecast'),
          style: const TextStyle(color: Colors.white),
        ),
        leading: IconButton(
          onPressed: () {
            Navigator.pop(context);
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => HomePageScreen()),
            );
          },
          icon: Icon(Icons.arrow_back, size: 26, color: style_0),
        ),
      ),
      body: SizedBox(
        width: s.width,
        height: s.height,
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: LayoutBuilder(
              builder: (context, cons) {
                var hours = ForecastIoApi.getForecastHours(weather, 72);
                return Column(
                  children: List.generate(72, (int index) {
                    return ForecastSection(
                      hourForecast: hours[index].$2,
                      size: Size(cons.maxWidth, cons.maxHeight),
                      date: hours[index].$1,
                    );
                  }),
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}
