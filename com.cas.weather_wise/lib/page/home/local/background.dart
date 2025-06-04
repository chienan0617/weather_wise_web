import 'dart:ui';

import 'package:flutter/animation.dart';
import 'package:flutter/material.dart';
import 'package:weather_wise/util/service/location.mod.dart';
import 'package:weather_wise/util/service/weather.mod.dart';
import 'package:weather_wise/util/util.dart';
import 'package:weather_wise/util/language.dart';
import 'package:weather_wise/func/controller/local_page.dart';

class LocalBackground extends StatefulWidget {
  final Size size;
  final Weather weather;
  const LocalBackground({super.key, required this.size, required this.weather});

  @override
  State<LocalBackground> createState() => _LocalBackgroundState();
}

class _LocalBackgroundState extends State<LocalBackground> {

  @override
  void initState() {
    super.initState();

    LocalPageController.rebuild = () => setState(() {});
    // SelectCityCtrl.refreshCallback = () {
    //   if (mounted) {
    //     setState(() {});
    //   }
    // };
    // SelectCityCtrl.reloadLocations();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
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
        ClipRect(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 75, sigmaY: 75),
            child: Container(color: Colors.black.withOpacity(0.2)),
          ),
        ),
        Align(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Util.getCurrentWeatherImage(widget.weather, Size(200, 200)),
              Text(
                "${widget.weather.forecast[0].hour[DateTime.now().hour].tempC.round()}°",
                style: const TextStyle(
                  fontSize: 48,
                  fontWeight: FontWeight.w700,
                  color: Colors.white,
                ),
              ),
              Text(
                '${LocalPageController.getDescription(widget.weather.current.condition.code, widget.weather.current.isDay)}'
                '\n '
                '${Language.word('Highest')}: ${widget.weather.forecast[0].day.maxTempC.round()}° '
                '${Language.word('Lowest')}: ${widget.weather.forecast[0].day.minTempC.round()}°',
                textAlign: TextAlign.center,
                style: const TextStyle(
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
            onPressed: () {
              // TODO: 菜单点击逻辑
            },
            icon: const Icon(Icons.menu, size: 26, color: Colors.white),
          ),
          title: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              DropdownMenu<SearchedLocation>(
                dropdownMenuEntries: LocalPageController.getDropDownMenuItems(),
                onSelected: LocalPageController.onSelect
                // value: LocalPageController.getCurrentLocation().name,
                // items: LocalPageController.getDropMenuItems(),
                // dropdownColor: const Color.fromRGBO(0, 0, 0, 0.25),
                // icon: const Icon(Icons.arrow_drop_down, color: Colors.white),
                // underline: const SizedBox(),
                // elevation: 10,
                // onChanged: (String? newValue) {
                //   if (newValue == null) return;
                //   LocalPageController.onChanged(newValue);
                // },
                // hint: const Text(
                //   "請選擇城市",
                //   style: TextStyle(color: Colors.white54),
                // ),
                // style: const TextStyle(color: Colors.white, fontSize: 16),
              ),
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
