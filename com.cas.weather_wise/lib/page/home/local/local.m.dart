import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/local_page.dart';
import 'package:weather_wise/page/home/local/background.dart';
import 'package:weather_wise/page/home/local/today_forecast.dart';
import 'package:weather_wise/page/home/local/today_info.dart';
import 'package:weather_wise/util/service/weather.mod.dart';

class LocalPage extends StatefulWidget {
  const LocalPage({super.key});

  @override
  State<LocalPage> createState() => _LocalPageState();
}

class _LocalPageState extends State<LocalPage> {
  late Future<Weather> futureWeather;

  @override
  void initState() {
    super.initState();
    LocalPageController.localPageRefresh = () => setState(() {
      futureWeather = LocalPageController.getCurrentIndexCityInfo();
    });
    futureWeather = LocalPageController.getCurrentIndexCityInfo();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: Colors.transparent, // 為了保留後景顏色或透明
        elevation: 0,
        flexibleSpace: ClipRect(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 7, sigmaY: 7),
            child: Container(
              color: Colors.transparent, // 必須保留透明背景，才能看到後面模糊效果
            ),
          ),
        ),
        // backgroundColor: const Color(0xFF1C1933),
        leading: IconButton(
          onPressed: () {},
          icon: const Icon(Icons.settings, size: 26, color: Colors.white),
        ),
        title: DropdownButton<String>(
          items: LocalPageController.getDropDownMenuItems(),
          onChanged: LocalPageController.onSelect,
          value: LocalPageController.getDropDownMenuCurrentValue(),
          dropdownColor: const Color(0xFF1C1933),
          // dropdownColor: Color.fromRGBO(62, 64, 153, 1),
          icon: const Icon(Icons.arrow_drop_down, color: Colors.white),
          underline: const SizedBox(),
          elevation: 10,
          hint: const Text("請選擇城市", style: TextStyle(color: Colors.white54)),
          // style: const TextStyle(color: Colors.white, fontSize: 16),
        ),
        actions: [
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.menu, size: 26, color: Colors.white),
          ),
        ],
      ),
      body: FutureBuilder<Weather>(
        future: futureWeather,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(
              child: CircularProgressIndicator(color: Colors.white),
            );
          }
          if (snapshot.hasError) {
            return Center(
              child: Text(
                '無法取得天氣：${snapshot.error}',
                style: const TextStyle(color: Colors.white),
              ),
            );
          }
          if (!snapshot.hasData) {
            return const Center(
              child: Text('暫無天氣資料', style: TextStyle(color: Colors.white)),
            );
          }
          final weather = snapshot.data!; // 確定此時非 null
          // … 後續建構 LocalBackground / TodayForecast / TodayInfo …
          return LayoutBuilder(
            builder: (context, cons) {
              final size = Size(cons.maxWidth, cons.maxHeight - 30);
              return SingleChildScrollView(
                child: Column(
                  children: [
                    SizedBox(
                      height: size.height * 5 / 7,
                      child: LocalBackground(size: size, weather: weather),
                    ),
                    SizedBox(
                      height: size.height * 2 / 7,
                      child: TodayForecast(size: size, weather: weather),
                    ),
                    SizedBox(
                      width: size.width,
                      child: TodayInfo(size: size, weather: weather),
                    ),
                  ],
                ),
              );
            },
          );
        },
      ),
    );
  }
}
