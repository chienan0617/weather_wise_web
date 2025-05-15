import 'package:flutter/material.dart';
import 'package:tasker/page/home/task_group/card.mod.dart';
import 'package:tasker/util/data/data.dart';

class TaskGroupContent extends StatefulWidget {
  const TaskGroupContent({super.key});

  @override
  State<TaskGroupContent> createState() => _TaskGroupContentState();
}

class _TaskGroupContentState extends State<TaskGroupContent> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TaskGroupCard(taskGroup: Data.taskGroup.getTaskGroup('default'))
      ],
    );
  }
}
