import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/calendar_generator.api.dart';
import 'package:tasker/func/home/calendar/calendar_io.api.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/data/type.dart';

void showDateBottomSheet(
  BuildContext context,
  Map taskInfo,
  int week,
  int day,
  Function reGet,
) {
  reGet() => CalendarGeneratorApi.getData(taskInfo['date'][0], taskInfo['date'][1]);
  Map data = reGet();
  reGetBool() => CalendarGeneratorApi.getChecked(data, week, day);
  Size size = MediaQuery.of(context).size;
  List<bool> gridChecked = reGetBool();

  showModalBottomSheet(
    context: context,
    isScrollControlled: true, // 允許自定義高度
    backgroundColor: style(n: true, op: false, os: 0), // 可選：使背景透明
    builder: (context) {
      Widget unfinished() =>
        Row(
        children: [
          Container(
            margin: const EdgeInsets.only(left: 20),
            child: Text(
              '待完成',
              style: TextStyle(color: style(op: false, os: 128), fontSize: 16),
            ),
          ),
          Expanded(child: divider(w: 15)),
        ],
      );

      Widget finished() =>
        Row(
        children: [
          Container(
            margin: const EdgeInsets.only(left: 20),
            child: Text(
              '已完成',
              style: TextStyle(color: style(op: false, os: 128), fontSize: 16),
            ),
          ),
          Expanded(child: divider(w: 15)),
        ],
      );

      Widget stateBar() =>
        Container(
          margin: edge(v: 15),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(7.5),
            color: style(),
          ),
          width: size.width * 0.25,
          height: 7.5,
        );

      return StatefulBuilder(
        builder: (BuildContext context, StateSetter setModalState) {
          return DraggableScrollableSheet(
            initialChildSize: 0.75, // 初始高度為螢幕的50%
            minChildSize: 0.5, // 最小高度為螢幕的50%
            maxChildSize: 1.0, // 最大高度為螢幕的100%
            expand: false, // 可選：控制是否展開至最大高度
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
                      stateBar(),
                      unfinished(),

                      Column(
                        children: List.generate(data['task'][week][day].length, (
                          int index,
                        ) {
                          return (!data['task'][week][day][index].done) ?CheckboxListTile(
                            subtitle: IntrinsicHeight(
                              child: Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Container(
                                    width: 8.5, height: 8.5,
                                    margin: const EdgeInsets.only(right: 5),
                                    decoration: BoxDecoration(
                                      shape: BoxShape.circle,
                                      color: CalendarGeneratorApi.getGroupTaskColor(
                                        data['task'][week][day][index].taskGroupName,
                                      ),
                                    ),
                                  ),
                                  text(
                                    data['task'][week][day][index].taskGroupName,
                                    size: 14, os: -64
                                  ),
                                ],
                              ),
                            ),
                            onFocusChange: (value) {
                              // print("object");
                            },
                            value: gridChecked[index],
                            onChanged: (bool? value) {
                              data['task'][week][day][index].done = value;
                              CalendarIoApi.updateNewInfo(
                                data['date'][0],
                                data['date'][1],
                                data['dateMonth'][week][day],
                                data['task'][week][day][index].index,
                                (data['task'][week][day][index]) as Task,
                              );
                              data = reGet();
                              gridChecked = reGetBool();
                              setModalState(() {});
                            },
                            controlAffinity: ListTileControlAffinity.leading,
                            activeColor: Color(data['task'][week][day][index].color),
                            side: BorderSide(color: style()),
                            contentPadding: edge(h: 25),
                            title: GestureDetector(
                              onTap: () {},
                              child: Text(
                                data['task'][week][day][index].title,
                                maxLines: 1,
                                style: TextStyle(
                                  color: style(),
                                  fontSize: 20,
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                            ),
                            secondary: IconButton(
                              onPressed: () {
                                // print('pressed');
                              },
                              icon: icon(Icons.arrow_forward_ios, size: 16),
                            ),
                          ) : const SizedBox();
                        }),
                      ),

                      finished(),

                      Column(
                        children: List.generate(data['task'][week][day].length, (
                          int index,
                        ) {
                          return (data['task'][week][day][index].done) ?CheckboxListTile(
                            subtitle: IntrinsicHeight(
                              child: Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Container(
                                    width: 7.5, height: 7.5,
                                    margin: const EdgeInsets.only(right: 5),
                                    decoration: BoxDecoration(
                                      shape: BoxShape.circle,
                                      color: CalendarGeneratorApi.getGroupTaskColor(
                                        data['task'][week][day][index].taskGroupName,
                                      ),
                                    ),
                                  ),
                                  text(
                                    data['task'][week][day][index].taskGroupName,
                                    size: 13, os: -128
                                  ),
                                ],
                              ),
                            ),
                            onFocusChange: (value) {
                              // print("object");
                            },
                            value: gridChecked[index],
                            onChanged: (bool? value) {
                              data['task'][week][day][index].done = value;
                              CalendarIoApi.updateNewInfo(
                                data['date'][0],
                                data['date'][1],
                                data['dateMonth'][week][day],
                                data['task'][week][day][index].index,
                                (data['task'][week][day][index]) as Task,
                              );
                              data = reGet();
                              gridChecked = reGetBool();
                              setModalState(() {});
                            },
                            controlAffinity: ListTileControlAffinity.leading,
                            activeColor: Color(data['task'][week][day][index].color),
                            side: BorderSide(color: style()),
                            contentPadding: edge(h: 25),
                            title: GestureDetector(
                              onTap: () {},
                              child: Text(
                                data['task'][week][day][index].title,
                                maxLines: 1,
                                style: TextStyle(
                                  color: style(os: -128),
                                  fontSize: 20,
                                  fontWeight: FontWeight.w500,
                                  decoration: TextDecoration.lineThrough,
                                  decorationColor: style(os: -128),
                                ),
                              ),
                            ),
                            secondary: IconButton(
                              onPressed: () {
                                print('pressed');
                              },
                              icon: icon(Icons.arrow_forward_ios, size: 16),
                            ),
                          ) : const SizedBox();
                        }),
                      ),
                    ],
                  ),
                ),
              );
            },
          );
        },
      );
    },
  );
}
