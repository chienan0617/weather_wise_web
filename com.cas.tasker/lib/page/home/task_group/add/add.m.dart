import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';

class TaskGroupAddScreen extends StatefulWidget {
  const TaskGroupAddScreen({super.key});

  @override
  State<TaskGroupAddScreen> createState() => _TaskGroupAddScreenState();
}

class _TaskGroupAddScreenState extends State<TaskGroupAddScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('add task group', style: TextStyle(color: style_0, fontSize: 28)),
        leading: IconButton(
          onPressed: () => Navigator.pop(context),
          icon: const Icon(Icons.arrow_back, color: style_0, size: 28),
        ),
      ),
      body: SizedBox(),
    );
  }
}