import 'package:flutter/material.dart';
import 'package:todo_list/library.util.dart';
import 'package:todo_list/page/home/todo/todo_grid.ui.dart';

class TodoScreen extends StatefulWidget {
  const TodoScreen({super.key});

  @override
  State<TodoScreen> createState() => _TodoScreenState();
}

class _TodoScreenState extends State<TodoScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: TodoGrid(),
      appBar: AppBar(
        title: text("text", size: 26),
        leading: IconButton(
          icon: icon(Icons.menu, size: 24),
          onPressed: () {},
        ),
        actions: [
          IconButton(
            icon: icon(Icons.more_vert, size: 24),
            onPressed: () => () {}
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: icon(Icons.add, size: 24)
      ),
    );
  }
}
