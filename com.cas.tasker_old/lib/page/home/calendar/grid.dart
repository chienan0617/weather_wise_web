import 'package:flutter/material.dart';
import 'package:tasker/util/theme.dart';

class CalendarGrid extends StatefulWidget {
  final int year, month;
  final List<List<int>> date;

  const CalendarGrid({
    super.key,
    required this.year,
    required this.month,
    required this.date,
  });

  @override
  State<CalendarGrid> createState() => _CalendarGridState();
}

class _CalendarGridState extends State<CalendarGrid> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 20),
      child: LayoutBuilder(
        builder: (context, cons) {
          return Row(
            children: List.generate(7, (int week) {
              return Column(
                children: List.generate(6, (int weekday) {
                  return CalendarCell(
                    year: widget.year,
                    month: widget.month,
                    week: week,
                    weekday: weekday,
                    cons: cons,
                    date: widget.date,
                  );
                }),
              );
            })
          );
        }
      ),
    );
  }
}

class CalendarCell extends StatefulWidget {
  final int year, month, week, weekday;
  final List<List<int>> date;
  final BoxConstraints cons;

  const CalendarCell({
    super.key,
    required this.year,
    required this.month,
    required this.week,
    required this.weekday,
    required this.cons,
    required this.date,
  });

  @override
  State<CalendarCell> createState() => _CalendarCellState();
}

class _CalendarCellState extends State<CalendarCell> {

  @override
  Widget build(BuildContext context) {
    Size size = Size(widget.cons.maxWidth / 7, widget.cons.maxHeight / 6);
    double taskHeight = (widget.cons.maxHeight -6) / 6;
    List<List<int>> date = widget.date;

    return Container(
      decoration: BoxDecoration(
        border: Border.symmetric(
          horizontal: BorderSide(color: style_16p, width: 0.5)
        )
      ),
      width: size.width, height: size.height,
      child: Column(
        children: [
          // day
          SizedBox(
            // margin: const EdgeInsets.only(top: -0),
            height: taskHeight,
            child: Text(
              date[widget.weekday][widget.week].toString(),
              style: TextStyle(
                color: style_8p,
                fontSize: 11
              ),
              softWrap: false,
            ),
          ),

          // task
          Column(
            children: List.generate(length, generator),
          )
        ],
      )
    );
  }
}
