import 'package:flutter/material.dart';
import 'package:weather_wise/page/home/forecast/detail/detail.m.dart';
import 'package:weather_wise/util/language.dart';
import 'package:weather_wise/util/library.dart';

class ForecastPage extends StatefulWidget {
  const ForecastPage({super.key});

  @override
  State<ForecastPage> createState() => _ForecastPageState();
}

class _ForecastPageState extends State<ForecastPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(backgroundColor: const Color(0xFF1C1933)),
      body: Column(
        children: [
          Padding(
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
          GestureDetector(
            onTap: () => Navigator.push(context, MaterialPageRoute(builder: (context) => ForecastDetailPage())),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15),
              child: Row(
                children: [
                  const SizedBox(width: 10),
                  Container(
                    width: 60,
                    height: 60,
                    decoration: BoxDecoration(
                      color: const Color(0xFF1C1933),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Icon(
                      Icons.location_on_outlined,
                      color: style_0,
                      size: 28,
                    ),
                  ),
                  const SizedBox(width: 25),
                  Text(
                    Language.word('72 Hour Forecast'),
                    style: const TextStyle(
                      color: style_8,
                      fontSize: 18,
                      fontWeight: FontWeight.w500,
                      fontFamily: 'Space Grotesk',
                    ),
                  ),
                  const Expanded(child: SizedBox()),
                  const Icon(Icons.arrow_forward_ios, color: style_104, size: 20),
                  const SizedBox(width: 10),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
