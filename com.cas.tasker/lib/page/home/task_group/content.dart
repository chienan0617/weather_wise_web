import 'package:flutter/material.dart';
import 'package:tasker/func/home/task_group/task_group.api.dart';
import 'package:tasker/page/home/task_group/card.mod.dart';
import 'package:tasker/util/data/type.dart';

class TaskGroupContent extends StatefulWidget {
  const TaskGroupContent({super.key});

  @override
  State<TaskGroupContent> createState() => _TaskGroupContentState();
}

class _TaskGroupContentState extends State<TaskGroupContent> {
  @override
  Widget build(BuildContext context) {
    List<TaskGroup> taskGroups = TaskGroupApi.getAllTaskGroup();
    print("reGet taskGroup");

    return Column(
      children: List.generate(
        taskGroups.length,
        (int index) => TaskGroupCard(taskGroup: taskGroups[index])
      ),
    );
  }
}
