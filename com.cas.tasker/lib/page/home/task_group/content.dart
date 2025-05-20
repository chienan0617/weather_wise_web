import 'package:flutter/material.dart';
import 'package:tasker/func/home/task_group/task_group.api.dart';
import 'package:tasker/page/home/task_group/card.mod.dart';
import 'package:tasker/util/data/type.dart';

class TaskGroupContent extends StatefulWidget {
  final void Function() refresh;

  const TaskGroupContent({super.key, required this.refresh});

  @override
  State<TaskGroupContent> createState() => _TaskGroupContentState();
}

class _TaskGroupContentState extends State<TaskGroupContent> {
  @override
  Widget build(BuildContext context) {
    List<TaskGroup> taskGroups = TaskGroupApi.getAllTaskGroup();
    return SingleChildScrollView(
      child: Column(
        children: List.generate(
          taskGroups.length,
          (int index) => TaskGroupCard(
            taskGroup: taskGroups[index],
            refresh: widget.refresh,
          )
        ),
      ),
    );
  }
}
