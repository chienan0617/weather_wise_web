import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:weather_wise/func/controller/forecast_page.dart';
import 'package:weather_wise/func/controller/home_bottom_bar.dart';
import 'package:weather_wise/func/controller/local_page.dart';
import 'package:weather_wise/page/home/forecast/detail/detail.m.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:weather_wise/util/language.dart';
import 'package:weather_wise/util/library.dart';
import 'package:weather_wise/util/service/weather.mod.dart';
import 'package:weather_wise/util/util.dart';

class ForecastPage extends StatefulWidget {
  const ForecastPage({super.key});

  @override
  State<ForecastPage> createState() => _ForecastPageState();
}

class _ForecastPageState extends State<ForecastPage> {
  @override
  void initState() {
    super.initState();
    ForecastPageController.refresh = () => setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    List<Weather> weatherList = Data.weather.box.values
        .whereType<Weather>()
        .toList();
    // print(
    //   "list::${weatherList.length}, ${weatherList.map((e) => e.location.name)}",
    // );

    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1933),
        leading: IconButton(
          onPressed: () {},
          icon: const Icon(Icons.menu, color: style_0, size: 26),
        ),
        title: Text(
          Language.word('Forecast'),
          textAlign: TextAlign.center,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 18,
            fontFamily: 'Space Grotesk',
            fontWeight: FontWeight.w700,
            height: 1.28,
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => HomePageCtrl.onValueChanged(2),
        backgroundColor: const Color(0xFF2B11EA),
        child: const Icon(Icons.add, color: Colors.white),
      ),
      body: Column(
        children: [
          SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
              child: Text(
                Language.word('Forecast'),
                style: const TextStyle(
                  color: style_0,
                  fontFamily: 'Space Grotesk',
                  fontWeight: FontWeight.w500,
                  fontSize: 24,
                ),
              ),
            ),
          ),
          Expanded(
            child: Column(
              children: List.generate(weatherList.length, (int index) {
                return citySection(weatherList[index], size);
              }),
            ),
          ),
        ],
      ),
    );
  }

  Widget citySection(Weather weather, Size size) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),

      // width: size.width,
      // height: 60,
      child: GestureDetector(
        onTap: () => Navigator.of(context).push(
          PageRouteBuilder(
            pageBuilder: (context, animation, secondaryAnimation) =>
                ForecastDetailPage(weather: weather),
            transitionsBuilder:
                (context, animation, secondaryAnimation, child) {
                  return SlideTransition(
                    position: animation.drive(
                      Tween(
                        begin: Offset(1.0, 0.0),
                        end: Offset.zero,
                      ).chain(CurveTween(curve: Curves.ease)),
                    ),
                    child: child,
                  );
                },
          ),
        ),

        child: Container(
          height: size.height * 0.15,
          margin: const EdgeInsets.symmetric(horizontal: 20),
          decoration: BoxDecoration(color: const Color(0xFF1C1933)),
          // padding: const EdgeInsets.symmetric(horizontal: 15),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: Text(
                      weather.cityName,
                      style: const TextStyle(
                        color: style_0,
                        fontFamily: 'Space Grotesk',
                        fontSize: 20,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 10,
                      vertical: 5,
                    ),
                    child: Text(
                      '${weather.current.tempC.round()}°',
                      style: const TextStyle(
                        color: style_0,
                        fontSize: 24,
                        fontFamily: 'Space Grotesk',
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(),
              Row(
                // mainAxisSize: MainAxisSize.,
                // crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  const SizedBox(width: 10),
                  Util.getCurrentWeatherImage(weather, Size(62.5, 62.5)),
                  const SizedBox(width: 10),
                  Text(
                    LocalPageController.getDescription(
                      weather.current.condition.code,
                      weather.current.isDay,
                    ),
                    style: const TextStyle(
                      color: Colors.white,
                      fontFamily: 'Space Grotesk',
                      fontWeight: FontWeight.w500,
                      fontSize: 14,
                    ),
                  ),
                  // Text('${Object.hashAll([weather.location.name, weather.loc])}>', style: const TextStyle(color: Colors.white),)
                  const Expanded(child: SizedBox()),
                  // const SizedBox(height: 10,),
                  Text(
                    DateFormat('yyyy-MM-dd HH:mm')
                        .parse(weather.location.localtime.toString())
                        .toString()
                        .substring(5, 16),
                    style: const TextStyle(
                      fontFamily: 'Space Grotesk',
                      color: Colors.white70,
                    ),
                  ),
                  const SizedBox(width: 15),
                ],
              ),
              // const SizedBox(height: )
            ],
          ),
        ),
      ),
    );
  }
}
