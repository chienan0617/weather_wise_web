import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/calendar/grid.ui.dart';
import 'package:tasker/page/home/calendar/top_bar.ui.dart';
import 'package:tasker/page/home/calendar/week.ui.dart';
import 'package:tasker/util/guide.util.dart';

class CalendarScreen extends StatefulWidget {
  const CalendarScreen({super.key});

  @override
  State<CalendarScreen> createState() => _CalendarScreenState();
}

class _CalendarScreenState extends State<CalendarScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: [Expanded(child: TopBar())],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => Guide.calendar.toAddPage(context),
        child: Icon(Icons.add, color: primaryStyle(), size: 24),
      ),
      body: LayoutBuilder(
        builder: (context, constraints) {
          return Column(
          children: [
            CalendarWeek(),
            GridPageView(cons: constraints),
          ],
        );
      }),
    );
  }
}
