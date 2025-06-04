import 'package:weather_wise/func/tutor.dart';
import 'package:weather_wise/page/home/home.m.dart';
import 'package:weather_wise/util/annotation.dart';
import 'package:weather_wise/page/tutor/tutor.m.dart';
import 'package:flutter/material.dart';

@page class PageInitial extends StatefulWidget {
  const PageInitial({super.key});

  @override
  State<PageInitial> createState() => _PageInitialState();
}

class _PageInitialState extends State<PageInitial> {
  @override
  Widget build(BuildContext context) {
    return Tutor.checkTutored()
      ? const HomePage()
      : const TutorPage();
  }
}