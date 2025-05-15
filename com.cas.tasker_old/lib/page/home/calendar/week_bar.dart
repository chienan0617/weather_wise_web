import 'package:flutter/material.dart';
import 'package:tasker/model/model.dart';
import 'package:tasker/util/theme.dart';

class CalendarWeekBar extends StatelessWidget {
  const CalendarWeekBar({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return LayoutBuilder(
      builder: (context, cons) {
        return Container(
          margin: const EdgeInsets.symmetric(horizontal: 20),
          child: Row(
            children: List.generate(DateTime.daysPerWeek, (int index) {
              return Container(
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  border: Border.symmetric(
                    horizontal: BorderSide(color: style_64p)
                  )
                ),
                width: (cons.maxWidth - 40) / 7,
                height: 25,
                child: Text(
                  Model.calendarRender.getWeekName(index),
                  style: TextStyle(
                    color: style_16p,
                    fontSize: 12
                  ),
                ),
              );
            })
          ),
        );
      }
    );
  }
}
