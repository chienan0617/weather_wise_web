
import 'package:flutter/material.dart';
import 'package:todo_list/util/customize.util.dart';
import 'package:todo_list/util/data/data.dart';
import 'package:todo_list/util/data/type.dart';

class TodoIoApi {
  static int getTodoNewIndex() {
    return Data.todo.getNewIndex();
  }

  // * create a todo.
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

  // * get all the undone todo
  // ? use by: display on generating
  static List<Todo> getAllUndoneTodo() =>
    Data.todo.getAllTodo().values.where(
      (todo) => todo is Todo && !todo.done
    ).toList() as List<Todo>;

  // * get the information of the input todo
  // ? use by: editor scene
  static Map<String, String> getTodoInformation(Todo todo) {
    return {
      'createTime': _transferTime(todo.createTime),
      'lastEditTime': _transferTime(todo.lastEdit),
      'contentLength': todo.content is String
        ? (todo.content as String).length.toString()
        : todo.content.hashCode.toString(),
      'isDone': todo.done ? 'done' : 'incomplete',
      'type': todo.type.name == 'list'
        ? 'list' : todo.type.name == 'card'
        ? 'card' : 'unknown',
      'colorName': com('color')[
        int.tryParse(_getColorName(Color(todo.color)))
        ?? colors.length -1
      ],
    };
  }

  // * transfer time
  // ? ex: 2025-04-16 07:25:44.0912248014 -> 2025-04-16 07:25
  static String _transferTime(DateTime dateTime) {
    return
        //"${dateTime.year}-"
        "${dateTime.month.toString().padLeft(2, '0')}-"
        "${dateTime.day.toString().padLeft(2, '0')} ${dateTime.hour.toString().padLeft(2, '0')}:"
        "${dateTime.minute.toString().padLeft(2, '0')}";
  }

  static String _getColorName(Color color) {
    var match = colors.where(
      (value) => value.toARGB32() == color.toARGB32()
    );

    String result = match.isNotEmpty
      ? colors.indexOf(match.first).toString()
      : "not found";

    return result;
  }
}
