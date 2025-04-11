import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/calendar/view/content.mod.dart';
import 'package:tasker/util/guide.util.dart';

class CalendarViewScreen extends StatefulWidget {
  const CalendarViewScreen({super.key});

  @override
  State<CalendarViewScreen> createState() => _CalendarViewScreenState();
}

class _CalendarViewScreenState extends State<CalendarViewScreen> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: A.themeData,
      home: Scaffold(
        appBar: AppBar(
          title: text("退回"),
          leading: icon(Icons.arrow_back, size: 24),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {Guide.back(context);}
        ),
      ),
    );
  }
}