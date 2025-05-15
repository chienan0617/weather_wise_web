import 'package:flutter/material.dart';
import 'package:tasker/util/data/data.dart';

// * Theme data

List<int> get primaryColor {
  var primaryColorString = Data.app.getMap(T.setting)["primaryColor"] as String;
  return primaryColorString
    .split(',')
    .map((s) => int.parse(s.trim()))
    .toList();
}

Color _primaryColor = hexColor("#028C6A");
Color _secondaryColor = Color.fromRGBO(211, 194, 42, 1);
Color _errorColor = Colors.redAccent;
Color get primary => _primaryColor;
Color secondary() => _secondaryColor;
Color errorColor() => _errorColor;

Color light({int o = 0}) =>
  Color.fromRGBO(232 - o, 232 - o, 232 - o, 1);

Color dark({int o = 0}) =>
  Color.fromRGBO(24 + o, 24 + o, 24 + o, 1);

TextStyle textStyle({double size = 20, int os = 0, bool op = true, n = false}) =>
  TextStyle(color: style(os: os, op: op, n: n), fontSize: size);

Text text(String text, {double size = 16, FontWeight w = FontWeight.normal, os = -12, ml = 1}) =>
  Text(text, style: TextStyle(fontSize: size, color: style(os: os), fontWeight: w), maxLines: ml);

Icon icon(IconData icon, {double size = 20}) =>
  Icon(icon, size: size, color: style());

FittedBox getErrorBox(String text, {color = Colors.red}) => FittedBox(
  child: Container(
    color: color,
    child: Text(text, style: TextStyle(color: Colors.white)),
  ),
);
IconThemeData getIconThemeData(
  double size, [
  Color? color,
  op = true,
]) => IconThemeData(size: size, color: color ?? style());

Color style({bool op = true, int os = -12, bool n = false}) {
  if (n) {
    return op
      ? (System.darkMode ? light(o: os) : hexColor("#151922", os: os))
      : (System.darkMode ? hexColor("#151922", os: os) : light(o: os));
  } else {
    return op
      ? (System.darkMode ? hexColor("#F2F8FB", os: os) : dark(o: os))
      : (System.darkMode ? dark(o: os) : hexColor("#F2F8FB", os: os));
  }
}

Color decideStyle(Color color) =>
  (color.r * 255 + color.g * 255 + color.b * 255 > 142 * 3)
    ? dark() : light();

Color primaryStyle() =>
  _primaryColor.r + _primaryColor.g + _primaryColor.b > 0.45 * 3
    ? dark() : light();

Container divider({
  double height = 0.5,
  double w = 20,
  double v = 5,
  // EdgeInsets edge = const EdgeInsets.fromLTRB(w, 0, w, 0),
  EdgeInsets mar = const EdgeInsets.symmetric(horizontal: 2.5),
}) => Container(
  margin: mar,
  child: Container(
    height: height.toDouble(),
    color: Colors.grey,
    margin: EdgeInsets.symmetric(horizontal: w, vertical: v),
  ),
);

void setPrimaryColor(Color color) {
  _primaryColor = color;
  var t = Data.app.getMap(T.setting);
  t["primaryColor"] =
      "${color.alpha},${color.red},${color.green},${color.blue}";
  Data.app.storeMap(T.setting, t);
}

void setSecondaryColor(Color color) => _secondaryColor = color;
void setErrorColor(Color color) => _errorColor = color;

Color hexColor(String hex, {int os = 0}) {
  hex = hex.replaceAll('#', '');
  if (hex.length == 6) {
    hex = 'FF$hex';
  }
  if (hex.length == 8) {
    Color baseColor = Color(int.parse('0x$hex'));
    return adjustColor(baseColor, os);
  }
  return Colors.transparent;
}

EdgeInsets edge({
    double h = 0, double v = 0
  }) {
    return EdgeInsets.symmetric(
      horizontal: h,
      vertical: v,
    );
  }

Color adjustColor(Color color, int os) {
  int r = (color.red + os).clamp(0, 255).toInt();
  int g = (color.green + os).clamp(0, 255).toInt();
  int b = (color.blue + os).clamp(0, 255).toInt();
  return Color.fromARGB(color.alpha, r, g, b);
}

Color colorStyle(Color color, [int os = 12]) {
  return (color.r + color.g + color.b) > 0.5 * 3 ? dark(o: os) : light(o: os);
}

// ignore: unused_element
Color _getOppositeColor(String hex) {
  Color color = hexColor(hex);
  int r = 255 - color.red;
  int g = 255 - color.green;
  int b = 255 - color.blue;
  return Color.fromARGB(color.alpha, r, g, b);
}

String rgba32ToHex(int rgba) {
  int r = (rgba >> 24) & 0xFF;
  int g = (rgba >> 16) & 0xFF;
  int b = (rgba >> 8) & 0xFF;
  int a = rgba & 0xFF;

  return '#${r.toRadixString(16).padLeft(2, '0')}${g.toRadixString(16).padLeft(2, '0')}${b.toRadixString(16).padLeft(2, '0')}${a.toRadixString(16).padLeft(2, '0')}';
}

int hexToRgba32(String hex) {
  hex = hex.replaceFirst('#', '');

  int r = int.parse(hex.substring(0, 2), radix: 16);
  int g = int.parse(hex.substring(2, 4), radix: 16);
  int b = int.parse(hex.substring(4, 6), radix: 16);
  int a = int.parse(hex.substring(6, 8), radix: 16);

  return (r << 24) | (g << 16) | (b << 8) | a;
}

void e() {}

ListTile getListTile(IconData leading, String title, {leadingSize = 20.0, titleSize = 20.0, IconData trailing = Icons.abc, trailingSize = 20.0, Function trailingFunc = e}) {
  return ListTile(
    leading: Icon(
      leading,
      color: style(),
      size: leadingSize,
    ),
    title: Text(
      title,
      style: TextStyle(
        color: style(),
        fontSize: titleSize
      ),
    ),
    trailing: (trailing == Icons.abc)
      ? Container()
      : IconButton(
        onPressed: () {
          trailingFunc();
        },
        icon: Icon(
          trailing,
          color: style(),
          size: trailingSize,
        )
    )
  );
}

// * Store Type

class T {
  static final String currentWindowIndex = "currentWindowIndex";
  static final String setting = "setting";
  static final String task = "task";
  static final String calendarRepeat = "calendarRepeat";
}

// * information

class System {
  static const bool darkMode = true;
  static String version = ""; // Beta 1.1.2
  static bool debugMode = true;
}

class A {
  static ThemeData get themeData => ThemeData(
    primaryColor: primary,
    primaryColorLight: primary,
    primaryColorDark: primary,
    hoverColor: Color.fromRGBO(192, 192, 192, 1),
    splashColor: style(op: false),
    highlightColor: style(op: false),
    scaffoldBackgroundColor: style(op: false),
    colorScheme: ColorScheme.fromSwatch().copyWith(secondary: primary),
    hintColor: Color.fromRGBO(128, 128, 128, 1),
    appBarTheme: AppBarTheme(
      // shadowColor: primary,
      // foregroundColor: primary,
      surfaceTintColor: primary,
      actionsIconTheme: getIconThemeData(32),
      backgroundColor: style(n: true, op: false, os: -6),
      titleTextStyle: TextStyle(
        fontSize: 32,
        fontWeight: FontWeight.w700,
        color: style(),
      ),
    ),
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      backgroundColor: primary,
      focusColor: style(os: 96),
      splashColor: style(os: 64),
      hoverColor: style(os: 48),
      shape: CircleBorder(),
    ),
    bottomNavigationBarTheme: BottomNavigationBarThemeData(
      backgroundColor: style(op: false, n: true, os: 6),
      selectedIconTheme: IconThemeData(color: primary),
      unselectedIconTheme: getIconThemeData(24),
      selectedItemColor: primary,
      unselectedItemColor: style(),
    ),
    inputDecorationTheme: InputDecorationTheme(
      border: InputBorder.none,
      enabledBorder: InputBorder.none,
      focusedBorder: InputBorder.none,
      errorBorder: UnderlineInputBorder(
        borderSide: BorderSide(color: Colors.red, width: 1),
      ),
      contentPadding: EdgeInsets.symmetric(vertical: 8),
      hintStyle: TextStyle(fontSize: 16, color: style(os: 48)),
      focusColor: Colors.deepPurpleAccent,
      hoverColor: Colors.blueAccent,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(),
  );
}

const darkMode = true;

const style_0 = Color(darkMode ? 0xFFf8f8f8 : 0xFF000000);
const style_8 = Color(darkMode ? 0xFFf0f0f0 : 0xFF080808);
const style_16 = Color(darkMode ? 0xFFe8e8e8 : 0xFF101010);
const style_24 = Color(darkMode ? 0xFFe0e0e0 : 0xFF181818);
const style_32 = Color(darkMode ? 0xFFd8d8d8 : 0xFF202020);
const style_40 = Color(darkMode ? 0xFFd0d0d0 : 0xFF282828);
const style_48 = Color(darkMode ? 0xFFc8c8c8 : 0xFF303030);
const style_56 = Color(darkMode ? 0xFFc0c0c0 : 0xFF383838);
const style_64 = Color(darkMode ? 0xFFb8b8b8 : 0xFF404040);
const style_72 = Color(darkMode ? 0xFFb0b0b0 : 0xFF484848);
const style_80 = Color(darkMode ? 0xFFa8a8a8 : 0xFF505050);
const style_88 = Color(darkMode ? 0xFFa0a0a0 : 0xFF585858);
const style_96 = Color(darkMode ? 0xFF989898 : 0xFF606060);
const style_104 = Color(darkMode ? 0xFF909090 : 0xFF686868);
const style_112 = Color(darkMode ? 0xFF888888 : 0xFF707070);
const style_120 = Color(darkMode ? 0xFF808080 : 0xFF787878);
const style_128 = Color(darkMode ? 0xFF787878 : 0xFF808080);
const style_136 = Color(darkMode ? 0xFF707070 : 0xFF888888);
const style_144 = Color(darkMode ? 0xFF686868 : 0xFF909090);
const style_152 = Color(darkMode ? 0xFF606060 : 0xFF989898);
const style_160 = Color(darkMode ? 0xFF585858 : 0xFFA0A0A0);
const style_168 = Color(darkMode ? 0xFF505050 : 0xFFA8A8A8);
const style_176 = Color(darkMode ? 0xFF484848 : 0xFFB0B0B0);
const style_184 = Color(darkMode ? 0xFF404040 : 0xFFB8B8B8);
const style_192 = Color(darkMode ? 0xFF383838 : 0xFFC0C0C0);
const style_200 = Color(darkMode ? 0xFF303030 : 0xFFC8C8C8);
const style_208 = Color(darkMode ? 0xFF282828 : 0xFFD0D0D0);
const style_216 = Color(darkMode ? 0xFF202020 : 0xFFD8D8D8);
const style_224 = Color(darkMode ? 0xFF181818 : 0xFFE0E0E0);
const style_232 = Color(darkMode ? 0xFF101010 : 0xFFE8E8E8);
const style_240 = Color(darkMode ? 0xFF080808 : 0xFFF0F0F0);
const style_248 = Color(darkMode ? 0xFF000000 : 0xFFF8F8F8);


const style_0p = Color(!darkMode ? 0xFFf8f8f8 : 0xFF000000);
const style_8p = Color(!darkMode ? 0xFFf0f0f0 : 0xFF080808);
const style_16p = Color(!darkMode ? 0xFFe8e8e8 : 0xFF101010);
const style_24p = Color(!darkMode ? 0xFFe0e0e0 : 0xFF181818);
const style_32p = Color(!darkMode ? 0xFFd8d8d8 : 0xFF202020);
const style_40p = Color(!darkMode ? 0xFFd0d0d0 : 0xFF282828);
const style_48p = Color(!darkMode ? 0xFFc8c8c8 : 0xFF303030);
const style_56p = Color(!darkMode ? 0xFFc0c0c0 : 0xFF383838);
const style_64p = Color(!darkMode ? 0xFFb8b8b8 : 0xFF404040);
const style_72p = Color(!darkMode ? 0xFFb0b0b0 : 0xFF484848);
const style_80p = Color(!darkMode ? 0xFFa8a8a8 : 0xFF505050);
const style_88p = Color(!darkMode ? 0xFFa0a0a0 : 0xFF585858);
const style_96p = Color(!darkMode ? 0xFF989898 : 0xFF606060);
const style_104p = Color(!darkMode ? 0xFF909090 : 0xFF686868);
const style_112p = Color(!darkMode ? 0xFF888888 : 0xFF707070);
const style_120p = Color(!darkMode ? 0xFF808080 : 0xFF787878);
const style_128p = Color(!darkMode ? 0xFF787878 : 0xFF808080);
const style_136p = Color(!darkMode ? 0xFF707070 : 0xFF888888);
const style_144p = Color(!darkMode ? 0xFF686868 : 0xFF909090);
const style_152p = Color(!darkMode ? 0xFF606060 : 0xFF989898);
const style_160p = Color(!darkMode ? 0xFF585858 : 0xFFA0A0A0);
const style_168p = Color(!darkMode ? 0xFF505050 : 0xFFA8A8A8);
const style_176p = Color(!darkMode ? 0xFF484848 : 0xFFB0B0B0);
const style_184p = Color(!darkMode ? 0xFF404040 : 0xFFB8B8B8);
const style_192p = Color(!darkMode ? 0xFF383838 : 0xFFC0C0C0);
const style_200p = Color(!darkMode ? 0xFF303030 : 0xFFC8C8C8);
const style_208p = Color(!darkMode ? 0xFF282828 : 0xFFD0D0D0);
const style_216p = Color(!darkMode ? 0xFF202020 : 0xFFD8D8D8);
const style_224p = Color(!darkMode ? 0xFF181818 : 0xFFE0E0E0);
const style_232p = Color(!darkMode ? 0xFF101010 : 0xFFE8E8E8);
const style_240p = Color(!darkMode ? 0xFF080808 : 0xFFF0F0F0);
const style_248p = Color(!darkMode ? 0xFF000000 : 0xFFF8F8F8);

const style_n0 = Color(darkMode ? 0xFFF2F8FB : 0xFF151922);
const style_n8 = Color(darkMode ? 0xFFEAF0F4 : 0xFF1C2029);
const style_n16 = Color(darkMode ? 0xFFE3E9ED : 0xFF232730);
const style_n24 = Color(darkMode ? 0xFFDCE2E6 : 0xFF2A2E37);
const style_n32 = Color(darkMode ? 0xFFD5DBDF : 0xFF31353E);
const style_n40 = Color(darkMode ? 0xFFCED4D8 : 0xFF383C45);
const style_n48 = Color(darkMode ? 0xFFC7CCD1 : 0xFF3F444C);
const style_n56 = Color(darkMode ? 0xFFC0C5CA : 0xFF464B53);
const style_n64 = Color(darkMode ? 0xFFB8BEC3 : 0xFF4E525A);
const style_n72 = Color(darkMode ? 0xFFB1B7BC : 0xFF555961);
const style_n80 = Color(darkMode ? 0xFFAAB0B5 : 0xFF5C6068);
const style_n88 = Color(darkMode ? 0xFFA3A8AE : 0xFF63686F);
const style_n96 = Color(darkMode ? 0xFF9CA1A7 : 0xFF6A6F76);
const style_n104 = Color(darkMode ? 0xFF959AA0 : 0xFF71767C);
const style_n112 = Color(darkMode ? 0xFF8E9399 : 0xFF787D84);
const style_n120 = Color(darkMode ? 0xFF878C92 : 0xFF7F848B);
const style_n128 = Color(darkMode ? 0xFF7F848B : 0xFF878C92);
const style_n136 = Color(darkMode ? 0xFF787D84 : 0xFF8E9399);
const style_n144 = Color(darkMode ? 0xFF71767D : 0xFF959AA0);
const style_n152 = Color(darkMode ? 0xFF6A6F76 : 0xFF9CA1A7);
const style_n160 = Color(darkMode ? 0xFF63686F : 0xFFA3A8AE);
const style_n168 = Color(darkMode ? 0xFF5C6068 : 0xFFAAB0B5);
const style_n176 = Color(darkMode ? 0xFF555961 : 0xFFB1B7BC);
const style_n184 = Color(darkMode ? 0xFF4E525A : 0xFFB8BEC3);
const style_n192 = Color(darkMode ? 0xFF464B53 : 0xFFC0C5CA);
const style_n200 = Color(darkMode ? 0xFF3F444C : 0xFFC7CCD1);
const style_n208 = Color(darkMode ? 0xFF383C45 : 0xFFCED4D7);
const style_n216 = Color(darkMode ? 0xFF31353E : 0xFFD5DBDF);
const style_n224 = Color(darkMode ? 0xFF2A2E37 : 0xFFDCE2E6);
const style_n232 = Color(darkMode ? 0xFF232730 : 0xFFE3E9ED);
const style_n240 = Color(darkMode ? 0xFF1C2029 : 0xFFEAF0F4);
const style_n248 = Color(darkMode ? 0xFF151922 : 0xFFF2F8FB);


const style_n0p = Color(!darkMode ? 0xFFF2F8FB : 0xFF151922);
const style_n8p = Color(!darkMode ? 0xFFEAF0F4 : 0xFF1C2029);
const style_n16p = Color(!darkMode ? 0xFFE3E9ED : 0xFF232730);
const style_n24p = Color(!darkMode ? 0xFFDCE2E6 : 0xFF2A2E37);
const style_n32p = Color(!darkMode ? 0xFFD5DBDF : 0xFF31353E);
const style_n40p = Color(!darkMode ? 0xFFCED4D8 : 0xFF383C45);
const style_n48p = Color(!darkMode ? 0xFFC7CCD1 : 0xFF3F444C);
const style_n56p = Color(!darkMode ? 0xFFC0C5CA : 0xFF464B53);
const style_n64p = Color(!darkMode ? 0xFFB8BEC3 : 0xFF4E525A);
const style_n72p = Color(!darkMode ? 0xFFB1B7BC : 0xFF555961);
const style_n80p = Color(!darkMode ? 0xFFAAB0B5 : 0xFF5C6068);
const style_n88p = Color(!darkMode ? 0xFFA3A8AE : 0xFF63686F);
const style_n96p = Color(!darkMode ? 0xFF9CA1A7 : 0xFF6A6F76);
const style_n104p = Color(!darkMode ? 0xFF959AA0 : 0xFF71767C);
const style_n112p = Color(!darkMode ? 0xFF8E9399 : 0xFF787D84);
const style_n120p = Color(!darkMode ? 0xFF878C92 : 0xFF7F848B);
const style_n128p = Color(!darkMode ? 0xFF7F848B : 0xFF878C92);
const style_n136p = Color(!darkMode ? 0xFF787D84 : 0xFF8E9399);
const style_n144p = Color(!darkMode ? 0xFF71767D : 0xFF959AA0);
const style_n152p = Color(!darkMode ? 0xFF6A6F76 : 0xFF9CA1A7);
const style_n160p = Color(!darkMode ? 0xFF63686F : 0xFFA3A8AE);
const style_n168p = Color(!darkMode ? 0xFF5C6068 : 0xFFAAB0B5);
const style_n176p = Color(!darkMode ? 0xFF555961 : 0xFFB1B7BC);
const style_n184p = Color(!darkMode ? 0xFF4E525A : 0xFFB8BEC3);
const style_n192p = Color(!darkMode ? 0xFF464B53 : 0xFFC0C5CA);
const style_n200p = Color(!darkMode ? 0xFF3F444C : 0xFFC7CCD1);
const style_n208p = Color(!darkMode ? 0xFF383C45 : 0xFFCED4D7);
const style_n216p = Color(!darkMode ? 0xFF31353E : 0xFFD5DBDF);
const style_n224p = Color(!darkMode ? 0xFF2A2E37 : 0xFFDCE2E6);
const style_n232p = Color(!darkMode ? 0xFF232730 : 0xFFE3E9ED);
const style_n240p = Color(!darkMode ? 0xFF1C2029 : 0xFFEAF0F4);
const style_n248p = Color(!darkMode ? 0xFF151922 : 0xFFF2F8FB);