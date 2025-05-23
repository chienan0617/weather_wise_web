import 'package:flutter/material.dart';
import 'package:weather/func/init.dart';
import 'package:weather/page/home/home.m.dart';
import 'package:weather/page/start/start.m.dart';

class Pages extends StatefulWidget {
  const Pages({super.key});

  @override
  State<Pages> createState() => PagesState();
}

class PagesState extends State<Pages> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: SafeArea(
        child: InitState.tutorialBefore
          ? HomePageScreen()
          : StartPageScreen(),
      ),
    );
  }
}
