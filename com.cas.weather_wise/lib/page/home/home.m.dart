import 'package:weather_wise/func/controller/home_bottom_bar.dart';
import 'package:weather_wise/func/controller/local_page.dart';
import 'package:weather_wise/page/home/drawer.dart';
import 'package:weather_wise/page/home/forecast/forecast.m.dart';
import 'package:weather_wise/page/home/local/local.m.dart';
import 'package:weather_wise/page/home/search/search.m.dart';
import 'package:weather_wise/page/home/setting/setting.m.dart';
import 'package:weather_wise/util/language.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();
    LocalPageController.localPageRefresh = () => setState(() {});
    HomePageCtrl.refresh = () => setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // debugShowCheckedModeBanner: false,
      home: SafeArea(
        child: Scaffold(
          drawer: SideBar(),
          body: HomePageCtrl.getCurrentPage(),
          bottomNavigationBar: _bottomSelectBar(),
        ),
      ),
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
          _bottomSelectBarItem(Icons.location_on_outlined, 'Local'),
          _bottomSelectBarItem(Icons.cloud_outlined, 'Forecast'),
          _bottomSelectBarItem(Icons.search, 'Search'),
          _bottomSelectBarItem(Icons.settings_outlined, 'Setting'),
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

  BottomNavigationBarItem _bottomSelectBarItem(IconData icon, String label) {
    return BottomNavigationBarItem(
      icon: Icon(icon),
      label: Language.word(label),
    );
  }
}

final List<Widget> pages = <Widget>[
  LocalPage(),
  ForecastPage(),
  SearchPage(),
  DebugConsole(),
];
