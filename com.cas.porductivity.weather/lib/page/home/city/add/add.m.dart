import 'package:flutter/material.dart';
import 'package:weather/page/home/home.m.dart';

class CityAddPageScreen extends StatefulWidget {
  const CityAddPageScreen({super.key});

  @override
  State<CityAddPageScreen> createState() => _CityAddPageScreenState();
}

class _CityAddPageScreenState extends State<CityAddPageScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1933),
      ),
      floatingActionButton: FloatingActionButton(onPressed: () {
        Navigator.pop(context);
        Navigator.push(context, MaterialPageRoute(builder: (context) => HomePageScreen()));
      }),
    );
  }
}