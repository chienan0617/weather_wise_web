import 'package:flutter/material.dart';
import 'package:tasker/func/home/task_group/input.ctrl.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/data/type.dart';

class EditTitleBar extends StatefulWidget {
  final TaskGroup taskGroup;

  const EditTitleBar({super.key, required this.taskGroup});

  @override
  State<EditTitleBar> createState() => _EditTitleBarState();
}

class _EditTitleBarState extends State<EditTitleBar> {
  @override
  void initState() {
    super.initState();
    TaskGroupEditInputCtrl.title.setupInitText(widget.taskGroup.name);
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Row(
      children: [
        Container(
          margin: EdgeInsets.symmetric(horizontal: 20, vertical: 0),
          decoration: BoxDecoration(
            // border: Border.all(color: style_128, width: 0.25),
            color: style_n8p,
            borderRadius: BorderRadius.circular(7.5)
          ),
          width: size.width - 20 *2,
          child: TextField(
            decoration: const InputDecoration(
              // fillColor: style_n8,
              hintText: 'add name',
              hintMaxLines: 1,
              hintStyle: TextStyle(
                color: style_128,
                fontSize: 18,
                fontWeight: FontWeight.w500
              ),
              prefixIcon: Icon(Icons.text_fields, color: style_0, size: 18),
              border: OutlineInputBorder(
                borderSide: BorderSide(
                  color: style_128,
                  width: 0.5
                )
              )
            ),
            controller: TaskGroupEditInputCtrl.title.controller,
            cursorColor: primary,
            style: const TextStyle(
              color: style_8,
              fontSize: 18,
              fontWeight: FontWeight.w500
            ),
          ),
        ),
      ]
    );
  }
}