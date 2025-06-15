
import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/local_page.dart';
import 'package:weather_wise/page/home/drawer.dart';
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
      drawer: SideBar(),
      extendBodyBehindAppBar: true,
      backgroundColor: const Color(0xFF111121),
      // appBar:
      body: FutureBuilder<Weather>(
        future: futureWeather,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) return const Center(child: CircularProgressIndicator(color: Colors.white));
          if (snapshot.hasError) return Center(child: Text('無法取得天氣：${snapshot.error}', style: const TextStyle(color: Colors.white)));
          if (!snapshot.hasData) return const Center(child: Text('暫無天氣資料', style: TextStyle(color: Colors.white)));
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
