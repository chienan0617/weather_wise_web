import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/calendar/add/bottom_tool_bar.dart';
import 'package:tasker/page/home/calendar/add/date.dart';
import 'package:tasker/page/home/calendar/add/title.dart';
import 'package:tasker/page/home/calendar/add/top_bar.dart';
import 'package:tasker/util/guide.util.dart';

class CalendarAddScreen extends StatefulWidget {
  const CalendarAddScreen({super.key});

  @override
  State<CalendarAddScreen> createState() => _CalendarAddScreenState();
}

class _CalendarAddScreenState extends State<CalendarAddScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('', style: TextStyle(color: style_0, fontSize: 24)),
          leading: IconButton(
            onPressed: () => Guide.calendar.toCalendarPage(context),
            icon: const Icon(Icons.arrow_back, size: 28, color: style_0,)
          ),
        ),
        body: const Column(
          children: [
            Expanded(
              child: Column(
                children: [
                  AddTopBar(),
                  AddDate(),
                  AddTitle(),
                  Divider(indent: 20, endIndent: 20, thickness: 0.5),
                  AddContentEditor(),
                  Divider(indent: 20, endIndent: 20, thickness: 0.5),
                ],
              )
            ),
            AddBottomBar()
          ],
        ),
    );
  }
}
