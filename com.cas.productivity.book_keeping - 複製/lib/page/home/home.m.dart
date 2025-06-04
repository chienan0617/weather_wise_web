import 'package:bookkeeping/func/home/home.ctrl.dart';
import 'package:bookkeeping/page/home/drawer.dart';
import 'package:bookkeeping/page/home/forecasr/forecast.m.dart';
import 'package:bookkeeping/page/home/local/lcoal.m.dart';
import 'package:bookkeeping/page/home/search/search.m.dart';
import 'package:bookkeeping/page/home/setting/setting.m.dart';
import 'package:bookkeeping/util/language.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // debugShowCheckedModeBanner: false,
      home: Scaffold(drawer: SideBar(), body: HomePageCtrl.getCurrentPage()),
    );
  }

  Widget _bottomSelectBar() {
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
        currentIndex: HomePageCtrl.pageIndex,
        onTap: HomePageCtrl.onValueChanged,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.location_on_outlined),
            label: Language.word('Local'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.cloud_outlined),
            label: Language.word('Forecast'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: Language.word('Search'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings_outlined),
            label: Language.word('Setting'),
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

  Widget _bottomSelectBarItem(IconData icon, String label) {
    return BottomNavigationBarItem(
      icon: Icon(icon),
      label: Language.word(label),
    );
  }
}

final List<Widget> pages = const <Widget>[
  LocalPage(),
  ForecastPage(),
  SearchPage(),
  SettingPage(),
];
