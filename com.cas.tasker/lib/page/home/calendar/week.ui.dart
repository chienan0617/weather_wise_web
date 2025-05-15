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
      margin: EdgeInsets.symmetric(horizontal: 10),
      child: Row(
        children: List.generate(
          DateTime.daysPerWeek, (int index) {
            return Container(
              alignment: Alignment.center,
              decoration: BoxDecoration(
                // border: Border.all(color: Colors.amber)
              ),
              width: (size.width - 20) / 7, // * - margin width * 2
              height: 30,
              child: text(com('week_ab')[index], size: 15),
            );
          }
        ),
      ),
    );
  }
}

