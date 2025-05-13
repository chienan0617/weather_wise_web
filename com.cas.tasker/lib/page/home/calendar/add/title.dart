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
    return Container(
      margin: const EdgeInsets.only(left: 25, right: 15),
      child: TextField(
        decoration: InputDecoration(
          hintText: 'add title...',
          hintStyle: TextStyle(color: style(os: -128)),
          // color
        ),
        cursorColor: primary,
        controller: AddTask.titleInput.controller,
        style: TextStyle(
          color: style(),
          fontSize: 18,
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }
}

class AddContentEditor extends StatefulWidget {
  const AddContentEditor({super.key});

  @override
  State<AddContentEditor> createState() => _AddContentEditorState();
}

class _AddContentEditorState extends State<AddContentEditor> {
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        margin: const EdgeInsets.only(left: 25, right: 15),
        child: TextField(
          expands: true,
          maxLines: null, minLines: null,
          decoration: InputDecoration(
            hintText: 'add content...',
            hintStyle: TextStyle(color: style(os: -128)),
          ),
          cursorColor: primary,
          controller: AddTask.contentInput.controller,
          style: TextStyle(
            color: style(),
            fontSize: 18,
            fontWeight: FontWeight.w500,
          ),
        ),
      ),
    );
  }
}

