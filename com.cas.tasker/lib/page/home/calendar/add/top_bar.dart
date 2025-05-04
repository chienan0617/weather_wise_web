import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/add/edit_content.ctrl.dart';
import 'package:tasker/library.util.dart';

class AddTopBar extends StatefulWidget {
  const AddTopBar({super.key});

  @override
  State<AddTopBar> createState() => _AddTopBarState();
}

class _AddTopBarState extends State<AddTopBar> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(height: 10),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              margin: edge(v: 5, h: 20),
              child: text(
                '最後編輯: ${DateTime.now().toString().substring(5, 16)}',
                os: -128,
              ),
            ),
            Container(
              margin: edge(v: 5, h: 20),
              child: text(
                '字數: ${AddTaskInputCtrl.content.controller.text.length}',
                os: -128,
              ),
            ),
          ],
        ),
      ],
    );
  }
}
