import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/tutorial.dart';
import 'package:weather_wise/page/home/home.m.dart';
import 'package:weather_wise/page/tutor/pages.dart';

class TutorPage extends StatefulWidget {
  const TutorPage({super.key});

  @override
  State<TutorPage> createState() => _TutorPageState();
}

class _TutorPageState extends State<TutorPage> {
  @override
  void initState() {
    TutorialController.pagesRefresh = () => setState(() {});
    TutorialController.changeToNormalPage = () {
      Navigator.push(context, MaterialPageRoute(
        builder: (context) => HomePage()
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
          onPressed: TutorialController.onSkipPressed,
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