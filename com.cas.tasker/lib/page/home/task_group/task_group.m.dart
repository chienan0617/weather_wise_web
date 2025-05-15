import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/task_group/card.mod.dart';
import 'package:tasker/page/home/task_group/content.dart';

class TaskGroupScreen extends StatefulWidget {
  const TaskGroupScreen({super.key});

  @override
  State<TaskGroupScreen> createState() => _TaskGroupScreenState();
}

class _TaskGroupScreenState extends State<TaskGroupScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Icon(Icons.add, color: primaryStyle()),
      ),
      appBar: AppBar(),
      body: Column(
        children: [
          TaskGroupContent()
        ],
      ),
    );
  }
}
