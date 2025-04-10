import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/guide.dart';

class CalendarAddScreen extends StatefulWidget {
  const CalendarAddScreen({super.key});

  @override
  State<CalendarAddScreen> createState() => _CalendarAddScreenState();
}

class _CalendarAddScreenState extends State<CalendarAddScreen> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: A.themeData,
      home: Scaffold(
        appBar: AppBar(
          title: text("text"),
          leading: icon(Icons.abc),
        ),
        body: Placeholder(),
        floatingActionButton: FloatingActionButton(onPressed: () {Guide.back(context);}),
      ),
    );
  }
}