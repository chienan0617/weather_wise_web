import 'package:flutter/material.dart';
import 'package:weather/page/home/forecast/detail/detail.m.dart';
import 'package:weather/util/language.dart';
import 'package:weather/util/library.dart';

class ForecastPageScreen extends StatefulWidget {
  const ForecastPageScreen({super.key});

  @override
  State<ForecastPageScreen> createState() => _ForecastPageScreenState();
}

class _ForecastPageScreenState extends State<ForecastPageScreen> {
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
              Language.get('Forecast'),
              style: const TextStyle(
                color: style_0,
                fontFamily: 'Space Grotesk',
                fontWeight: FontWeight.w500,
                fontSize: 24,
              ),
            ),
          ),
          GestureDetector(
            onTap: () => Navigator.push(context, MaterialPageRoute(builder: (context) => ForecastDetailPageScreen())),
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
                    Language.get('72 Hour Forecast'),
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
