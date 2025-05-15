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
      height: size.height * 0.05,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.undo, size: 20, color: style_0)
          ),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.redo, size: 20, color: style_0)
          ),
          const SizedBox(),
          const SizedBox(),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.format_color_text, size: 20, color: style_0)
          ),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.text_fields, size: 20, color: style_0)
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
                color: AddTask.taskGroup.getColor().toARGB32(),
                content: AddTask.contentInput.controller.text,
                taskGroupName: 'default'
              );
            },
            // onPressed: () => Navigator.pop(context),
            icon: const Icon(Icons.check, size: 20, color: style_0)
          )
        ],
      ),
    );
  }
}
