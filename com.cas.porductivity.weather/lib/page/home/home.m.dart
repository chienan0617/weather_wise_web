import 'package:flutter/material.dart';
import 'package:weather/func/home/bottom_bar.ctrl.dart';
import 'package:weather/page/home/local/local.m.dart';
import 'package:weather/page/home/search/search.m.dart';

class HomePageScreen extends StatefulWidget {
  const HomePageScreen({super.key});

  @override
  State<HomePageScreen> createState() => _HomePageScreenState();
}

class _HomePageScreenState extends State<HomePageScreen> {
  @override
  void initState() {
    super.initState();
    BottomBarCtrl.refresh = () => setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        splashColor: Colors.transparent,
        highlightColor: Colors.transparent,
      ),
      debugShowCheckedModeBanner: false,
      home: SafeArea(
        child: Scaffold(
          backgroundColor: const Color(0xFF282347),
          body: BottomBarCtrl.getCurrentPage(),
          bottomNavigationBar: BottomSelectBar(),
        ),
      ),
    );
  }
}

const List<Widget> pages = [
  LocalPageScreen(),
  SizedBox(),
  SearchPageScreen(),
  SizedBox(),
];

class BottomSelectBar extends StatefulWidget {
  const BottomSelectBar({super.key});

  @override
  State<BottomSelectBar> createState() => _BottomSelectBarState();
}

class _BottomSelectBarState extends State<BottomSelectBar> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(bottom: 15),
      decoration: BoxDecoration(
        border: Border(
          top: BorderSide(color: const Color(0xFF282644), width: 1.5),
        ),
        color: const Color(0xFF1C1933),
        // borderRadius: BorderRadius.circular(20)
      ),
      child: BottomNavigationBar(
        currentIndex: BottomBarCtrl.pageIndex,
        onTap: BottomBarCtrl.onValueChanged,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.location_on_outlined),
            label: 'Local',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.cloud_outlined),
            label: 'Forecast',
          ),
          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings_outlined),
            label: 'Setting',
          ),
        ],
        selectedFontSize: 14,
        unselectedFontSize: 12,
        selectedLabelStyle: TextStyle(
          color: const Color(0xFF9993C6),
          fontSize: 14,
          fontFamily: 'Space Grotesk',
          fontWeight: FontWeight.w500,
          height: 1.50,
        ),
        unselectedLabelStyle: TextStyle(
          color: const Color(0xFF9993C6),
          fontSize: 14,
          fontFamily: 'Space Grotesk',
          fontWeight: FontWeight.w500,
          height: 1.50,
        ),
        selectedItemColor: Colors.white,
        unselectedItemColor: const Color(0xFF9993C6),
        backgroundColor: const Color(0xFF1C1933),
        type: BottomNavigationBarType.fixed,
      ),
    );
  }
}
