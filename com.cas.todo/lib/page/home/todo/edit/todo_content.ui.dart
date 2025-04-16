import 'package:flutter/material.dart';
import 'package:todo_list/func/home/edit/editor.ctrl.dart';
import 'package:todo_list/library.util.dart';
import 'package:todo_list/util/data/type.dart';

class TodoContent extends StatefulWidget {
  final Todo todo;

  const TodoContent({
    super.key,
    required this.todo
  });

  @override
  State<TodoContent> createState() => _TodoContentState();
}

class _TodoContentState extends State<TodoContent> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}

class TitleEditor extends StatefulWidget {
  const TitleEditor({super.key});

  @override
  State<TitleEditor> createState() => _TitleEditorState();
}

class _TitleEditorState extends State<TitleEditor> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: edge(v: 2.5, h: 15),
      padding: edge(h: 10),
      decoration: BoxDecoration(
        // border: Border.all(color: Colors.amber)
        color: style(n: true, os: 0, op: false),
        borderRadius: BorderRadius.circular(10),
      ),
      child: TextField(
        decoration: InputDecoration(
          icon: icon(Icons.text_fields, size: 24),
          hintMaxLines: 1,
          hintText: 'enter title',
          hintStyle: TextStyle(color: style(os: -128), fontSize: 24),
        ),
        cursorColor: primary,
        style: TextStyle(
          color: style(),
          fontSize: 24,
          fontWeight: FontWeight.w400
        ),
        controller: EditorCtrl.title.controller,
      ),
    );
  }
}

class ContentEditor extends StatefulWidget {
  const ContentEditor({super.key});

  @override
  State<ContentEditor> createState() => _ContentEditorState();
}

class _ContentEditorState extends State<ContentEditor> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: edge(v: 2.5, h: 15),
      padding: edge(h: 10),
      decoration: BoxDecoration(
        // border: Border.all(color: Colors.amber)
        // color: style(n: true, os: 0, op: false),
        borderRadius: BorderRadius.circular(10)
      ),
      child: TextField(
        cursorColor: primary,
        style: textStyle(24, style()),
        controller: EditorCtrl.content.controller,
      ),
    );
  }
}
