import 'package:flutter/material.dart';
import 'package:tasker/func/home/task_group/task_group.api.dart';
import 'package:tasker/library.util.dart';

class TaskGroupAddBottomBar extends StatefulWidget {
  const TaskGroupAddBottomBar({super.key});

  @override
  State<TaskGroupAddBottomBar> createState() => _TaskGroupAddBottomBarState();
}

class _TaskGroupAddBottomBarState extends State<TaskGroupAddBottomBar> {
  @override
  Widget build(BuildContext context) {
    Widget section(
      void Function() onPressed, IconData icon
    ) {
      return IconButton(
        onPressed: onPressed,
        icon: Icon(icon, size: 28, color: style_0),
      );
    }

    return Container(
      padding: const EdgeInsets.only(right: 15),
      height: MediaQuery.of(context).size.height * 0.075,
      decoration: BoxDecoration(
        color: style_n8p
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          section(
            () {
              TaskGroupApi.storeAddNewTaskGroup();
              Navigator.pop(context);
            },
            Icons.check
          )
        ],
      ),
    );
  }
}
