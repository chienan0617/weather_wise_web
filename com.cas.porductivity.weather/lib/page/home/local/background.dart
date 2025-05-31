import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:weather/func/home/local/local_io.api.dart';
import 'package:weather/func/home/local/select_city.ctrl.dart';
import 'package:weather/func/home/local/weather.mod.dart';
import 'package:weather/util/language.dart';
import 'package:weather/util/location.dart';

class ColorGradient extends StatefulWidget {
  final Size size;
  final Weather weather;
  const ColorGradient({super.key, required this.size, required this.weather});

  @override
  State<ColorGradient> createState() => _ColorGradientState();
}

class _ColorGradientState extends State<ColorGradient> {
  @override
  Widget build(BuildContext context) {
    String? selectedCity; // 初始為 null
    return Stack(
      children: [
        // 背景漸層
        Container(
          width: widget.size.width,
          height: widget.size.height * 0.75,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color.fromRGBO(101, 129, 233, 1),
                Color.fromRGBO(60, 86, 156, 1),
                Color.fromRGBO(62, 64, 153, 1),
                Color.fromRGBO(37, 21, 105, 1),
                Color.fromRGBO(19, 5, 82, 1),
              ],
            ),
          ),
        ),
        // 模糊效果
        ClipRect(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 75, sigmaY: 75),
            child: Container(color: Colors.black.withValues(alpha: 0.2)),
          ),
        ),
        // 中央的文字和圖示
        Align(
          child: Column(
            mainAxisSize: MainAxisSize.min, // 收紧到内容高度
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // <-- 上方图片
              LocalIoApi.getCurrentWeatherImage(widget.weather, Size(200, 200)),
              // const SizedBox(height: 12), // 图片和文字间距
              // <-- 温度文字 + 图标
              Text(
                "${widget.weather.forecast[0].hour[DateTime.now().hour].tempC.round()}°",
                style: const TextStyle(
                  fontSize: 48,
                  fontWeight: FontWeight.w700,
                  color: Colors.white,
                ),
              ),
              Text(
                '${LocalIoApi.getDescription(widget.weather.current.condition.code, widget.weather.current.isDay)}'
                '\n '
                '${Language.get('Highest')}: ${widget.weather.forecast[0].day.maxTempC}° '
                '${Language.get('Lowest')}: ${widget.weather.forecast[0].day.minTempC}°',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w700,
                  color: Colors.white70,
                ),
              ),
            ],
          ),
        ),
        ListTile(
          contentPadding: const EdgeInsets.symmetric(
            vertical: 10,
            horizontal: 10,
          ),
          leading: IconButton(
            onPressed: () {},
            icon: const Icon(Icons.menu, size: 26, color: Colors.white),
          ),
          title: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              DropdownButton<String>(
                value: SelectCityCtrl.getCurrentOption(),
                // hint: Text('請選擇城市'),
                onChanged: (String? newValue) {
                  SelectCityCtrl.onChanged(newValue ?? '');
                  setState(() {});
                },

                items: LocalIoApi.getItems(),
                dropdownColor: Color.fromRGBO(0, 0, 0, 0.25),
                icon: const Icon(Icons.arrow_drop_down, color: Colors.white),
                underline: const SizedBox(),
                elevation: 10,
              ),

              // Text(
              //   widget.weather.location.name,
              //   textAlign: TextAlign.center,
              //   style: const TextStyle(
              //     fontSize: 18,
              //     color: Colors.white,
              //     fontWeight: FontWeight.bold,
              //     fontFamily: 'Space Grotesk',
              //   ),
              // ),
              // IconButton(
              //   onPressed: () {},
              //   icon: const Icon(
              //     Icons.arrow_drop_down,
              //     color: Colors.white,
              //     size: 20,
              //   ),
              // ),
            ],
          ),
          trailing: IconButton(
            onPressed: () {},
            icon: const Icon(Icons.settings, size: 26, color: Colors.white),
          ),
        ),
      ],
    );
  }
}
