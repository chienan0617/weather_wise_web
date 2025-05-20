import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/calendar_generator.api.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/calendar/modal.mod.dart';
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
    var cellHeight =
        (widget.constraints.maxHeight - 40) / 6; // * - (week bar height + 10)
    var cellWidth = (widget.constraints.maxWidth - 20) / 7; // * - 20 bottom
    var taskHeight =
        (cellHeight) / 6 - 1 - 0.5; // * -1 (margin) , -0.5 (bottom)
    var data = widget.data;

    return FlexWidget.flex(
      any: Container(
        margin: const EdgeInsets.symmetric(horizontal: 10),
        child: Column(
          children: List.generate(6, (int week) {
            return Row(
              children: List.generate(7, (int day) {
                return GestureDetector(
                  onTap: () => showDateBottomSheet(
                    context, data, week, day,
                    () => CalendarGeneratorApi.getChecked(data, week, day),
                  ),
                  child: DateCell(
                    cellHeight: cellHeight,
                    cellWidth: cellWidth,
                    taskHeight: taskHeight,
                    week: week,
                    day: day,
                    data: data,
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
    int week = widget.week;
    int day = widget.day;
    (int, bool, int) cellCount = CalendarGeneratorApi.getGridMaxCount(
      (data['task'][week][day]).length,
    );

    return Container(
      height: widget.cellHeight,
      width: widget.cellWidth,
      decoration: BoxDecoration(border: Border.symmetric(horizontal: BorderSide(color: style_0, width: 0.25))),
      child: Column(
        children: [
          SizedBox(
            height: widget.taskHeight + 2.5,
            child: Text(
              (data["dateMonth"][week][day]).toString(),
              style: TextStyle(
                fontSize: 12,
                color: CalendarGeneratorApi.getTheDayColor(
                  [...data['date'], data['dateMonth'][week][day]], week
                )
              )
            ),
          ),
          Column(
            children: List.generate(cellCount.$1, (int index) {
              return Container(
                padding: const EdgeInsets.symmetric(horizontal: 1.25),
                margin: const EdgeInsets.symmetric(vertical: 0.5),
                height: widget.taskHeight,
                width: widget.cellWidth - 2, // * margin
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(2.5),
                  // color: Color(data['task'][week][day][index].color),
                  color: CalendarGeneratorApi.getTheDayTaskColor(
                    [...data['date'], data['dateMonth'][week][day]], week, Color(data['task'][week][day][index].color)
                  ),
                ),
                child: Padding(
                  padding: const EdgeInsets.only(left: 1, bottom: 1),
                  child: Text(
                    data['task'][week][day][index].title,
                    style: TextStyle(
                      color: decideStyle(
                        Color(data['task'][week][day][index].color),
                      ),
                      fontSize: 10.75,
                    ),
                    maxLines: 1,
                    softWrap: false,
                    overflow: TextOverflow.clip,
                  ),
                ),
              );
            }),
          ),
          cellCount.$2
              ? SizedBox(
                height: widget.taskHeight,
                child: Text(
                  '${cellCount.$3} more',
                  style: const TextStyle(fontSize: 10.75, color: style_64),
                  softWrap: false,
                ),
              )
              : const SizedBox(),
        ],
      ),
    );
  }
}


