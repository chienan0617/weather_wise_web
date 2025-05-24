import 'package:flutter/material.dart';
import 'package:weather/page/home/today_info.dart';

class LocalPageScreen extends StatefulWidget {
  const LocalPageScreen({super.key});

  @override
  State<LocalPageScreen> createState() => _LocalPageScreenState();
}

class _LocalPageScreenState extends State<LocalPageScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF1C1121),
      // appBar: AppBar(
      //   backgroundColor: const Color(0xFF1C1121),
      // ),
      body: LayoutBuilder(
          builder: (context, cons) {
            return TodayInformation(size: Size(cons.maxWidth, cons.maxHeight));
          },
        ),
    );
  }
}
