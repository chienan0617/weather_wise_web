import 'package:flutter/material.dart';
import 'package:weather/func/home/bottom_bar.ctrl.dart';
import 'package:weather/page/home/local/local.m.dart';
import 'package:weather/page/home/today_info.dart';
import 'package:weather/util/library.dart';

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
      debugShowCheckedModeBanner: false,
      home: SafeArea(
        child: Scaffold(
          body: BottomBarCtrl.getCurrentPage(),
          bottomNavigationBar: BottomSelectBar(),
        )
      )
    );
  }
}

const List<Widget> pages = [LocalPageScreen(), SizedBox(), SizedBox()];

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
        border: Border(top: BorderSide(color: const Color(0xFF282644), width: 1.5)),
        color: const Color(0xFF1C1933),
        // borderRadius: BorderRadius.circular(20)
      ),
      child: BottomNavigationBar(
        currentIndex: BottomBarCtrl.pageIndex,
        onTap: BottomBarCtrl.onValueChanged,
        items: [
          BottomNavigationBarItem(
            icon: const Icon(Icons.location_on_outlined),
            label: 'Local',
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.cloud_outlined),
            label: 'Weather',
          ),
          BottomNavigationBarItem(
            icon: const Icon(Icons.settings_outlined),
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
      ),
    );
  }
}
