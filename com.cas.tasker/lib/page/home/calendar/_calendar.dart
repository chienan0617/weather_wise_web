import 'package:flutter/material.dart';
import 'package:tasker/page/home/calendar/week_bar.dart';
import 'package:tasker/util/theme.dart';

class CalendarPage extends StatefulWidget {
  const CalendarPage({super.key});

  @override
  State<CalendarPage> createState() => _CalendarPageState();
}

class _CalendarPageState extends State<CalendarPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: style_16,
      body: Column(
        children: [
          CalendarWeekBar()
        ],
      ),
    );
  }
}
