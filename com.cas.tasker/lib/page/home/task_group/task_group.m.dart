import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
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
      appBar: AppBar(
        leading: IconButton(
          onPressed: () {},
          icon: const Icon(
            Icons.menu, color: style_0, size: 28
          )
        ),
        actions: [
          IconButton(
            onPressed: () {},
            icon: const Icon(
              Icons.restart_alt, color: style_0, size: 28
            )
          ),
        ],
      ),
      body: Column(
        children: [
          TaskGroupContent()
        ],
      ),
    );
  }
}
