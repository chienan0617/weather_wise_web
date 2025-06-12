import 'package:flutter/material.dart';
import 'package:weather_wise/util/file_handle.dart';
import 'package:weather_wise/util/library.dart';
import 'package:weather_wise/util/service/weather.mod.dart';
import 'package:weather_wise/util/util.dart';

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
    HourForecast cur = widget.weather.forecast[0].hour[DateTime.now().hour - 1];

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 50),
          const Divider(indent: 20, endIndent: 20, thickness: 0.25),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 10),
            child: Text(
              Language.word("Information"),
              style: const TextStyle(
                color: Colors.white70,
                fontSize: 18,
                fontFamily: fontFamilyDefault,
              ),
            ),
          ),
          section(Icons.opacity, Language.word('Humidity'), '${cur.humidity}%'),
          section(
            Icons.thermostat_outlined,
            Language.word('Temperature'),
            '${Util.tempIsC() ? cur.tempC : cur.tempF}°',
          ),
          section(
            Icons.thermostat_auto_outlined,
            Language.word('Feels Like'),
            '${Util.tempIsC() ? cur.feelslikeC : cur.feelslikeF}',
          ),
          section(Icons.wb_sunny_outlined, Language.word('Ultraviolet Ray'), cur.uv.toInt()),
          // section(
          //   Icons.air_outlined,
          //   'Wind',
          //   '${cur.windKph} kph, ${cur.windDir}',
          // ),
          // section(Icons.cloud_outlined, 'cloud', cur.cloud),
          section(
            Icons.water_drop_outlined,
            Language.word('Hourly Precipitation'),
            '${cur.precipMm} mm',
          ),
          const SizedBox(height: 30),
        ],
      ),
    );
  }

  Widget section(IconData icon, dynamic title, dynamic subtitle) {
    title = title.toString();
    subtitle = subtitle.toString();

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      child: Row(
        children: [
          Container(
            width: 60,
            height: 60,
            decoration: BoxDecoration(
              color: const Color(0xFF1C1933),
              borderRadius: BorderRadius.circular(10),
              shape: BoxShape.rectangle,
            ),
            child: Icon(icon, color: Colors.white, size: 28),
          ),

          const SizedBox(width: 20),

          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // * title
              Text(
                title,
                style: const TextStyle(
                  color: Colors.white70,
                  fontSize: 15,
                  fontFamily: fontFamilyDefault,
                  fontWeight: FontWeight.w400,
                ),
              ),

              // * subtitle
              Text(
                subtitle,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                  fontFamily: fontFamilyDefault,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ],
          ),
        ],
      ),
      // child: ListTile(
      //   // contentPadding: const EdgeInsets.symmetric(horizontal: 0),
      //   leading:
      //   ),
      //   title: Text(title, style: const TextStyle(
      //     color: Colors.white70,
      //     fontSize: 14,
      //     fontFamily: fontFamilyDefault,
      //     fontWeight: FontWeight.w400
      //   )),
      //   subtitle: Text(title, style: const TextStyle(
      //     color: Colors.white,
      //     fontSize: 18,
      //     fontFamily: fontFamilyDefault,
      //     fontWeight: FontWeight.w500
      //   )),
      //   trailing: Icon(Icons.wallet),
      // ),
    );
  }
}
