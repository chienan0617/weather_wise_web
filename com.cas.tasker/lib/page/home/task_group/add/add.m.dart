import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/task_group/add/bottom_bar.dart';
import 'package:tasker/page/home/task_group/add/content.dart';

class TaskGroupAddScreen extends StatefulWidget {
  final void Function() refresh;

  const TaskGroupAddScreen({super.key, required this.refresh});

  @override
  State<TaskGroupAddScreen> createState() => _TaskGroupAddScreenState();
}

class _TaskGroupAddScreenState extends State<TaskGroupAddScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('', style: TextStyle(color: style_0, fontSize: 28)),
        leading: IconButton(
          onPressed: () {
            Navigator.pop(context);
            widget.refresh();
          },
          icon: const Icon(Icons.arrow_back, color: style_0, size: 28),
        ),
      ),
      body: Column(
        children: [
          const Expanded(child: AddContent()),
          TaskGroupAddBottomBar(refresh: widget.refresh),
        ],
      )
    );
  }
}
