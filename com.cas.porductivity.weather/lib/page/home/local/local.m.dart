import 'package:flutter/material.dart';
import 'package:weather/func/home/local/weather_current_io.api.dart';
import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/page/home/local/background.dart';
import 'package:weather/page/home/local/info.dart';
import 'package:weather/page/home/local/today_forecast.dart';

class LocalPageScreen extends StatefulWidget {
  final (double, double) located;
  const LocalPageScreen({super.key, required this.located});

  @override
  State<LocalPageScreen> createState() => _LocalPageScreenState();
}
class _LocalPageScreenState extends State<LocalPageScreen> {
  late Future<Weather> _futureWeather;

  @override
  void initState() {
    super.initState();
    _futureWeather = CurrentWeatherApi.getWeatherByLocated(widget.located);
  }

  @override
  void didUpdateWidget(covariant LocalPageScreen oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.located != widget.located) {
      _futureWeather = CurrentWeatherApi.getWeatherByLocated(widget.located);
    }
  }

  @override
  Widget build(BuildContext context) {
    print('🟢 [LocalPageScreen] build (located=${widget.located})');
    // 確保 build 裡不要再重新 assign _futureWeather！只在 initState/didUpdateWidget 重新賦值
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 17, 17, 33),
      body: FutureBuilder<Weather>(
        future: _futureWeather,
        builder: (context, snapshot) {
          // 你這裡也可以加點 log 來看 snapshot 狀態
          print('⚪️ [LocalPageScreen] FutureBuilder connectionState=${snapshot.connectionState}');
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator(color: Colors.white));
          }
          if (snapshot.hasError) {
            print('⚫️ [LocalPageScreen] snapshot.hasError: ${snapshot.error}');
            return Center(child: Text('無法取得天氣：${snapshot.error}', style: const TextStyle(color: Colors.white)));
          }
          final weather = snapshot.data!;
          print('🟣 [LocalPageScreen] snapshot has data (weather.location=${weather.location.name})');
          // …以下照你原本 return 的 UI …
          // 以下就是原本依賴「weather」來 build 的那段
          return LayoutBuilder(
            builder: (context, cons) {
              final size = Size(cons.maxWidth, cons.maxHeight);
              return SingleChildScrollView(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    SizedBox(
                      height: size.height * 5 / 7,
                      child: ColorGradient(size: size, weather: weather),
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
