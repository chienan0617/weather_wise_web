import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/calendar_generator.api.dart';
import 'package:tasker/library.util.dart';

class TopBar extends StatefulWidget {
  const TopBar({super.key});

  @override
  State<TopBar> createState() => _TopBarState();
}

class _TopBarState extends State<TopBar> {
  @override
  void initState() {
    CalendarGeneratorApi.topBarRebuild = () => setState(() {});
  }

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
              child: text(CalendarGeneratorApi.getFormateTime(), size: 22, w: FontWeight.w500),
            ),
            IconButton(
              onPressed: () {}, 
              icon: icon(Icons.arrow_drop_down)
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