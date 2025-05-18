import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/add/edit_content.ctrl.dart';
import 'package:tasker/func/home/calendar/add/task_io.api.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/customize.util.dart';
import 'package:tasker/util/guide.util.dart';

class AddBottomBar extends StatefulWidget {
  const AddBottomBar({super.key});

  @override
  State<AddBottomBar> createState() => _AddBottomBarState();
}

class _AddBottomBarState extends State<AddBottomBar> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Container(
      decoration: BoxDecoration(
        color: style_n0p
      ),
      height: size.height * 0.075,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          section(Icons.undo, () {}),
          section(Icons.redo, () {}),
          const SizedBox(),
          const SizedBox(),
          section(Icons.format_color_text, () {}),
          section(Icons.text_fields, () {}),
          section(
            Icons.check, () {
              Guide.calendar.toCalendarPage(context);
              TaskIoApi.store.storeNewTask(
                AddTask.dateInput.pickedTime.year,
                AddTask.dateInput.pickedTime.month,
                AddTask.dateInput.pickedTime.day,
                title: AddTask.titleInput.controller.text,
                subtitle: notYetEnable,
                type: AddTask.type.taskType,
                color: AddTask.taskGroup.getColor().toARGB32(),
                content: AddTask.contentInput.controller.text,
                taskGroupName: AddTask.taskGroup.getTaskGroup().name
              );
            }
          )
        ],
      ),
    );
  }

  Widget section(
    IconData icon, void Function() onPressed
  ) {
    return IconButton(
      onPressed: onPressed,
      icon: Icon(icon, size: 24, color: style_0)
    );
  }
}

// N, M, K = list(map(int, input().split()))
// Q = [list(map(int, input().split())) for _ in range(N)]
// C = [list(map(int, input().split())) for _ in range(K)]

// # print(N, M, K, Q, C, end = "\n")