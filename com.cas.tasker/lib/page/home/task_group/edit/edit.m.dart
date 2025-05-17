import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/task_group/edit/content.dart';
import 'package:tasker/page/home/task_group/edit/title_bar.dart';
import 'package:tasker/page/home/task_group/edit/top_bar.dart';
import 'package:tasker/util/data/type.dart';

class TaskGroupEditScreen extends StatefulWidget {
  final TaskGroup taskGroup;

  const TaskGroupEditScreen({super.key, required this.taskGroup});

  @override
  State<TaskGroupEditScreen> createState() => _TaskGroupEditScreenState();
}

class _TaskGroupEditScreenState extends State<TaskGroupEditScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: style_n8p,
        leading: IconButton(
          onPressed: () => Navigator.pop(context),
          icon: const Icon(Icons.arrow_back, color: style_0, size: 28),
        ),
      ),
      body: Column(
        children: [
          EditTopBar(taskGroup: widget.taskGroup),
          const SizedBox(height: 10),
          EditTitleBar(taskGroup: widget.taskGroup),
          const SizedBox(height: 10),
          // const Divider(indent: 15, endIndent: 15, thickness: 0.25, height: 25),
          Expanded(child: EditContentItem(taskGroup: widget.taskGroup)),
          // const EditBottomBar(),
        ],
      ),
    );
  }
}
