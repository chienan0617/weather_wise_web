import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/calendar_generator.api.dart';
import 'package:tasker/func/home/calendar/calendar_io.api.dart';
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
    var taskHeight = (cellHeight) / 6 -1 -0.5; // * -1 (margin) , -0.5 (bottom)
    var data = widget.data;

    return FlexWidget.flex(
      any: Container(
        margin: EdgeInsets.symmetric(horizontal: 10),
        child: Column(
          children: List.generate(6, (int week) {
            return Row(
              children: List.generate(7, (int day) {

                List<bool> gridChecked = CalendarGeneratorApi.getChecked(data, week, day);

                return GestureDetector(
                  onTap: () =>
                    showDateBottomSheet(
                      context, data, week, day, gridChecked,
                      () => CalendarGeneratorApi.getChecked(data, week, day)
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

    List<bool> gridChecked = CalendarGeneratorApi.getChecked(data, week, day);
    (int, bool, int) cellCount = CalendarGeneratorApi.getGridMaxCount(
      (data['task'][week][day]).length
    );

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
            height: widget.taskHeight + 2.5,
            child: text((data["dateMonth"][week][day]).toString(), size: 12),
          ),
          Column(
            children: List.generate(
              cellCount.$1,
              (int index) {
              return Container(
                padding: EdgeInsets.symmetric(horizontal: 1.25),
                margin: EdgeInsets.symmetric(vertical: 0.5),
                height: widget.taskHeight,
                width: widget.cellWidth - 2, // * margin
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(2.5),
                  color: Color(data['task'][week][day][index].color),
                ),
                child: Padding(
                  padding: EdgeInsets.only(left: 1, bottom: 1),
                  child: Text(
                    data['task'][week][day][index].title,
                    style: TextStyle(
                      color: decideStyle(Color(data['task'][week][day][index].color)),
                      fontSize: 10.75,
                    ),
                    maxLines: 1,
                    softWrap: false,
                    overflow: TextOverflow.clip,
                  )
                )
              );
            }),
          ),
          cellCount.$2 ? SizedBox(
            height: widget.taskHeight,
            child: Text(
              '${cellCount.$3} more',
              style: TextStyle(
                fontSize: 10.75,
                color: style(os: -64)
              ),
              softWrap: false,
            ),
          ) : const SizedBox()
        ],
      ),
    );
  }
}

void showDateBottomSheet(
  BuildContext context,
  Map data, int week, int day, List<bool> gridChecked,
  Function reGet,
) {
  // Map taskInfo = CalendarIoApi.getTaskByDate(year, month, day);
  Size size = MediaQuery.of(context).size;

  showModalBottomSheet(
    context: context,
    isScrollControlled: true, // 允許自定義高度
    backgroundColor: style(n: true, op: false, os: 0), // 可選：使背景透明
    builder: (context) {
      return DraggableScrollableSheet(
        initialChildSize: 0.75, // 初始高度為螢幕的50%
        minChildSize: 0.5,     // 最小高度為螢幕的50%
        maxChildSize: 1.0,     // 最大高度為螢幕的100%
        expand: false,         // 可選：控制是否展開至最大高度
        // snap: ,
        builder: (context, scrollController) {
          return Container(
            width: size.width,
            height: size.height,
            decoration: BoxDecoration(
              color: style(n: true, op: false, os: 0),
              borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
            ),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Container(
                    margin: edge(v: 15),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(7.5),
                      color: style()
                    ),
                    width: size.width * 0.25,
                    height: 7.5,
                  ),

                  Row(
                    children: [
                      Container(
                        margin: const EdgeInsets.only(left: 20),
                        child: Text(
                          '待完成',
                          style: TextStyle(
                            color: style(op: false, os: 128),
                            fontSize: 16,
                          ),
                        )
                      ),
                      Expanded(child: divider(w: 15))
                    ],
                  ),

                  Column(
                    children: List.generate(
                      data['task'][week][day].length, (int index) {
                        return CheckboxListTile(
                          value: gridChecked[index],
                          onChanged: (bool? value) {
                            CalendarIoApi.updateNewInfo(
                              data['date'][0],
                              data['date'][1],
                              data['dateMonth'][week][day],
                              data['task'][week][day][index].index,
                              (data['task'][week][day][index].done = value) as Task
                            );
                          },
                          controlAffinity: ListTileControlAffinity.leading,
                          activeColor: Color(data['task'][week][day][index].color),
                          // tileColor: style(),
                          // shape: RoundedRectangleBorder(
                          //   borderRadius: BorderRadius.circular(10.0),

                          // ),
                          side: BorderSide(
                            // color: Color(data['task'][week][day][index].color),
                            color: style()
                          ),
                          contentPadding: edge(h: 25),
                          title: Text(
                            data['task'][week][day][index].title,
                            style: TextStyle(
                              color: style(),
                              fontSize: 20,
                              fontWeight: FontWeight.w500
                            ),
                            maxLines: 1,
                          ),
                          secondary: Container(
                            decoration: BoxDecoration(
                              color: Color(data['task'][week][day][index].color),
                              // shape: BoxShape.circle,
                              borderRadius: BorderRadius.circular(5)
                            ),
                            width: 12.5, height: 12.5
                          ),
                          // secondary: text('7/10', os: -84, size: 12),
                          // child: text(data['task'][week][day][index].title)
                        );
                      }
                    ),
                  ),

                  Row(
                    children: [
                      Container(
                        margin: const EdgeInsets.only(left: 20),
                        child: Text(
                          '已完成',
                          style: TextStyle(
                            color: style(op: false, os: 128),
                            fontSize: 16,
                          ),
                        )
                      ),
                      Expanded(child: divider(w: 15))
                    ],
                  ),
                ],
              ),
            )
          );
        },
      );
    },
  );
}



class DateInfoBottomSheet extends StatefulWidget {
  final Map data;

  const DateInfoBottomSheet({
    super.key,
    required this.data,
  });

  @override
  State<DateInfoBottomSheet> createState() => _DateInfoBottomSheetState();
}

class _DateInfoBottomSheetState extends State<DateInfoBottomSheet> {
  @override
  Widget build(BuildContext context) {
    return Container(
      // child:
    );
  }
}
