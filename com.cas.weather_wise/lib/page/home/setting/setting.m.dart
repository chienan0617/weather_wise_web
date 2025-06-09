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