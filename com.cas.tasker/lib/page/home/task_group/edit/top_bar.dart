import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/data/type.dart';

class EditTopBar extends StatefulWidget {
  final TaskGroup taskGroup;

  const EditTopBar({
    super.key,
    required this.taskGroup,
  });

  @override
  State<EditTopBar> createState() => _EditTopBarState();
}

class _EditTopBarState extends State<EditTopBar> {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 10),
          child: Text(
            "最後編輯: ${widget.taskGroup.lastEditTime.toString().substring(5, 16)}",
            style: TextStyle(
              color: style_128,
              fontSize: 14,
            ),
          ),
        ),
        Row(
          children: [
            Container(
              margin: const EdgeInsets.only(right: 5, top: 5),
              decoration: BoxDecoration(
                color: Color(widget.taskGroup.color),
                shape: BoxShape.rectangle,
                borderRadius: BorderRadius.circular(7.5)
              ),
              width: 20, height: 20,
            ),
            GestureDetector(
              onTap: () {},
              child: Text(
                'change it',
                style: TextStyle(
                  color: style_128,
                  fontSize: 14
                ),
              ),
            ),
            IconButton(
              onPressed: () {},
              icon: const Icon(
                Icons.arrow_drop_down,
                color: style_0,
                size: 24,
              )
            ),
            const SizedBox(width: 15),
          ],
        )
      ],
    );
  }
}