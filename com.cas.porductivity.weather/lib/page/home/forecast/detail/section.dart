import 'package:flutter/material.dart';
import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/util/library.dart';
import 'package:weather/func/home/local/local_io.api.dart';

class ForecastSection extends StatefulWidget {
  final DateTime date;
  final HourForecast hourForecast;
  final Size size;

  const ForecastSection({
    super.key,
    required this.hourForecast,
    required this.size,
    required this.date,
  });

  @override
  State<ForecastSection> createState() => _ForecastSectionState();
}

class _ForecastSectionState extends State<ForecastSection> {
  @override
  Widget build(BuildContext context) {
    return Column(
      // crossAxisAlignment: CrossAxisAlignment.end,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        widget.date.hour == 0
        ? Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text(
              widget.date.toString().substring(5, 10),
              style: const TextStyle(
                color: style_0,
                fontSize: 24,
                fontWeight: FontWeight.w500,
                fontFamily: 'Space Grotesk'
              )
            ),
        )
        : const SizedBox(),
        Container(
          width: widget.size.width,
          height: 125,
          margin: const EdgeInsets.symmetric(vertical: 7.5),
          decoration: BoxDecoration(
            color: const Color.fromARGB(255, 22, 22, 43),
            borderRadius: BorderRadius.circular(15),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 15,
                      vertical: 10,
                    ),
                    child: Text(
                      LocalIoApi.getFormatTime(widget.date.hour).$1,
                      style: const TextStyle(
                        color: style_96,
                        fontFamily: 'Space Grotesk',
                        fontSize: 16,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(right: 15, top: 10),
                    child: Text(
                      "${widget.hourForecast.tempC.round()}°",
                      style: const TextStyle(
                        color: style_0,
                        fontWeight: FontWeight.w500,
                        fontSize: 24,
                      ),
                    ),
                  ),
                ],
              ),
              const Expanded(child: SizedBox()),

              Row(
                // mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(left: 10),
                    child: LocalIoApi.getWeatherImage(
                      widget.hourForecast.condition.code,
                      widget.hourForecast.isDay,
                      Size(56.75, 56.75),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 15,
                      vertical: 5,
                    ),
                    child: Text(
                      '${LocalIoApi.getDescription(widget.hourForecast.condition.code, widget.hourForecast.isDay)}',
                      style: const TextStyle(
                        color: style_0,
                        fontFamily: 'Space Grotesk',
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                  const Expanded(child: SizedBox()),
                  Padding(
                    padding: const EdgeInsets.only(right: 15),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        Row(
                          // mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            Icon(Icons.air, color: style_64, size: 16),
                            Text(
                              '${widget.hourForecast.windKph} Kph',
                              style: TextStyle(color: style_64),
                            ),
                          ],
                        ),
                        Row(
                          children: [
                            Icon(
                              Icons.water_drop_outlined,
                              color: style_64,
                              size: 16,
                            ),
                            Text(
                              '${widget.hourForecast.humidity}% ',
                              style: TextStyle(color: style_64),
                            ),
                            Icon(
                              Icons.umbrella_outlined,
                              color: style_64,
                              size: 16,
                            ),
                            Text(
                              '${widget.hourForecast.chanceOfRain}%',
                              style: TextStyle(color: style_64),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  // ),
                ],
              ),
            ],
          ),
        ),
      ],
    );
  }
}
