import 'package:flutter/material.dart';
import 'package:todo_list/func/home/edit/editor.ctrl.dart';
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
        children: [
          Container(
            margin: edge(h: 15, v: 5),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // text(
                //   'create time: ${widget.info['createTime']}', os: -128,
                // ),
                text(
                  'last edit time: ${widget.info['lastEditTime']}',
                  os: -128, size: 18
                )
              ],
            ),
          ),
          Container(
            margin: edge(h: 15, v: 5),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // text(
                //   'create time: ${widget.info['createTime']}', os: -128,
                // ),
                text(
                  'last edit time: ${widget.info['lastEditTime']}',
                  os: -128, size: 18
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
    var info = TodoIoApi.getTodoInformation(widget.todo);

    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          EditInformation(todo: widget.todo, info: info),
          Align(
            alignment: Alignment.centerRight,
            child: ColorDot(todo: widget.todo, info: info),
          ),
        ],
      ),
    );
  }
}
