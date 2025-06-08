import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/setting_page.dart';
import 'package:weather_wise/util/language.dart';
import 'package:weather_wise/util/library.dart';

class SettingPage extends StatefulWidget {
  const SettingPage({super.key});

  @override
  State<SettingPage> createState() => _SettingPageState();
}

class _SettingPageState extends State<SettingPage> {
  @override
  void initState() {
    super.initState();
    SettingPageController.refresh = () => setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1933),
        leading: IconButton(
          onPressed: () {},
          icon: const Icon(Icons.menu, color: style_0, size: 26),
        ),
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
      body: Column(
        children: [
          title('Unit'),
          section(
            'Weather Units',
            'weather format',
            DropdownButton<String>(
              items: SettingPageController.tempType.getItems(),
              onChanged: SettingPageController.tempType.onValueChanged,
              value: SettingPageController.tempType.currentValue,
              dropdownColor: Color.fromRGBO(0, 0, 0, 128),
              icon: const Icon(
                Icons.arrow_drop_down,
                color: Colors.white,
                size: 30,
              ),
              underline: const SizedBox(),
            ),
          ),
          section(
            'Is day',
            'Next',
            DropdownButton<String>(
              items: SettingPageController.backgroundType.getItems(),
              onChanged: SettingPageController.backgroundType.onValueChanged,
              value: SettingPageController.backgroundType.currentValue,
              dropdownColor: Color.fromRGBO(0, 0, 0, 128),
              icon: const Icon(
                Icons.arrow_drop_down,
                color: Colors.white,
                size: 30,
              ),
              underline: const SizedBox(),
            ),
          ),
          section(
            'Is day',
            'subtitle',
            Switch(
              value: SettingPageController.isDay.value,
              onChanged: SettingPageController.isDay.onValueChanged,
            ),
          ),
          divider(),
        ],
      ),
    );
  }

  Widget section(String title, String subtitle, Widget trailing) {
    return ListTile(
      contentPadding: const EdgeInsets.symmetric(horizontal: 25, vertical: 5),
      title: Text(
        Language.word(title),
        style: const TextStyle(
          color: Colors.white,
          fontSize: 18,
          fontFamily: fontFamilyDefault,
          fontWeight: FontWeight.w500,
        ),
      ),
      subtitle: Text(
        Language.word(subtitle),
        style: const TextStyle(
          color: Colors.white70,
          fontFamily: fontFamilyDefault,
          fontSize: 15,
        ),
      ),
      trailing: trailing,
    );
  }

  Widget title(String text) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 10),
      child: Row(
        children: [
          Text(
            Language.word(text),
            // textAlign: TextAlign.right,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontFamily: fontFamilyDefault,
              fontWeight: FontWeight.w500,
            ),
          ),
        ],
      ),
    );
  }

  Widget divider() {
    return Divider(thickness: 0.25, indent: 15, endIndent: 15);
  }
}

// class DebugConsole extends StatefulWidget {
//   const DebugConsole({super.key});

//   @override
//   State<DebugConsole> createState() => _DebugConsoleState();
// }

// class _DebugConsoleState extends State<DebugConsole> {
//   // Move showLogo here, so its value persists across rebuilds:
//   bool showLogo = false;

//   @override
//   Widget build(BuildContext context) {
//     Size size = MediaQuery.of(context).size;

//     return Scaffold(
//       backgroundColor: const Color(0xFF00111F),
//       appBar: AppBar(
//         backgroundColor: const Color(0xFF00111F),
//         title: const Text(
//           'Debug Console',
//           style: TextStyle(color: Colors.white),
//         ),
//       ),
//       body: Padding(
//         padding: const EdgeInsets.all(16.0),
//         child: Column(
//           crossAxisAlignment: CrossAxisAlignment.start,
//           children: [
//             Expanded(
//               child: SingleChildScrollView(
//                 child: Column(
//                   children: [
//                     Switch(
//                       value: Data.app.get<bool>('language'),
//                       onChanged: (b) => Language.changeIndex(b, context),
//                     ),

//                     const SizedBox(height: 100),

//                     Center(
//                       child: FilledButton(
//                         onPressed: () {
//                           setState(() {
//                             showLogo = !showLogo;
//                           });
//                         },
//                         child: const Text('CAS'),
//                       ),
//                     ),

//                     // Only show the GIF when showLogo == true
//                     if (showLogo)
//                       Image.asset(
//                         'assets/image/logo_animation.gif',
//                         width: size.width * 0.75,
//                         height: size.width * 0.75,
//                       ),
//                     if (showLogo)
//                       Image.asset(
//                         'assets/image/logo_cas.png',
//                         width: size.width * 0.75,
//                         height: size.width * 0.75,
//                       ),
//                   ],
//                 ),
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }
// }
