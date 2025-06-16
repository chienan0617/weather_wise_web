import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/home_bottom_bar.dart';
import 'package:weather_wise/util/service/weather.mod.dart';
import 'package:weather_wise/util/util.dart';
import 'package:weather_wise/util/file_handle.dart';
import 'package:weather_wise/func/controller/local_page.dart';
import 'package:weather_wise/func/controller/setting_page.dart';

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
  }

  @override
  Widget build(BuildContext context) {
    // log(SettingPageController.isDay.value.toString());
    return Stack(
      children: [
        // SizedBox(
        //               height: kBottomNavigationBarHeight,
        //               child: ClipRect(
        //                 child: BackdropFilter(
        //                   filter: ImageFilter.blur(sigmaX: 0, sigmaY: 0),
        //                   child: Container(
        //                     color: Colors.black.withOpacity(0.0),
        //                     // decoration: BoxDecoration(
        //                     //   color: Colors.black.withOpacity(0.1)
        //                     // ),
        //                   ),
        //                 ),
        //               ),
        //             ),
        SettingPageController.isDay.value
            ? Util.getBackgroundImage(
                widget.weather,
                Size(widget.size.width, widget.size.height),
                false,
              )
            : Util.getBackgroundImage(
                widget.weather,
                Size(widget.size.width, widget.size.height),
              ),
        Align(
          alignment: Alignment.topCenter,
          child: AppBar(
            backgroundColor: Colors.transparent, // 為了保留後景顏色或透明
            elevation: 0,
            scrolledUnderElevation: 0,
            flexibleSpace: ClipRect(
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 0, sigmaY: 0),
                child: Container(color: Colors.black.withOpacity(0.1)),
              ),
            ),
            // backgroundColor: const Color(0xFF1C1933),
            leading: IconButton(
              onPressed: () => Util.openDrawer(context),
              icon: const Icon(Icons.menu, size: 26, color: Colors.white),
            ),
            title: Row(
              children: [
                const Icon(
                  Icons.location_on_outlined,
                  color: Colors.white,
                  size: 22,
                ),
                const SizedBox(width: 10),
                DropdownButton<String>(
                  items: LocalPageController.getDropDownMenuItems(),
                  onChanged: LocalPageController.onSelect,
                  value: LocalPageController.getDropDownMenuCurrentValue(),
                  dropdownColor: const Color(0xFF1C1933),
                  // dropdownColor: Color.fromRGBO(255, 255, 255, 255),
                  // dropdownColor: Colors.black,
                  // dropdownColor: Color.fromRGBO(0, 0, 0, 0.1),
                  icon: const Icon(Icons.arrow_drop_down, color: Colors.white),
                  underline: const SizedBox(),
                  elevation: 10,
                  // style: const TextStyle(color: Colors.white, fontSize: 16),
                ),
              ],
            ),
            actions: [
              IconButton(
                onPressed: () => HomePageCtrl.onValueChanged(4),
                icon: const Icon(Icons.settings, size: 26, color: Colors.white),
              ),
              const SizedBox(width: 10),
              // CupertinoButton(child: Icon(Icons.wallet), onPressed: () {})
            ],
          ),
        ),
        Util.isBirthDay() ? const Align(
          alignment: Alignment(-0.9, -0.7),
          child: Icon(Icons.cake_outlined, size: 28, color: Colors.amber),
        ) : const SizedBox(),
        Center(
          child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 0, sigmaY: 0),
              child: Container(
                decoration: BoxDecoration(
                  // color: Colors.black.withOpacity(0.05),
                  // border: Border.all(color: Colors.black.withOpacity(0.1), width: 1)
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    SizedBox(
                      // height: 200,
                      child: Util.getCurrentWeatherImage(
                        widget.weather,
                        const Size(200, 200),
                      ),
                    ),
                    Text(
                      "${isC() ? widget.weather.forecast[0].hour[DateTime.now().hour - 1].tempC.round() : widget.weather.forecast[0].hour[DateTime.now().hour - 1].tempF.round()}°",
                      style: const TextStyle(
                        fontSize: 48,
                        fontWeight: FontWeight.w700,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      '${LocalPageController.getDescription(widget.weather.forecast[0].hour[DateTime.now().hour - 1].condition.code, widget.weather.current.isDay)}\n'
                      '${Language.word('Highest')}: ${Util.tempIsC() ? widget.weather.forecast[0].day.maxTempC.round() : widget.weather.forecast[0].day.maxTempF.round()}°  '
                      '${Language.word('Lowest')}: ${Util.tempIsC() ? widget.weather.forecast[0].day.minTempC.round() : widget.weather.forecast[0].day.minTempF.round()}°',
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
            ),
          ),
        ),
        const Align(
          alignment: Alignment.topRight,
          child: Banner(
            message: 'Web Alpha',
            location: BannerLocation.topEnd,
            // color: Colors.lightBlue,
            // textStyle: TextStyle(
            //   // fontSize: 14
            // ),
          ),
        ),
      ],
    );
  }
}

// ? Column(
            //   children: [
            //     Container(
            //       width: widget.size.width,
            //       height: widget.size.height * 0.75,
            //       decoration: const BoxDecoration(
            //         gradient: LinearGradient(
            //           begin: Alignment.topLeft,
            //           end: Alignment.bottomRight,
            //           colors: [
            //             Color.fromRGBO(115, 140, 231, 1),
            //             Color.fromRGBO(101, 132, 217, 1),
            //             Color.fromRGBO(62, 64, 153, 1),
            //             Color.fromRGBO(37, 21, 105, 1),
            //             Color.fromRGBO(19, 5, 82, 1),
            //           ],
            //         ),
            //       ),
            //     ),
            //     ClipRRect(
            //       // borderRadius: BorderRadius.circular(20.0),
            //       child: BackdropFilter(
            //         filter: ImageFilter.blur(sigmaX: 75, sigmaY: 75),
            //         child: Container(color: Colors.black.withOpacity(0.2)),
            //       ),
            //     ),
            //   ],
            // )
