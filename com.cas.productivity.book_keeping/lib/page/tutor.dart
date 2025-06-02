import 'package:bookkeeping/func/tutor.dart';
import 'package:bookkeeping/page/home/home.m.dart';
import 'package:bookkeeping/util/annotation.dart';
import 'package:flutter/material.dart';

@page class TutorPage extends StatefulWidget {
  const TutorPage({super.key});

  @override
  State<TutorPage> createState() => _TutorPageState();
}

class _TutorPageState extends State<TutorPage> {
  @override
  Widget build(BuildContext context) {
    return Tutor.checkTutored()
      ? const HomePage()
      : const TutorPage();
  }
}