import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/calendar/view/content.mod.dart';
import 'package:tasker/util/guide.util.dart';

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
        body: Container(
          margin: EdgeInsets.symmetric(vertical: 10),
          child: Column(
            children: [
              contentListTile(
                iconData: Icons.text_fields,
                title: "內容",
                trailing: text("text"),
                onPressed: () => showSelectColorDialog(context),
                autoTranslate: false,
              ),
              contentDivider(),
              // contentListTile(iconData: Icons.colorize, title: '顏色', trailing: Container())
            ],
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {Guide.back(context);}
        ),
      ),
    );
  }
}