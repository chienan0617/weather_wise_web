import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:weather/util/library.dart';

class TodayInformation extends StatefulWidget {
  final Size size;

  const TodayInformation({super.key, required this.size});

  @override
  State<TodayInformation> createState() => _TodayInformationState();
}

class _TodayInformationState extends State<TodayInformation> {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        SizedBox(
          height: widget.size.height * 3 / 5,
          child: ColorGradient(size: widget.size),
        ),
        SizedBox(
          height: widget.size.height * 2 / 5,
          child: TodayForecast(size: widget.size),
        ),
      ],
    );
  }
}

class ColorGradient extends StatefulWidget {
  final Size size;
  const ColorGradient({super.key, required this.size});

  @override
  State<ColorGradient> createState() => _ColorGradientState();
}

class _ColorGradientState extends State<ColorGradient> {
  @override
  Widget build(BuildContext context) {
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
            child: Container(color: Colors.black.withOpacity(0.2)),
          ),
        ),
        // 中央的文字和圖示
        Align(
          child: Column(
            mainAxisSize: MainAxisSize.min, // 收紧到内容高度
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // <-- 上方图片
              SvgPicture.asset(
                'assets/weather/partly-cloudy-night-rain.svg',
                width: 200,
                height: 200,
                fit: BoxFit.cover,
              ),
              // const SizedBox(height: 12), // 图片和文字间距
              // <-- 温度文字 + 图标
              const Text(
                '27°',
                style: TextStyle(
                  fontSize: 48,
                  fontWeight: FontWeight.w700,
                  color: Colors.white,
                ),
              ),
              const Text(
                'H: 39° / L: 12° \n partly cloudy rain',
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
              const Text(
                'Taipei',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 18,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontFamily: 'Space Grotesk',
                ),
              ),
              IconButton(
                onPressed: () {},
                icon: const Icon(
                  Icons.arrow_drop_down,
                  color: Colors.white,
                  size: 20,
                ),
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

class TodayForecast extends StatefulWidget {
  final Size size;
  const TodayForecast({super.key, required this.size});

  @override
  State<TodayForecast> createState() => _TodayForecastState();
}

class _TodayForecastState extends State<TodayForecast> {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: widget.size.width,
      height: widget.size.height * 2 / 5,
      decoration: BoxDecoration(
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF161121),
            spreadRadius: 20,
            blurStyle: BlurStyle.outer,
          ),
        ],
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(75),
          topRight: Radius.circular(50),
        ),
        color: const Color(0xFF161121),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 30),
            child: const Text(
              'Today',
              style: TextStyle(fontSize: 16, color: Colors.white70),
            ),
          ),
          const Divider(indent: 15, endIndent: 15, thickness: 0.5, height: 20),
        ],
      ),
    );
  }
}

// Stack(
//       children: [
//         Align(
//           alignment: Alignment(0.625, -0.5),
//           child: Container(
//             width: 750, height: 200,
//             decoration: BoxDecoration(
//               color: Color.fromRGBO(97, 111, 192, 1)
//             ),
//             child: const SizedBox(),
//           ),
//         ),
//         Align(
//           alignment: Alignment(-0.625, 0.5),
//           child: Container(
//             width: 500, height: 200,
//             decoration: BoxDecoration(
//               color: Color.fromRGBO(21, 14, 109, 1)
//             ),
//             child: const SizedBox(),
//           ),
//         ),
//         ClipRect(
//           child: BackdropFilter(
//             filter: ImageFilter.blur(sigmaX: 75, sigmaY: 75),
//             child: Container(
//                   color: Colors.black.withOpacity(0.2),
//                 ),
//           ),
//         )
//       ],
//     );


// Padding(
        //   padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 20),
        //   child: const Align(
        //     alignment: Alignment(0, -1),
        //     child: TextField(
        //       decoration: InputDecoration(
        //         prefixIcon: Icon(
        //           Icons.search,
        //           color: Colors.white,
        //           size: 28,
        //         ),
        //         hintText: 'search for a city',
        //         hintStyle: TextStyle(
        //           color: Colors.white38,
        //           fontSize: 20,
        //           fontFamily: 'Space Grotesk',
        //           fontWeight: FontWeight.w500,
        //           height: 1.50,
        //         ),
        //       ),
        //       style: TextStyle(
        //         color: Colors.white,
        //         fontSize: 20,
        //         fontWeight: FontWeight.w500,
        //       ),
        //     ),
        //   ),
        // ),
