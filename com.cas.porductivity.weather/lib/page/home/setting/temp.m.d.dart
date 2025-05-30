
import 'package:flutter/material.dart';
import 'package:weather/util/data/data.dart';
import 'package:weather/util/language.dart';
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
          'Debug Console',
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
                    Switch(value: Data.app.get<bool>('language'), onChanged:(b) => Language.changeIndex(b, context))
                    // const Text(
                    //   '基本資訊',
                    //   style: TextStyle(
                    //     color: Color.fromARGB(255, 255, 255, 255),
                    //     // fontFamily: 'Space Grotesk',
                    //     fontSize: 24,
                    //   ),
                    // ),
                    // // Text(
                    // //   CurrentWeatherApi.weather.toString(),
                    // //   style: const TextStyle(
                    // //     color: Color.fromARGB(255, 255, 255, 255),
                    // //     // fontFamily: 'Space Grotesk',
                    // //   ),
                    // // ),
                    // const Text(
                    //   '天氣資訊對照',
                    //   style: TextStyle(
                    //     color: Color.fromARGB(255, 255, 255, 255),
                    //     // fontFamily: 'Space Grotesk',
                    //     fontSize: 24,
                    //   ),
                    // ),
                    // Text(
                    //   prettyJson,
                    //   style: const TextStyle(
                    //     color: Color.fromARGB(255, 255, 255, 255),
                    //     // fontFamily: 'Space Grotesk',
                    //   ),
                    // ),
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
// final Map<String, dynamic> stringKeyMap = weatherData.map(
//   (int key, List<dynamic> value) => MapEntry(key.toString(), value),
// );

// 2. 使用帶縮排的 JsonEncoder
// final prettyJson = const JsonEncoder.withIndent('  ')
    // .convert(stringKeyMap);
