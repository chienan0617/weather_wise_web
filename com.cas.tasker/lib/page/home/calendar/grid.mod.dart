import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/data/type.dart';
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
                return DateCell(
                  cellHeight: cellHeight,
                  cellWidth: cellWidth,
                  taskHeight: taskHeight,
                  week: week,
                  day: day,
                  data: data,
                );
              }),
            );
          }),
        ),
      ),
    );
  }
}

class DateCell extends StatefulWidget {
  final double cellHeight, cellWidth, taskHeight;
  final int week, day;
  final Map data;

  const DateCell({
    super.key,
    required this.cellHeight,
    required this.cellWidth,
    required this.taskHeight,
    required this.week,
    required this.day,
    required this.data,
  });

  @override
  State<DateCell> createState() => _DateCellState();
}

class _DateCellState extends State<DateCell> {
  @override
  Widget build(BuildContext context) {
    Map data = widget.data;
    var week = widget.week;
    var day = widget.day;

    return Container(
      height: widget.cellHeight,
      width: widget.cellWidth,
      decoration: BoxDecoration(
        border: Border.symmetric(
          horizontal: BorderSide(
            color: style(),
            width: 0.25,
          )
        ),
      ),
      child: Column(
        children: [
          SizedBox(
            height: widget.taskHeight,
            child: text((data["dateMonth"][week][day]).toString(), size: 12),
          ),
          Column(
            children: List.generate(
              (data['task'][week][day]).length, (int index) {
              return Container(
                padding: EdgeInsets.symmetric(horizontal: 1.25),
                margin: EdgeInsets.symmetric(vertical: 0.5),
                height: widget.taskHeight,
                width: widget.cellWidth - 2, // * margin
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(2.5),
                  color: primary()
                ),
                child: Text(
                  ((data['task'][week][day]) as List<Task>)[index].title,
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
  }
}