
import 'package:flutter/material.dart';
import 'package:weather/func/home/local/local_io.api.dart';
import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/util/language.dart';
import 'package:weather/util/library.dart';

class TodayForecast extends StatefulWidget {
  final Size size;
  final Weather weather;
  const TodayForecast({super.key, required this.size, required this.weather});

  @override
  State<TodayForecast> createState() => _TodayForecastState();
}

class _TodayForecastState extends State<TodayForecast> {
  final int itemCount = 7;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: widget.size.width,
      height: widget.size.height * 2 / 7,
      decoration: BoxDecoration(
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF111121),
            spreadRadius: 20,
            blurStyle: BlurStyle.outer,
          ),
        ],
        borderRadius: const BorderRadius.only(
          topLeft: Radius.circular(75),
          topRight: Radius.circular(50),
        ),
        color: const Color(0xFF111121),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            // mainAxisAlignment: MainAxisAlignment,
            children: [
              const SizedBox(width: 30),
              Text(
                Language.get('24h forecast'),//  |  ',
                style: const TextStyle(
                  fontSize: 16,
                  color: Colors.white70,
                  fontFamily: 'Space Grotesk',
                ),
              ),
              // const SizedBox(width: 20),
              Text(
                // 'Rain: ${widget.weather.forecast[0].day.dailyChanceOfRain}%, ${widget.weather.forecast[0].day.totalPrecipMm} mm'
                '',
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.white70,
                  fontFamily: 'Space Grotesk',
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          // const Divider(indent: 15, endIndent: 15, thickness: 0.25),

          // 滾動區域
          Expanded(
            child: LayoutBuilder(
              builder: (context, cons) {
                return Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  width: widget.size.width,
                  height: (widget.size.height * 2 / 7) - 33,
                  child: SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Row(
                      children: List.generate(24, (int index) {
                        List info = LocalIoApi.getForecastHoursTemps(
                          widget.weather, 24,
                        );
                        return hoursSection(index, info[index]);
                      })
                    ),
                  )
                );
              }
            ),
          )
        ],
      ),
    );
  }

  Widget hoursSection(int index, (int, double, int, String) info) {
    // log("$index ${weather.forecast[0].hour[index].condition.code.toString()}");
    return SizedBox(
      width: 75,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              "${info.$2}°",
              style: const TextStyle(
                color: Colors.white,
                fontSize: 14,
                fontFamily: 'Space Grotesk',
                // backgroundColor: Colors.amber
              ),
            ),
            LocalIoApi.getWeatherImage(
              info.$1, info.$3,
              Size(50, 50)
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 5),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(7.5),
                color: index == 0 ? style_0 : Colors.transparent
              ),
              child: Text(
                info.$4,
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: index == 0 ? style_0p : style_0,
                  fontSize: 14,
                  fontFamily: 'Space Grotesk',
                  // backgroundColor:
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}

