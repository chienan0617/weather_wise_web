import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/customize.util.dart';

class CalendarWeek extends StatefulWidget {
  const CalendarWeek({super.key});

  @override
  State<CalendarWeek> createState() => _CalendarWeekState();
}

class _CalendarWeekState extends State<CalendarWeek> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Container(
      // width: (size.width - 20) / 7,
      margin: const EdgeInsets.symmetric(horizontal: 10),
      child: Row(
        children: List.generate(
          DateTime.daysPerWeek, (int index) {
            return Container(
              decoration: const BoxDecoration(
                border: Border(bottom: BorderSide(color: style_8, width: 0.5))
              ),
              alignment: Alignment.center,
              width: (size.width - 20) / 7, // * - margin width * 2
              height: 30,
              child: Text(com('week_ab')[index], style: const TextStyle(fontSize: 15, color: style_0),),
            );
          }
        ),
      ),
    );
  }
}

