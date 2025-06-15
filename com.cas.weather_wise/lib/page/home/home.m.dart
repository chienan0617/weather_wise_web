import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/home_bottom_bar.dart';
import 'package:weather_wise/func/controller/local_page.dart';
import 'package:weather_wise/page/home/drawer.dart';
import 'package:weather_wise/util/file_handle.dart';
import 'package:weather_wise/util/library.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();
    HomePageCtrl.refresh = () => setState(() {});
    LocalPageController.localPageRefresh = () => setState(() {});
  }

  @override
  void dispose() {
    HomePageCtrl.controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return MaterialApp(
      // debugShowCheckedModeBanner: false,
      debugShowCheckedModeBanner: false,
      home: SizedBox(
        child: Scaffold(
          drawer: SideBar(),
          body: PageView(
            controller: HomePageCtrl.controller,
            onPageChanged: HomePageCtrl.onValueChanged,
            children: pages,
          ),
          floatingActionButton: SizedBox(
            width: size.width / 5 / 1.375,
            height: size.width / 5 / 1.375,
            child: FloatingActionButton(
              heroTag: 'fab_chat',
              onPressed: () => HomePageCtrl.onValueChanged(2),
              backgroundColor: HomePageCtrl.pageIndex == 2
                  ? Colors.white
                  : const Color(0xFF383366),
              shape: const CircleBorder(),
              child: Icon(
                Icons.assistant,
                color: HomePageCtrl.pageIndex == 2
                    ? const Color(0xFF383366)
                    : Colors.white,
              ),
            ),
          ),
          floatingActionButtonLocation:
              FloatingActionButtonLocation.centerDocked,
          bottomNavigationBar: BottomAppBar(
            height: kBottomNavigationBarHeight + 32,
            // padding: EdgeInsets.only(top: 0),
            color: const Color(0xFF1C1933),
            // shape: const CircularNotchedRectangle(),
            // notchMargin: 8.0,
            child: Column(
              // crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    _buildNavItem(Icons.location_on_outlined, 'Local', 0, size),
                    _buildNavItem(Icons.cloud_outlined, 'Forecast', 1, size),
                    // _buildNavItem(Icons.add, 'Premium', 2, size),
                    Column(
                      children: [
                        Text(
                          Language.word('Premium'),
                          style: TextStyle(
                            color: HomePageCtrl.pageIndex == 2
                                ? Colors.white
                                : const Color(0xFF9993C6),
                            fontSize: 11,
                          ),
                        ),
                      ],
                    ),
                    _buildNavItem(Icons.search, 'Search', 3, size),
                    _buildNavItem(Icons.settings_outlined, 'Setting', 4, size),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildNavItem(IconData icon, String label, int index, Size size) {
    final isSelected = HomePageCtrl.pageIndex == index;
    return GestureDetector(
      onTap: () => HomePageCtrl.onValueChanged(index),
      child: SizedBox(
        width: (size.width - (size.width / 5 / 1.25) - 10) / 5,
        child: Container(
          decoration: BoxDecoration(
            // border: Border.all(color: Colors.amber)
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(
                icon,
                color: isSelected ? Colors.white : const Color(0xFF9993C6),
                size: 28,
              ),
              const SizedBox(height: 4),
              Text(
                Language.word(label),
                style: TextStyle(
                  color: isSelected ? Colors.white : const Color(0xFF9993C6),
                  fontSize: 12,
                  fontFamily: fontFamilyDefault,
                  fontWeight: FontWeight.w500,
                  height: 1.5,
                ),
              ),
              // SizedBox(height: 20,),
            ],
          ),
        ),
      ),
    );
  }
}
