import 'package:flutter/material.dart';
import 'package:tasker/model/model.dart';
import 'package:tasker/util/theme.dart';

class CalendarWeekBar extends StatelessWidget {
  const CalendarWeekBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 20),
      child: Row(
        children: List.generate(DateTime.daysPerWeek, (int index) {
          return Container(
            padding: const EdgeInsets.symmetric(horizontal: 10),
            child: Text(
              Model.calendarRender.getWeekName(index),
              style: TextStyle(
                color: style_16p,
                fontSize: 20
              ),
            ),
          );
        })
      ),
    );
  }
}
