import 'package:flutter/material.dart';
import 'package:todo_list/library.util.dart';
import 'package:todo_list/page/home/todo/todo.m.dart';
import 'package:todo_list/util/data/data.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: A.themeData,
      home: SafeArea(
        child: Scaffold(
          bottomNavigationBar: BottomNavigationBar(
            items: [
              BottomNavigationBarItem(
                icon: Icon(Icons.task),
                label: 'task'
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.settings),
                label: 'setting'
              ),
            ],
            selectedFontSize: 14,
            selectedItemColor: primary,
            unselectedFontSize: 12,
            unselectedItemColor: style(),
            currentIndex: Data.getInt(Type.currentPageIndex),
            onTap: (int value) {
              setState(() {
                Data.storeInt(Type.currentPageIndex, value);
              });
            },
          ),
          body: [
            todoScreen(), Placeholder()
          ][Data.getInt(Type.currentPageIndex)],
        )
      ),
    );
  }
}

homeScreen() => HomeScreen();