import 'package:flutter/material.dart';
import 'package:weather/page/home/home.m.dart';

class CityEditPageScreen extends StatefulWidget {
  const CityEditPageScreen({super.key});

  @override
  State<CityEditPageScreen> createState() => _CityEditPageScreenState();
}

class _CityEditPageScreenState extends State<CityEditPageScreen> {
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