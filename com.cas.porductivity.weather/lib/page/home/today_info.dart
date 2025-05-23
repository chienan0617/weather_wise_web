import 'dart:ui';

import 'package:flutter/material.dart';

class TodayInformation extends StatefulWidget {
  const TodayInformation({super.key});

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
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height * 0.5,
          child: ColorGradient(),
        ),
      ],
    );
  }
}

class ColorGradient extends StatefulWidget {
  const ColorGradient({super.key});

  @override
  State<ColorGradient> createState() => _ColorGradientState();
}

class _ColorGradientState extends State<ColorGradient> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Stack(
      children: [
        // 背景漸層
        Container(
          width: size.width,
          height: size.height * 0.75,
          decoration: BoxDecoration(
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
        Center(
          child: Column(
            mainAxisSize: MainAxisSize.min, // 收紧到内容高度
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // <-- 上方图片
              Image.asset(
                'assets/rainy.png',
                // width: 80,
                // height: 80,
                fit: BoxFit.cover,
                scale: 15,
              ),
              SizedBox(height: 12), // 图片和文字间距
              // <-- 温度文字 + 图标
              Text(
                '27°',
                style: TextStyle(
                  fontSize: 48,
                  fontWeight: FontWeight.w700,
                  color: Colors.white,
                ),
              ),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 20),
          child: Align(
            alignment: Alignment(0, -1),
            child: TextField(
              decoration: InputDecoration(
                prefixIcon: const Icon(
                  Icons.search,
                  color: Colors.white,
                  size: 28,
                ),
                hintText: 'search for a city',
                hintStyle: const TextStyle(
                  color: Colors.white38,
                  fontSize: 20,
                  fontFamily: 'Space Grotesk',
                  fontWeight: FontWeight.w500,
                  height: 1.50,
                ),
              ),
              style: const TextStyle(
                color: Colors.white,
                fontSize: 20,
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        ),
      ],
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
