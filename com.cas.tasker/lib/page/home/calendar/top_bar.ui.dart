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
    super.initState();
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
                icon: const Icon(Icons.menu, size: 24, color: style_0,),
              ),
            ),
            Text(
              CalendarGeneratorApi.getFormateTime(),
              style: const TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.w500,
                color: style_0
              ),
            ),
            IconButton(
              onPressed: () {},
              icon: const Icon(Icons.arrow_drop_down, color: style_0)
            )
          ],
        ),
        Row(
          children: [
            const SizedBox(width: 10),
            const Icon(Icons.more_vert, size: 24, color: style_0),
            const SizedBox(width: 10)
          ],
        ),
      ],
    );
  }
}
