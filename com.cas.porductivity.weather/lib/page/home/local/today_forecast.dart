
import 'package:flutter/material.dart';
import 'package:weather/func/home/local/local_io.api.dart';
import 'package:weather/func/home/local/weather.mod.dart';

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
            color: const Color(0xFF161121),
            spreadRadius: 20,
            blurStyle: BlurStyle.outer,
          ),
        ],
        borderRadius: const BorderRadius.only(
          topLeft: Radius.circular(75),
          topRight: Radius.circular(50),
        ),
        color: const Color(0xFF161121),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const SizedBox(width: 30),
              const Text(
                'Today',
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.white70,
                  fontFamily: 'Space Grotesk',
                ),
              ),
              // const SizedBox(width: 10)
              // Text(
              //   '${widget.weather.forecast[0].day}',
              //   style: TextStyle(
              //     fontSize: 16,
              //     color: Colors.white70,
              //     fontFamily: 'Space Grotesk',
              //   ),
              // ),
            ],
          ),
          const SizedBox(height: 10),
          // const Divider(indent: 15, endIndent: 15, thickness: 0.25),

          // 滾動區域
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10),
            width: widget.size.width,
            height: (widget.size.height * 2 / 7) - 33,
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: List.generate(24, (int index) {
                  return hoursSection(index, widget.weather);
                })
              ),
            )
          )
        ],
      ),
    );
  }

  Widget hoursSection(int index, Weather weather) {
    // log("$index ${weather.forecast[0].hour[index].condition.code.toString()}");
    return SizedBox(
      width: 75,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              "${weather.forecast[0].hour[index].tempC}°",
              style: const TextStyle(
                color: Colors.white,
                fontSize: 14,
                fontFamily: 'Space Grotesk',
                // backgroundColor: Colors.amber
              ),
            ),
            LocalIoApi.getWeatherImage(
              widget.weather.forecast[0].hour[index].condition.code,
              widget.weather.forecast[0].hour[index].isDay,
              Size(50, 50)
            ),
            Text(
              LocalIoApi.getFormatTime(index),
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 14,
                fontFamily: 'Space Grotesk',
                // backgroundColor: Colors.amber
              ),
            )
          ],
        ),
      ),
    );
  }
}

