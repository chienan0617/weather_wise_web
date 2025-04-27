import 'package:flutter/material.dart';
import 'package:todo_list/library.util.dart';

class ToolBottomBar extends StatefulWidget {
  const ToolBottomBar({super.key});

  @override
  State<ToolBottomBar> createState() => _ToolBottomBarState();
}

class _ToolBottomBarState extends State<ToolBottomBar> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Container(
      padding: edge(h: 20),
      color: style(n: true, op: false, os: 0),
      height: size.height * 0.05,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            child: IconButton(
              onPressed: () {},
              icon: icon(Icons.text_format, size: 28)
            ),
          ),
          Container(
            child: IconButton(
              onPressed: () {},
              icon: icon(Icons.colorize, size: 28)
            ),
          ),
          SizedBox(),
          SizedBox(),
          SizedBox(),
          Container(
            child: IconButton(
              onPressed: () {},
              icon: icon(Icons.undo, size: 28)
            ),
          ),
          Container(
            child: IconButton(
              onPressed: () {},
              icon: icon(Icons.redo, size: 28)
            ),
          ),
          Container(
            child: IconButton(
              onPressed: () {},
              icon: icon(Icons.check, size: 28)
            ),
          )
        ],
      ),
    );
  }
}