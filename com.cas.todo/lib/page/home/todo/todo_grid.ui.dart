import 'package:flutter/material.dart';
import 'package:todo_list/func/home/todo_io.api.dart';
import 'package:todo_list/page/home/todo/search_bar.dart';
import 'package:todo_list/page/home/todo/todo_card.mod.dart';
import 'package:todo_list/util/data/type.dart';

class TodoGrid extends StatefulWidget {
  const TodoGrid({
    super.key
  });

  @override
  State<TodoGrid> createState() => _TodoGridState();
}

class _TodoGridState extends State<TodoGrid> {
  List<Todo> todos = TodoIoApi.getAllUndoneTodo();

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: [
          TodoSearchBar(),
          Column(
            children: List.generate(todos.length, (int index) {
              return TodoCard(index: index, todo: todos[index]);
            }),
          ),
        ],
      ),
    );
  }
}