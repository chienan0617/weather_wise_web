import 'package:flutter/material.dart';
import 'package:weather_wise/util/language.dart';
import 'package:weather_wise/util/library.dart';
import 'package:weather_wise/util/service/weather.mod.dart';

class TodayInfo extends StatefulWidget {
  final Weather weather;
  final Size size;
  const TodayInfo({super.key, required this.weather, required this.size});

  @override
  State<TodayInfo> createState() => _TodayInfoState();
}

class _TodayInfoState extends State<TodayInfo> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 30),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 50),
          Text(
            Language.word("Information"),
            style: const TextStyle(
              color: Colors.white70,
              fontSize: 16,
              fontFamily: fontFamilyDefault,
            ),
          ),
          const SizedBox(height: 30,),
          section('title', 'value')
        ],
      ),
    );
  }

  Widget section(String title, String value) {
    return SizedBox(
      width: widget.size.width,
      child: Row(
        children: [
          Text(title, style: TextStyle(color: Colors.white70)),
          Text(value, style: TextStyle(color: Colors.white)),
        ],
      ),
    );
  }
}
