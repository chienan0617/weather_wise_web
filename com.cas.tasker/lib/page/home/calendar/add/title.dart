import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/add/edit_content.ctrl.dart';
import 'package:tasker/library.util.dart';

class AddTitle extends StatefulWidget {
  const AddTitle({super.key});

  @override
  State<AddTitle> createState() => _AddTitleState();
}

class _AddTitleState extends State<AddTitle> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      // margin: EdgeInsets.symmetric(vertical: 0),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                flex: 3,
                child: Container(
                  margin: const EdgeInsets.only(left: 25, right: 15),
                  child: TextField(
                    decoration: InputDecoration(
                      hintText: 'add title...',
                      hintStyle: TextStyle(
                        color: style(os: -128)
                      )
                      // color
                    ),
                    cursorColor: primary,
                    controller: AddTaskInputCtrl.title.controller,
                    style: TextStyle(
                      color: style(),
                      fontSize: 18,
                      fontWeight: FontWeight.w500
                    ),
                  ),
                ),
              ),
              FittedBox(
                // flex: 1,
                child: Row(
                  children: [
                    Container(
                      margin: edge(h: 0),
                      decoration: BoxDecoration(
                        color: primary,
                        shape: BoxShape.rectangle,
                        borderRadius: BorderRadius.circular(5),
                      ),
                      width: 17.5, height: 17.5,
                    ),
                    Container(
                      margin: const EdgeInsets.only(right: 0, left: 5),
                      child: text('Pearl Pink', os: -128),
                    ),
                    Container(
                      margin: const EdgeInsets.only(right: 20, left: 5),
                      child: icon(Icons.arrow_drop_down),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
