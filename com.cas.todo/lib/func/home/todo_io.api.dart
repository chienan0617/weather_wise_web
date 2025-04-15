import 'package:flutter/material.dart';
import 'package:todo_list/util/data/data.dart';
import 'package:todo_list/util/data/type.dart';

class TodoIoApi {
  static int getTodoNewIndex() {
    return Data.todo.getNewIndex();
  }

  static createTodo({
    required String title,
    required TodoType type,
    required Color color,
    required dynamic content,
  }) {
    Todo todo = Todo(
      title,
      type,
      DateTime.now(),
      DateTime.now(),
      color.toARGB32(),
      content,
      getTodoNewIndex(),
    );
    Data.todo.newTodo(todo);
  }

  static List<Todo> getAllUndoneTodo() {
    Map allTodo = Data.todo.getAllTodo();
    List<Todo> todos = [];

    for (var todo in allTodo.values) {
      if (todo is Todo) {
        if (!todo.done) todos.add(todo);
      }
    }

    return todos;
  }
}