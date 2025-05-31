import 'package:flutter/material.dart';
import 'package:weather/func/home/bottom_bar.ctrl.dart';
import 'package:weather/func/home/local/select_city.ctrl.dart';
import 'package:weather/func/home/local/weather_current_io.api.dart';
import 'package:weather/page/home/forecast/forecast.m.dart';
import 'package:weather/page/home/local/local.m.dart';
import 'package:weather/page/home/search/city.m.dart';
import 'package:weather/page/home/setting/temp.m.d.dart';
import 'package:weather/util/language.dart';

class HomePageScreen extends StatefulWidget {
  const HomePageScreen({super.key});

  @override
  State<HomePageScreen> createState() => _HomePageScreenState();
}

class _HomePageScreenState extends State<HomePageScreen> {
  late (double, double) currentLocated;

  @override
  void initState() {
    super.initState();
    // 1) 預設要拿 (lat,lon)
    currentLocated = CurrentWeatherApi.getDefaultWeatherLocated();

    // 2) 當選城市時，拿到 matched.lat, matched.lng
    SelectCityCtrl.rebuildLocalPage = (double lat, double lon) {
      setState(() {
        currentLocated = (lat, lon);
      });
    };
    SelectCityCtrl.refreshCallback = () => setState(() {});
    BottomBarCtrl.refresh = () => setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final pages = <Widget>[
      LocalPageScreen(located: currentLocated),
      const ForecastPageScreen(),
      const SearchPageScreen(),
      const DebugConsole(),
    ];
    return Scaffold(
      body: pages[BottomBarCtrl.pageIndex],
      bottomNavigationBar: const BottomSelectBar(),
    );
  }
}

List<Widget> pages = [
  LocalPageScreen(located: CurrentWeatherApi.getDefaultWeatherLocated()),
  const ForecastPageScreen(),
  const SearchPageScreen(),
  const DebugConsole(),
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
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.location_on_outlined),
            label: Language.get('Local'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.cloud_outlined),
            label: Language.get('Forecast'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: Language.get('Search'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings_outlined),
            label: Language.get('Setting'),
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
