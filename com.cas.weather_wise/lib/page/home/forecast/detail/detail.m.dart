import 'package:flutter/material.dart';
import 'package:weather_wise/page/home/forecast/detail/section.dart';
import 'package:weather_wise/util/library.dart';
import 'package:weather_wise/util/service/weather.mod.dart';
import 'package:weather_wise/util/util.dart';

class ForecastDetailPage extends StatefulWidget {
  final Weather weather;

  const ForecastDetailPage({super.key, required this.weather});

  @override
  State<ForecastDetailPage> createState() => _ForecastDetailPageState();
}

class _ForecastDetailPageState extends State<ForecastDetailPage> {
  // late Weather weather;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // weather = LocalPageController.getCurrentWeather();
  }

  // @override
  // void initState() {
  //   super.initState();
  //   weather = LocalPageController.getCurrentWeather();
  // }

  @override
  Widget build(BuildContext context) {
    Size s = MediaQuery.of(context).size;
    var hours = Util.getForecastHours(widget.weather);

    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1933),
        title: Text(
          widget.weather.cityName,
          style: const TextStyle(color: Colors.white),
        ),
        leading: IconButton(
          onPressed: () => Navigator.pop(context),
          icon: Icon(Icons.arrow_back, size: 26, color: style_0),
        ),
      ),
      body: SingleChildScrollView(
        child: SizedBox(
          width: s.width,
          height: s.height,
          child: Padding(
            padding: const EdgeInsets.only(top: 0),
            child: ListView.builder(
              itemCount: hours.length,
              itemBuilder: (context, index) {
                return CityForecastSection(
                  hourForecast: hours[index].$2,
                  size: Size(s.width, s.height),
                  date: hours[index].$1,
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}
