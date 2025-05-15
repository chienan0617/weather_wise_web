import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/calendar/calendar.m.dart';
import 'package:tasker/page/home/drawer.dart';
import 'package:tasker/page/home/setting/setting.m.dart';
import 'package:tasker/page/home/task_group/task_group.m.dart';
import 'package:tasker/util/data/data.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: true,
      theme: A.themeData,
      home: Scaffold(
        // appBar: AppBar(),
        drawer: const SideBar(),
        body: const <Widget>[
          CalendarScreen(), TaskGroupScreen(), SettingScreen()
        ][Data.app.getInt('currentPageIndex')],
        bottomNavigationBar: BottomNavigationBar(
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(icon: Icon(Icons.calendar_today_outlined), label: "Calendar"),
            BottomNavigationBarItem(icon: Icon(Icons.task), label: "Task Group"),
            BottomNavigationBarItem(icon: Icon(Icons.settings), label: "Setting")
          ],
          onTap: (i) {setState(() {Data.app.put<int>('currentPageIndex', i);});},
          currentIndex: Data.app.getInt('currentPageIndex'),
          selectedItemColor: primary,
          unselectedItemColor: style_0,
          selectedFontSize: 14,
          unselectedFontSize: 13,
          showUnselectedLabels: true,
        ),
      ),
    );
  }
}
