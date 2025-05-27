import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/func/home/local/weather_current_io.api.dart';
import 'package:weather/util/library.dart';

class DebugConsole extends StatefulWidget {
  const DebugConsole({super.key});

  @override
  State<DebugConsole> createState() => _DebugConsoleState();
}

class _DebugConsoleState extends State<DebugConsole> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: style_0p,
      appBar: AppBar(
        backgroundColor: style_0p, //const Color(0xFF1C1933),
        title: const Text(
          'Weather Forecast',
          style: TextStyle(color: Colors.white),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              // 這裡包一層 Expanded
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    Text(
                      '基本資訊',
                      style: const TextStyle(
                        color: Color.fromARGB(255, 0, 255, 0),
                        // fontFamily: 'Space Grotesk',
                        fontSize: 24,
                      ),
                    ),
                    Text(
                      CurrentWeatherApi.weather.toChineseString(),
                      style: const TextStyle(
                        color: Color.fromARGB(255, 0, 255, 0),
                        // fontFamily: 'Space Grotesk',
                      ),
                    ),
                    Text(
                      '天氣資訊對照',
                      style: const TextStyle(
                        color: Color.fromARGB(255, 0, 255, 0),
                        // fontFamily: 'Space Grotesk',
                        fontSize: 24,
                      ),
                    ),
                    Text(
                      prettyJson,
                      style: const TextStyle(
                        color: Color.fromARGB(255, 0, 255, 0),
                        // fontFamily: 'Space Grotesk',
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
 // 1. Map<int, List> → Map<String, dynamic>
final Map<String, dynamic> stringKeyMap = weatherData.map(
  (int key, List<dynamic> value) => MapEntry(key.toString(), value),
);

// 2. 使用帶縮排的 JsonEncoder
final prettyJson = const JsonEncoder.withIndent('  ')
    .convert(stringKeyMap);