import 'package:flutter/material.dart';
import 'package:weather/page/home/today_info.dart';

class HomePageScreen extends StatefulWidget {
  const HomePageScreen({super.key});

  @override
  State<HomePageScreen> createState() => _HomePageScreenState();
}

class _HomePageScreenState extends State<HomePageScreen> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: const Color(0xFF1C1121),
        // appBar: AppBar(
        //   backgroundColor: const Color(0xFF1C1121),
        // ),
        body: const Column(
          children: [
            TodayInformation()
          ],
        )
      ),
    );
  }
}
