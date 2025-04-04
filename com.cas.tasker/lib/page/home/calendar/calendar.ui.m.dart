import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/calendar/grid.ui.dart';
import 'package:tasker/page/home/calendar/grid.uif.dart';
import 'package:tasker/page/home/calendar/week.ui.dart';

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
        onPressed: () {},
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

class TopBar extends StatefulWidget {
  const TopBar({super.key});

  @override
  State<TopBar> createState() => _TopBarState();
}

class _TopBarState extends State<TopBar> {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children: [
            Container(
              padding: EdgeInsets.symmetric(horizontal: 5),
              child: IconButton(
                onPressed: () {},
                icon: icon(Icons.menu, size: 24),  
              ),
            ),
            Container(
              child: text("text", size: 22, w: FontWeight.w500),
            ),
            Container(
              child: IconButton(
                onPressed: () {}, 
                icon: icon(Icons.arrow_drop_down)
              ),
            )
          ],
        ),
        Row(
          children: [
            Container(
              margin: EdgeInsets.symmetric(horizontal: 10),
              child: icon(Icons.more_vert, size: 24),
            ),
            Container(),
          ],
        ),
      ],
    );
  }
}