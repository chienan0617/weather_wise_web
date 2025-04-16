import 'package:flutter/material.dart';
import 'package:todo_list/library.util.dart';
import 'package:todo_list/page/home/todo/edit/edit.m.dart';
import 'package:todo_list/util/data/data.dart';
import 'package:todo_list/util/data/type.dart';

class TodoCard extends StatefulWidget {
  final int index;
  final Todo todo;

  const TodoCard({
    super.key,
    required this.index,
    required this.todo,
  });

  @override
  State<TodoCard> createState() => _TodoCardState();
}

class _TodoCardState extends State<TodoCard> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.push(
        context, MaterialPageRoute(
          builder: (context) => TodoViewScreen(todo: widget.todo)
        )
      ),
      child: Container(
        margin: edge(v: 5, h: 10),
        decoration: BoxDecoration(
          color: style(op: false, os: 6),
          borderRadius: BorderRadius.circular(7.5),
          border: Border(
            left: BorderSide(
              color: Color(widget.todo.color),
              width: 7.5
            )
          )
        ),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  margin: EdgeInsets.only(left: 7.5 + 5), // (border + margin)
                  child: Text(
                    widget.todo.title,
                    style: TextStyle(
                      color: style(), //decideStyle(Color(widget.todo.color)),
                      fontSize: 28,
                      fontWeight: FontWeight.w600
                    ),
                  ),
                ),
                Container(
                  child: IconButton(
                    icon: Icon(
                      Icons.delete_outline,
                      color: Colors.red,
                      size: 28,
                    ),
                    // todo: clear warning
                    onPressed: () => Data.todo.clear(),
                  ),
                ),
              ],
            ),
            Text(
              maxLines: 3,
              widget.todo.content,
              style: TextStyle(
                color:style(), // decideStyle(Color(widget.todo.color)),
                fontSize: 22
              ),
            ),
            // todo: use old code
            Container(
              margin: EdgeInsets.only(left: 10, bottom: 5, top: 5),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                    padding: edge(h: 12, v: 6),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      color: System.darkMode
                        ? Colors.blue.withOpacity(0.3)  // 深色模式下提高背景不透明度
                        : Colors.blue.withOpacity(0.1),
                    ),
                    child: Row(
                      children: [
                        Icon(
                          Icons.calendar_today,
                          size: 16,
                          color: System.darkMode
                            ? Colors.blue.shade200  // 深色模式下使用更亮的蓝色
                            : Colors.blue,
                        ),
                        const SizedBox(width: 6),
                        Text(
                          "01-25",
                          style: TextStyle(
                            color: System.darkMode
                              ? Colors.blue.shade200  // 深色模式下使用更亮的蓝色
                              : Colors.blue.shade700,
                            fontSize: 14,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
