import 'package:flutter/material.dart';
import 'package:weather/func/start/pages.ctrl.dart';

class IntroductionPage extends StatefulWidget {
  const IntroductionPage({super.key});

  @override
  State<IntroductionPage> createState() => _IntroductionPageState();
}

class _IntroductionPageState extends State<IntroductionPage> {
  @override
  void initState() {
    super.initState();
    IntroductionCtrl.pagesRefresh = () => setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return IntroductionCtrl.getPage();
  }
}

const List<Widget> pages = [Page1(), SizedBox(), Page1(), SizedBox()];

class Page1 extends StatefulWidget {
  const Page1({super.key});

  @override
  State<Page1> createState() => _Page1State();
}

class _Page1State extends State<Page1> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(height: 100),
        const Text(
          'Welcome to WeatherWise',
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.white,
            fontSize: 22,
            fontFamily: 'Space Grotesk',
            fontWeight: FontWeight.w700,
            height: 1.25,
          ),
        ),
      ],
    );
  }
}

class BottomBar extends StatefulWidget {
  const BottomBar({super.key});

  @override
  State<BottomBar> createState() => _BottomBarState();
}

class _BottomBarState extends State<BottomBar> {
  @override
  void initState() {
    IntroductionCtrl.dotsRefresh = () => setState(() {});
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 30),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            spacing: 10,
            children: List.generate(pages.length, (int index) {
              return Container(
                width: 10,
                height: 10,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: Color(
                    IntroductionCtrl.isCurrentPage(index)
                        ? 0xFF5416DB
                        : 0xFF423366,
                  ),
                ),
              );
            }),
          ),
        ),
        TextButton(
          onPressed: IntroductionCtrl.nextPage,
          child: Container(
            alignment: Alignment.center,
            margin: const EdgeInsets.symmetric(horizontal: 20),
            width: MediaQuery.of(context).size.width,
            height: 48,
            decoration: BoxDecoration(
              color: const Color(0xFF5416DB),
              borderRadius: BorderRadius.circular(24),
            ),
            child: Text(
              IntroductionCtrl.isLastPage() ? 'Get Started' : 'Next',
              textAlign: TextAlign.center,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 16,
                fontFamily: 'Space Grotesk',
                fontWeight: FontWeight.w700,
                height: 1.50,
              ),
            ),
          ),
        ),
        const SizedBox(height: 20)
      ],
    );
  }
}
