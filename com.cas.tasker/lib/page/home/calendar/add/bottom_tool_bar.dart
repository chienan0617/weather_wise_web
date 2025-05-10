import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/add/edit_content.ctrl.dart';
import 'package:tasker/func/home/calendar/add/task_io.api.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/customize.util.dart';
import 'package:tasker/util/data/data.dart';
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
        color: style(n: true, os: 0, op: false)
      ),
      height: size.height * 0.05,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          IconButton(
            onPressed: () {},
            icon: icon(Icons.undo)
          ),
          IconButton(
            onPressed: () {},
            icon: icon(Icons.redo)
          ),
          const SizedBox(),
          const SizedBox(),
          IconButton(
            onPressed: () {},
            icon: icon(Icons.format_color_text)
          ),
          IconButton(
            onPressed: () {},
            icon: icon(Icons.text_fields)
          ),
          IconButton(
            onPressed: () {
              Guide.calendar.toCalendarPage(context);
              TaskIoApi.store.storeNewTask(
                AddTask.dateInput.pickedTime.year,
                AddTask.dateInput.pickedTime.month,
                AddTask.dateInput.pickedTime.day,
                title: AddTask.titleInput.controller.text,
                subtitle: notYetEnable,
                type: AddTask.type.taskType,
                color: AddTask.pickColor.getColor().toARGB32(),
                content: AddTask.contentInput.controller.text
              );

              // print(AddTask.dateInput.pickedTime.month);
              // print(AddTask.dateInput.pickedTime.day);
              // print(Data.task.getBox().toMap());
            },
            // onPressed: () => Navigator.pop(context),
            icon: icon(Icons.check)
          )
        ],
      ),
    );
  }
}
