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
  // 这里和 HomePageCtrl.pages 保持完全一致
  final List<Widget> _pages = [
    LocalPage(),
    ForecastPage(),
    SearchPage(),
    DebugConsole(),
  ];

  @override
  void initState() {
    super.initState();
    // 将 HomePageCtrl.refresh 绑到 setState()，让它能刷 UI
    HomePageCtrl.refresh = () => setState(() {});
    // 如果 LocalPageController 需要通知 HomePage 刷新，也一并绑定
    LocalPageController.localPageRefresh = () => setState(() {});
  }

  @override
  void dispose() {
    // 程序结束或退出 HomePage 时再释放控制器
    HomePageCtrl.controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SafeArea(
        child: Scaffold(
          drawer: SideBar(),
          body: PageView(
            controller: HomePageCtrl.controller,
            onPageChanged: HomePageCtrl.onValueChanged,
            children: _pages,
          ),
          bottomNavigationBar: _buildBottomNavigationBar(),
        ),
      ),
    );
  }

  Widget _buildBottomNavigationBar() {
    return Container(
      padding: const EdgeInsets.only(bottom: 15),
      decoration: const BoxDecoration(
        border: Border(top: BorderSide(color: Color(0xFF282644), width: 1.5)),
        // color: Color(0xFF1C1933),
        color: Color(0xFF1C1933),
      ),
      child: BottomNavigationBar(
        currentIndex: HomePageCtrl.pageIndex,
        onTap: HomePageCtrl.onValueChanged,
        items: [
          _bottomNavItem(Icons.location_on_outlined, 'Local'),
          _bottomNavItem(Icons.cloud_outlined, 'Forecast'),
          _bottomNavItem(Icons.search, 'Search'),
          _bottomNavItem(Icons.settings_outlined, 'Setting'),
        ],
        selectedFontSize: 14,
        unselectedFontSize: 12,
        selectedLabelStyle: const TextStyle(
          color: Color(0xFF9993C6),
          fontSize: 14,
          fontFamily: 'Space Grotesk',
          fontWeight: FontWeight.w500,
          height: 1.50,
        ),
        unselectedLabelStyle: const TextStyle(
          color: Color(0xFF9993C6),
          fontSize: 14,
          fontFamily: 'Space Grotesk',
          fontWeight: FontWeight.w500,
          height: 1.50,
        ),
        selectedItemColor: Colors.white,
        unselectedItemColor: const Color(0xFF9993C6),
        backgroundColor: const Color(0xFF1C1933),
        type: BottomNavigationBarType.shifting,
        // showUnselectedLabels: true,
      ),
    );
  }

  BottomNavigationBarItem _bottomNavItem(IconData icon, String label) {
    return BottomNavigationBarItem(
      icon: Icon(icon),
      label: Language.word(label),
      backgroundColor: const Color(0xFF1C1933),
    );
  }
}
