import 'package:flutter/material.dart';
import 'package:weather_wise/util/file_handle.dart';
import 'package:weather_wise/util/library.dart';
import 'package:weather_wise/util/util.dart';

class PremiumPage extends StatefulWidget {
  const PremiumPage({super.key});

  @override
  State<PremiumPage> createState() => _PremiumPageState();
}

class _PremiumPageState extends State<PremiumPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1933),
        leading: IconButton(
          onPressed: () => Util.openDrawer(context),
          icon: const Icon(Icons.menu, color: style_0, size: 26),
        ),
        actions: [
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
        title: Text(
          Language.word('Premium'),
          textAlign: TextAlign.center,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 18,
            fontFamily: fontFamilyDefault,
            fontWeight: FontWeight.w700,
            height: 1.28,
          ),
        ),
      ),
    );
  }
}
