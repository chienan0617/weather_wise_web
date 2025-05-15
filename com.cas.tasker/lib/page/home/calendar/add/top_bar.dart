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
        const SizedBox(height: 10),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              margin: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
              child: Text(
                '最後編輯: ${DateTime.now().toString().substring(5, 16)}',
                style: const TextStyle(color: style_128),
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
              child: Text(
                '字數: ${AddTask.contentInput.controller.text.length}',
                style: const TextStyle(color: style_128),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
