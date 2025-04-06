import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/flexible.util.dart';

class CalendarGrid extends StatefulWidget {
  final BoxConstraints constraints;
  final int year, month;
  final Map data;

  const CalendarGrid({
    super.key, 
    required this.constraints,
    required this.month,
    required this.year,
    required this.data,
  });

  @override
  State<CalendarGrid> createState() => _CalendarGridState();
}

class _CalendarGridState extends State<CalendarGrid> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    var cellHeight = (widget.constraints.maxHeight - 40) / 6; // * - (week bar height + 10)
    var cellWidth = (widget.constraints.maxWidth - 20) / 7; // * - 20 bottom
    var taskHeight = (cellHeight) / 5 -1 -0.5; // * -1 (margin) , -0.5 (bottom)
    var data = widget.data;

    return FlexWidget.flex(
      any: Container(
        margin: EdgeInsets.symmetric(horizontal: 10),
        child: Column(
          children: List.generate(6, (int week) {
            return Row(
              children: List.generate(7, (int day) {
                return Container(
                  height: cellHeight,
                  width: cellWidth,
                  decoration: BoxDecoration(
                    border: Border.symmetric(
                      horizontal: BorderSide(
                        color: style(),
                        width: 0.5,
                      )
                    ),
                  ),
                  child: Column(
                    children: [
                      SizedBox(
                        height: taskHeight,
                        child: text((data["dateMonth"][week][day]).toString(), size: 12),
                      ),
                      Column(
                        children: List.generate((data['task'][week][day] as Map).length, (int index) {
                          return Container(
                            padding: EdgeInsets.symmetric(horizontal: 1.25),
                            margin: EdgeInsets.symmetric(vertical: 0.5),
                            height: taskHeight,
                            width: cellWidth - 2, // * margin
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(2.5),
                              color: primary()
                            ),
                            child: Text(
                              "$week, $day",
                              style: TextStyle(
                                color: primaryStyle(),
                                fontSize: 12,
                              ),
                            ),
                          );
                        }),
                      ),
                    ],
                  ),
                );
              }),
            );
          }),
        ),
      ),
    );
  }
}
