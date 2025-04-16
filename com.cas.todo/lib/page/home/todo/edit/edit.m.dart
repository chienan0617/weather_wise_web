import 'package:flutter/material.dart';
import 'package:todo_list/library.util.dart';
import 'package:todo_list/page/home/todo/edit/todo_content.ui.dart';
import 'package:todo_list/page/home/todo/edit/tool_bar.ui.dart';
import 'package:todo_list/util/data/type.dart';

class TodoViewScreen extends StatefulWidget {
  final Todo todo;

  const TodoViewScreen({
    super.key,
    required this.todo,
  });

  @override
  State<TodoViewScreen> createState() => _TodoViewScreenState();
}

class _TodoViewScreenState extends State<TodoViewScreen> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: A.themeData,
      home: Scaffold(
        appBar: AppBar(
          leading: IconButton(
            onPressed: () => Navigator.pop(context),
            icon: icon(Icons.arrow_back, size: 28)
          ),
          actions: [
            IconButton(
              onPressed: () {},
              icon: icon(Icons.edit, size: 28)
            ),
            icon(Icons.more_vert, size: 28),
          ],
        ),
        body: Container(
          child: Column(
            children: [
              ToolBar(todo: widget.todo),
              // text(widget.todo.title.toString()),
              // text(widget.todo.content.toString()),
              // text(widget.todo.index.toString()),
              TitleEditor(),
              divider(w: 7.5),
              ContentEditor(),
              Container(
                width: 50, height: 50,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: Color(widget.todo.color),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
