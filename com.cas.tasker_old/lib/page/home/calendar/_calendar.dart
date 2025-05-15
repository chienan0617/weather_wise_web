import 'package:flutter/material.dart';
import 'package:tasker/model/model.dart';
import 'package:tasker/page/home/calendar/grid.dart';
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
          CalendarWeekBar(),
          Expanded(
            child: CalendarGrid(year: 2025, month: 4, date: Model.calendarRender.getMonthData(2025, 4)),
          ),
        ],
      ),
    );
  }
}
