import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/tutorial.dart';
import 'package:weather_wise/page/home/home.m.dart';
import 'package:weather_wise/page/tutor/pages.dart';
import 'package:weather_wise/util/language.dart';
import 'package:weather_wise/util/library.dart';

class TutorPage extends StatefulWidget {
  const TutorPage({super.key});

  @override
  State<TutorPage> createState() => _TutorPageState();
}

class _TutorPageState extends State<TutorPage> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: const Color(0xFF161121),
        appBar: AppBar(
          actionsPadding: const EdgeInsets.symmetric(horizontal: 5),
          backgroundColor: const Color(0xFF161121),
          title: Text(
            Language.word('Introduction Page'),
            textAlign: TextAlign.center,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 18,
              fontFamily: fontFamilyDefault,
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
        body: Builder(
          builder: (context) {
            TutorialController.pagesRefresh = () => setState(() {});
            TutorialController.changeToNormalPage = () {
              Navigator.pop(context);
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => HomePage()),
              );
            };

            return const Column(
              children: [
                SkipButton(),
                Expanded(child: IntroductionPage()),
                BottomBar(),
              ],
            );
          },
        ),
      ),
    );
  }
}

class SkipButton extends StatelessWidget {
  const SkipButton({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        // Text(
        //   Language.word('Introduction Page'),
        //   style: const TextStyle(
        //     color: Colors.white,
        //     fontFamily: fontFamilyDefault,
        //     fontWeight: FontWeight.w500,
        //     fontSize: 24,
        //   ),
        // ),
        const SizedBox(),
        TextButton(
          onPressed: TutorialController.onSkipPressed,
          child: Text(
            Language.word('Skip'),
            style: const TextStyle(
              color: Color(0xFFA393C6),
              fontFamily: fontFamilyDefault,
              fontWeight: FontWeight.w700,
              fontSize: 16,
            ),
          ),
        ),
        // const SizedBox(width: 10),
      ],
    );
  }
}
