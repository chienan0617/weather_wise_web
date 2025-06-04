import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/forecast_page.dart';
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
    print(
      "list::${weatherList.length}, ${weatherList.map((e) => e.location.name)}",
    );

    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(backgroundColor: const Color(0xFF1C1933)),
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
          // 使用 Expanded 包裹 PageView.builder
          Expanded(
            // child: PageView.builder(
            //   itemCount: weatherList.length,
            //   itemBuilder: (BuildContext context, int index) {
            //     return citySection(weatherList[index], size);
            //   },
            // ),
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
        onTap: () => Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ForecastDetailPage(weather: weather),
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
                      weather.location.name,
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
                children: [
                  const SizedBox(width: 10),
                  Util.getCurrentWeatherImage(weather, Size(62.5, 62.5)),
                  const SizedBox(width: 10),
                  Text('<點擊 ', style: const TextStyle(color: Colors.white)),
                  Text('${Object.hashAll([weather.location.name, weather.loc])}>', style: const TextStyle(color: Colors.white),)
                ],
              ),
            ],
          ),
          // child: Row(
          //   children: [
          //     const SizedBox(width: 10),
          //     Container(
          //       width: 60,
          //       height: 60,
          //       decoration: BoxDecoration(
          //         color: const Color(0xFF1C1933),
          //         borderRadius: BorderRadius.circular(10),
          //       ),
          //       child: Icon(
          //         Icons.location_on_outlined,
          //         color: style_0,
          //         size: 28,
          //       ),
          //     ),
          //     const SizedBox(width: 25),
          //     Text(
          //       // Language.word('72 Hour Forecast'),
          //       weather.location.name,
          //       style: const TextStyle(
          //         color: style_8,
          //         fontSize: 18,
          //         fontWeight: FontWeight.w500,
          //         fontFamily: 'Space Grotesk',
          //       ),
          //     ),
          //     const Expanded(child: SizedBox()),
          //     const Icon(Icons.arrow_forward_ios, color: style_104, size: 20),
          //     const SizedBox(width: 10),
          //   ],
          // ),
        ),
      ),
    );
  }
}
