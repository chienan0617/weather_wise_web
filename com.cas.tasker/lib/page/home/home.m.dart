import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/calendar/calendar.m.dart';
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
        body: [
          CalendarScreen(), Container(), Container(),
        ][Data.getInt(Type.currentPageIndex)],
        bottomNavigationBar: BottomNavigationBar(
          items: [
            BottomNavigationBarItem(icon: Icon(Icons.calendar_today_outlined), label: "calendar"),
            BottomNavigationBarItem(icon: Icon(Icons.task), label: "task"),
            BottomNavigationBarItem(icon: Icon(Icons.settings), label: "setting")
          ],
          onTap: (i) {setState(() {Data.put<int>(Type.currentPageIndex, i);});},
          currentIndex: Data.getInt(Type.currentPageIndex),
          selectedItemColor: primary(),
          unselectedItemColor: style(),
          selectedFontSize: 14,
          unselectedFontSize: 13,
          showUnselectedLabels: true,
        ),
      ),
    );
  }
}