import 'package:flutter/material.dart';
import 'package:weather_wise/util/data/data.dart';
import 'package:weather_wise/util/language.dart';
import 'package:weather_wise/util/library.dart';

class DebugConsole extends StatefulWidget {
  const DebugConsole({super.key});

  @override
  State<DebugConsole> createState() => _DebugConsoleState();
}

class _DebugConsoleState extends State<DebugConsole> {
  // Move showLogo here, so its value persists across rebuilds:
  bool showLogo = false;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: const Color(0xFF00111F),
      appBar: AppBar(
        backgroundColor: const Color(0xFF00111F),
        title: const Text(
          'Debug Console',
          style: TextStyle(color: Colors.white),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    Switch(
                      value: Data.app.get<bool>('language'),
                      onChanged: (b) => Language.changeIndex(b, context),
                    ),

                    const SizedBox(height: 100),

                    Center(
                      child: FilledButton(
                        onPressed: () {
                          setState(() {
                            showLogo = !showLogo;
                          });
                        },
                        child: const Text('CAS'),
                      ),
                    ),

                    // Only show the GIF when showLogo == true
                    if (showLogo)
                      Image.asset(
                        'assets/image/logo_animation.gif',
                        width: size.width * 0.75,
                        height: size.width * 0.75,
                      ),
                    if (showLogo)
                      Image.asset(
                        'assets/image/logo_cas.png',
                        width: size.width * 0.75,
                        height: size.width * 0.75,
                      ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
