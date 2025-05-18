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
    backgroundColor: style_n0p, // 可選：使背景透明
    builder: (context) {
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
                decoration: const BoxDecoration(
                  color: style_n8p,
                  borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
                ),
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      StateBar(width: size.width),
                      DateBar(taskInfo: taskInfo, week: week, day: day),
                      Finishing(text: '未完成', taskInfo: taskInfo, week: week, day: day, opposite: false,),
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
                                    decoration: BoxDecoration(
                                      shape: BoxShape.circle,
                                      color: CalendarGeneratorApi.getGroupTaskColor(
                                        data['task'][week][day][index].taskGroupName,
                                      ),
                                    ),
                                  ),
                                  const SizedBox(width: 5),
                                  Text(
                                    data['task'][week][day][index].taskGroupName,
                                    style: TextStyle(
                                      fontSize: 14, color: style_32,
                                    ),
                                    softWrap: false,
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
                            side: const BorderSide(color: style_0),
                            contentPadding: const EdgeInsets.symmetric(horizontal: 25),
                            title: GestureDetector(
                              onTap: () {},
                              child: Text(
                                data['task'][week][day][index].title,
                                maxLines: 1,
                                style: const TextStyle(
                                  color: style_0,
                                  fontSize: 20,
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                            ),
                            secondary: IconButton(
                              onPressed: () {
                                // print('pressed');
                              },
                              icon: const Icon(Icons.arrow_forward_ios, size: 16, color: style_0),
                            ),
                          ) : const SizedBox();
                        }),
                      ),

                      Finishing(text: '已完成', taskInfo: taskInfo, week: week, day: day, opposite: true,),

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
                                  Text(
                                    data['task'][week][day][index].taskGroupName,
                                    style: const TextStyle(
                                      fontSize: 13, color: style_128
                                    ),
                                    softWrap: false,
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
                            activeColor: CalendarGeneratorApi.getGroupTaskColor(
                              data['task'][week][day][index].taskGroupName
                            ),//Color(data['task'][week][day][index].color),
                            side: const BorderSide(color: style_0),
                            contentPadding: const EdgeInsets.symmetric(horizontal: 25),
                            title: GestureDetector(
                              onTap: () {},
                              child: Text(
                                data['task'][week][day][index].title,
                                maxLines: 1,
                                style: const TextStyle(
                                  color: style_128,
                                  fontSize: 20,
                                  fontWeight: FontWeight.w500,
                                  decoration: TextDecoration.lineThrough,
                                  decorationColor: style_128,
                                ),
                              ),
                            ),
                            secondary: IconButton(
                              onPressed: () {
                                print('pressed');
                              },
                              icon: const Icon(Icons.arrow_forward_ios, size: 16, color: style_0,),
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

class Finishing extends StatelessWidget {
  final String text;
  final Map taskInfo;
  final int week, day;
  final bool opposite;

  const Finishing({
    super.key,
    required this.text,
    required this.taskInfo,
    required this.week,
    required this.day,
    required this.opposite,
  });

  @override
  Widget build(BuildContext context) {
    return
    // (taskInfo['task'][week][day] as List<Task>).where(
    //   (task) => opposite ? task.done == true : !task.done == true
    // ).toList().isEmpty ?
    Row(
      children: [
        SizedBox(width: 20),
        Text(text, style: TextStyle(color: style_128, fontSize: 16)),
        SizedBox(width: 20),
        Expanded(child: Divider(thickness: 0.5,)),
        SizedBox(width: 20)
      ],
    );// : const SizedBox();
  }
}

class StateBar extends StatelessWidget {
  final double width;
  const StateBar({super.key, required this.width});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 15),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(7.5),
        color: style_0,
      ),
      width: width * 0.25,
      height: 7.5,
    );
  }
}

class DateBar extends StatelessWidget {
  final Map taskInfo;
  final int week, day;
  const DateBar({
    super.key,
    required this.taskInfo,
    required this.week,
    required this.day
  });

  @override
  Widget build(BuildContext context) {
    (int, int, int) date = CalendarIoApi.checkDateIsCorrect(
      taskInfo['date'][0],
      taskInfo['date'][1],
      taskInfo['dateMonth'][week][day]
    );

    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      alignment: Alignment.centerLeft,
      child: Text(
        '${date.$2.toString().padLeft(2, '0')}-${date.$3.toString().padLeft(2, '0')}, ${date.$1}',
        style: const TextStyle(
          fontSize: 20, color: style_0, fontWeight: FontWeight.w500
        ),
      ),
    );
  }
}
