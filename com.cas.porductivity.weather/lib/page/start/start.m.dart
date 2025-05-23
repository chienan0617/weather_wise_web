import 'package:flutter/material.dart';
import 'package:weather/func/start/pages.ctrl.dart';
import 'package:weather/page/home/home.m.dart';
import 'package:weather/page/start/pages.dart';

class StartPageScreen extends StatefulWidget {
  const StartPageScreen({super.key});

  @override
  State<StartPageScreen> createState() => _StartPageScreenState();
}

class _StartPageScreenState extends State<StartPageScreen> {
  @override
  void initState() {
    IntroductionCtrl.pagesRefresh = () => setState(() {});
    IntroductionCtrl.changeToNormalPage = () {
      Navigator.push(context, MaterialPageRoute(
        builder: (context) => HomePageScreen()
      ));
    };
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF161121),
      appBar: AppBar(
        actionsPadding: const EdgeInsets.symmetric(horizontal: 5),
        backgroundColor: const Color(0xFF161121),
        title: const Text(
          'Weather',
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.white,
            fontSize: 18,
            fontFamily: 'Space Grotesk',
            fontWeight: FontWeight.w700,
            height: 1.28,
          ),
        ),
        leading: IconButton(
          onPressed: () {},
          icon: const Icon(Icons.menu, color: Colors.white, size: 26),
        ),
        actions: [
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.settings, color: Colors.white, size: 26),
          ),
        ],
      ),
      body: const Column(
        children: [
          SkipButton(),
          Expanded(child: IntroductionPage()),
          BottomBar()
        ],
      ),
    );
  }
}

class SkipButton extends StatelessWidget {
  const SkipButton({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: [
        TextButton(
          onPressed: IntroductionCtrl.onSkipPressed,
          child: const Text(
            'skip',
            style: TextStyle(
              color: Color(0xFFA393C6),
              fontFamily: 'Space Grotesk',
              fontWeight: FontWeight.w700,
              fontSize: 16,
            ),
          ),
        ),
        const SizedBox(width: 10),
      ],
    );
  }
}
