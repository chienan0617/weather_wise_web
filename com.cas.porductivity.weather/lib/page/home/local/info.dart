import 'package:flutter/material.dart';
import 'package:weather/func/home/local/weather.mod.dart';

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
        // crossAxisAlignment: CrossAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        // mainAxisAlignment: MainAxisAlignment.start,
        children: [
          const SizedBox(height: 50),
          const Text(
            'Information',
            style: TextStyle(
              color: Colors.white70,
              fontSize: 16,
              fontFamily: 'Space Grotesk',
            ),
          ),
          const SizedBox(height: 30,),
          section('title', 'value'),
          // Text(
          //   'Humidity: ${widget.weather.forecast[0].day.avgHumidity}',
          //   style: const TextStyle(color: style_0),
          // ),
        ],
      ),
    );
  }

  Widget section(String title, String value) {
    return SizedBox(
      width: widget.size.width,
      // child: ListTile(
      //   leading:
      //   // title: Text(title),
      // ),
      child: Row(
        children: [
          // Container(
          //   decoration: BoxDecoration(
          //     borderRadius: BorderRadius.circular(7.5),
          //     color: const Color(0xFF1C1933),
          //   ),
          //   child: Center(child: Icon(icon, size: 24, color: Colors.white)),
          // ),
          Text(title, style: TextStyle(color: Colors.white70, )),
          // Text(data)
          Text(value, style: TextStyle(color: Colors.white),),
        ],
      ),
    );
  }
}
