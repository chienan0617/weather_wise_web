import 'package:flutter/material.dart';
import 'package:todo_list/func/home/todo_io.api.dart';
import 'package:todo_list/library.util.dart';
import 'package:todo_list/util/data/type.dart';

class ToolBar extends StatefulWidget {
  final Todo todo;

  const ToolBar({
    super.key, required this.todo
  });

  @override
  State<ToolBar> createState() => _ToolBarState();
}

class _ToolBarState extends State<ToolBar> {
  @override
  Widget build(BuildContext context) {
    var info = TodoIoApi.getTodoInformation(widget.todo);

    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          EditInformation(todo: widget.todo, info: info),
          ColorDot(todo: widget.todo, info: info),
        ],
      ),
    );
  }
}

class EditInformation extends StatefulWidget {
  final Todo todo;
  final Map info;

  const EditInformation({
    super.key,
    required this.todo,
    required this.info,
  });

  @override
  State<EditInformation> createState() => _EditInformationState();
}

class _EditInformationState extends State<EditInformation> {

  @override
  Widget build(BuildContext context) {

    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            margin: EdgeInsets.only(left: 15, right: 15, top: 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // text(
                //   'create time: ${widget.info['createTime']}', os: -128,
                // ),
                text(
                  'lately edit time: ${widget.info['lastEditTime']}',
                  os: -128, size: 16
                )
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 0, right: 10, top: 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                // text(
                //   'create time: ${widget.info['createTime']}', os: -128,
                // ),
                text(
                  'total text: ${widget.info['contentLength']}',
                  os: -128, size: 16
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}

class ColorDot extends StatefulWidget {
  final Todo todo;
  final Map info;

  const ColorDot({
    super.key,
    required this.todo,
    required this.info,
  });

  @override
  State<ColorDot> createState() => _ColorDotState();
}

class _ColorDotState extends State<ColorDot> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: edge(v: 0, h: 15),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Container(
            decoration: BoxDecoration(
              color: Color(widget.todo.color),
              shape: BoxShape.rectangle,
              borderRadius: BorderRadius.circular(5)
            ),
            width: 20, height: 20,
          ),
          TextButton(
            onPressed: () {},
            child: Container(
              // margin: edge(h: 10),
              child: text(widget.info['colorName'], os: -64),
            ),
          )
        ],
      ),
    );
  }
}
