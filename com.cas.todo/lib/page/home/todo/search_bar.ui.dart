import 'package:flutter/material.dart';
import 'package:todo_list/func/home/search.ctrl.dart';
import 'package:todo_list/library.util.dart';

class TodoSearchBar extends StatefulWidget {
  const TodoSearchBar({super.key});

  @override
  State<TodoSearchBar> createState() => _TodoSearchBarState();
}

class _TodoSearchBarState extends State<TodoSearchBar> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: edge(h: 10),
      // child: Row(
      //   // mainAxisAlignment: MainAxisAlignment.start
      //   children: [
          // Container(
          //   child: icon(Icons.search),
          // ),
        child: Container(
            decoration: BoxDecoration(
              color: style(n: true, os: 12, op: false),
              borderRadius: BorderRadius.circular(10)
            ),
            height: 40,
            margin: edge(v: 10),
            child: Container(
              margin: EdgeInsets.only(left: 10, right: 10), // None
              child: TextField(
                style: TextStyle(
                  fontSize: 24,
                  color: style(),
                  // fontWeight: FontWeight.w500
                ),
                controller: TodoSearchCtrl.controller,
              ),
            ),
          ),
        // ],
      // ),
    );
  }
}