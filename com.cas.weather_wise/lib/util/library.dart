import 'package:flutter/material.dart';
import 'package:weather_wise/util/language.dart';
import 'package:weather_wise/util/service/weather.mod.dart';

const darkMode = true;

const style_0 = Color(darkMode ? 0xFFf8f8f8 : 0xFF000000);
const style_4 = Color(darkMode ? 0xFFf8f8f4 : 0xFF000004);
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
const style_4p = Color(!darkMode ? 0xFFf8f8f4 : 0xFF000004);
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

// ignore: constant_identifier_names
const style_n0 = Color(darkMode ? 0xFFF2F8FB : 0xFF151922);
// ignore: constant_identifier_names
const style_n4 = Color(darkMode ? 0xFFF2F8F8 : 0xFF151926);
// ignore: constant_identifier_names
const style_n8 = Color(darkMode ? 0xFFEAF0F4 : 0xFF1C2029);
// ignore: constant_identifier_names
const style_n16 = Color(darkMode ? 0xFFE3E9ED : 0xFF232730);
// ignore: constant_identifier_names
const style_n24 = Color(darkMode ? 0xFFDCE2E6 : 0xFF2A2E37);
// ignore: constant_identifier_names
const style_n32 = Color(darkMode ? 0xFFD5DBDF : 0xFF31353E);
// ignore: constant_identifier_names
const style_n40 = Color(darkMode ? 0xFFCED4D8 : 0xFF383C45);
// ignore: constant_identifier_names
const style_n48 = Color(darkMode ? 0xFFC7CCD1 : 0xFF3F444C);
// ignore: constant_identifier_names
const style_n56 = Color(darkMode ? 0xFFC0C5CA : 0xFF464B53);
// ignore: constant_identifier_names
const style_n64 = Color(darkMode ? 0xFFB8BEC3 : 0xFF4E525A);
// ignore: constant_identifier_names
const style_n72 = Color(darkMode ? 0xFFB1B7BC : 0xFF555961);
// ignore: constant_identifier_names
const style_n80 = Color(darkMode ? 0xFFAAB0B5 : 0xFF5C6068);
// ignore: constant_identifier_names
const style_n88 = Color(darkMode ? 0xFFA3A8AE : 0xFF63686F);
// ignore: constant_identifier_names
const style_n96 = Color(darkMode ? 0xFF9CA1A7 : 0xFF6A6F76);
// ignore: constant_identifier_names
const style_n104 = Color(darkMode ? 0xFF959AA0 : 0xFF71767C);
// ignore: constant_identifier_names
const style_n112 = Color(darkMode ? 0xFF8E9399 : 0xFF787D84);
// ignore: constant_identifier_names
const style_n120 = Color(darkMode ? 0xFF878C92 : 0xFF7F848B);
// ignore: constant_identifier_names
const style_n128 = Color(darkMode ? 0xFF7F848B : 0xFF878C92);
// ignore: constant_identifier_names
const style_n136 = Color(darkMode ? 0xFF787D84 : 0xFF8E9399);
// ignore: constant_identifier_names
const style_n144 = Color(darkMode ? 0xFF71767D : 0xFF959AA0);
// ignore: constant_identifier_names
const style_n152 = Color(darkMode ? 0xFF6A6F76 : 0xFF9CA1A7);
// ignore: constant_identifier_names
const style_n160 = Color(darkMode ? 0xFF63686F : 0xFFA3A8AE);
// ignore: constant_identifier_names
const style_n168 = Color(darkMode ? 0xFF5C6068 : 0xFFAAB0B5);
// ignore: constant_identifier_names
const style_n176 = Color(darkMode ? 0xFF555961 : 0xFFB1B7BC);
// ignore: constant_identifier_names
const style_n184 = Color(darkMode ? 0xFF4E525A : 0xFFB8BEC3);
// ignore: constant_identifier_names
const style_n192 = Color(darkMode ? 0xFF464B53 : 0xFFC0C5CA);
// ignore: constant_identifier_names
const style_n200 = Color(darkMode ? 0xFF3F444C : 0xFFC7CCD1);
// ignore: constant_identifier_names
const style_n208 = Color(darkMode ? 0xFF383C45 : 0xFFCED4D7);
// ignore: constant_identifier_names
const style_n216 = Color(darkMode ? 0xFF31353E : 0xFFD5DBDF);
// ignore: constant_identifier_names
const style_n224 = Color(darkMode ? 0xFF2A2E37 : 0xFFDCE2E6);
// ignore: constant_identifier_names
const style_n232 = Color(darkMode ? 0xFF232730 : 0xFFE3E9ED);
// ignore: constant_identifier_names
const style_n240 = Color(darkMode ? 0xFF1C2029 : 0xFFEAF0F4);
// ignore: constant_identifier_names
const style_n248 = Color(darkMode ? 0xFF151922 : 0xFFF2F8FB);
// ignore: constant_identifier_names

// ignore: constant_identifier_names
const style_n0p = Color(!darkMode ? 0xFFF2F8FB : 0xFF151922);
// ignore: constant_identifier_names
const style_n4p = Color(!darkMode ? 0xFFF2F8F8 : 0xFF151926);
// ignore: constant_identifier_names
const style_n8p = Color(!darkMode ? 0xFFEAF0F4 : 0xFF1C2029);
// ignore: constant_identifier_names
const style_n16p = Color(!darkMode ? 0xFFE3E9ED : 0xFF232730);
// ignore: constant_identifier_names
const style_n24p = Color(!darkMode ? 0xFFDCE2E6 : 0xFF2A2E37);
// ignore: constant_identifier_names
const style_n32p = Color(!darkMode ? 0xFFD5DBDF : 0xFF31353E);
// ignore: constant_identifier_names
const style_n40p = Color(!darkMode ? 0xFFCED4D8 : 0xFF383C45);
// ignore: constant_identifier_names
const style_n48p = Color(!darkMode ? 0xFFC7CCD1 : 0xFF3F444C);
// ignore: constant_identifier_names
const style_n56p = Color(!darkMode ? 0xFFC0C5CA : 0xFF464B53);
// ignore: constant_identifier_names
const style_n64p = Color(!darkMode ? 0xFFB8BEC3 : 0xFF4E525A);
// ignore: constant_identifier_names
const style_n72p = Color(!darkMode ? 0xFFB1B7BC : 0xFF555961);
// ignore: constant_identifier_names
const style_n80p = Color(!darkMode ? 0xFFAAB0B5 : 0xFF5C6068);
// ignore: constant_identifier_names
const style_n88p = Color(!darkMode ? 0xFFA3A8AE : 0xFF63686F);
// ignore: constant_identifier_names
const style_n96p = Color(!darkMode ? 0xFF9CA1A7 : 0xFF6A6F76);
// ignore: constant_identifier_names
const style_n104p = Color(!darkMode ? 0xFF959AA0 : 0xFF71767C);
// ignore: constant_identifier_names
const style_n112p = Color(!darkMode ? 0xFF8E9399 : 0xFF787D84);
// ignore: constant_identifier_names
const style_n120p = Color(!darkMode ? 0xFF878C92 : 0xFF7F848B);
// ignore: constant_identifier_names
const style_n128p = Color(!darkMode ? 0xFF7F848B : 0xFF878C92);
// ignore: constant_identifier_names
const style_n136p = Color(!darkMode ? 0xFF787D84 : 0xFF8E9399);
// ignore: constant_identifier_names
const style_n144p = Color(!darkMode ? 0xFF71767D : 0xFF959AA0);
// ignore: constant_identifier_names
const style_n152p = Color(!darkMode ? 0xFF6A6F76 : 0xFF9CA1A7);
// ignore: constant_identifier_names
const style_n160p = Color(!darkMode ? 0xFF63686F : 0xFFA3A8AE);
// ignore: constant_identifier_names
const style_n168p = Color(!darkMode ? 0xFF5C6068 : 0xFFAAB0B5);
// ignore: constant_identifier_names
const style_n176p = Color(!darkMode ? 0xFF555961 : 0xFFB1B7BC);
// ignore: constant_identifier_names
const style_n184p = Color(!darkMode ? 0xFF4E525A : 0xFFB8BEC3);
// ignore: constant_identifier_names
const style_n192p = Color(!darkMode ? 0xFF464B53 : 0xFFC0C5CA);
// ignore: constant_identifier_names
const style_n200p = Color(!darkMode ? 0xFF3F444C : 0xFFC7CCD1);
// ignore: constant_identifier_names
const style_n208p = Color(!darkMode ? 0xFF383C45 : 0xFFCED4D7);
// ignore: constant_identifier_names
const style_n216p = Color(!darkMode ? 0xFF31353E : 0xFFD5DBDF);
// ignore: constant_identifier_names
const style_n224p = Color(!darkMode ? 0xFF2A2E37 : 0xFFDCE2E6);
// ignore: constant_identifier_names
const style_n232p = Color(!darkMode ? 0xFF232730 : 0xFFE3E9ED);
// ignore: constant_identifier_names
const style_n240p = Color(!darkMode ? 0xFF1C2029 : 0xFFEAF0F4);
// ignore: constant_identifier_names
const style_n248p = Color(!darkMode ? 0xFF151922 : 0xFFF2F8FB);
// ignore: constant_identifier_names

extension HexColor on Color {
  /// String is in the format "aabbcc" or "ffaabbcc" with an optional leading "#".
  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }

  /// Prefixes a hash sign if [leadingHashSign] is set to `true` (default is `true`).
  String toHex({bool leadingHashSign = true}) =>
      '${leadingHashSign ? '#' : ''}'
      '${(255 * a).toInt().toRadixString(16).padLeft(2, '0')}'
      '${(255 * r).toInt().toRadixString(16).padLeft(2, '0')}'
      '${(255 * g).toInt().toRadixString(16).padLeft(2, '0')}'
      '${(255 * b).toInt().toRadixString(16).padLeft(2, '0')}';
}

Weather weatherTemplate = Weather(
  cityName: '--',
  loc: [0.0, 0.0],
  location: Location(
    name: '--',
    region: '--',
    country: '--',
    // lat: 0.0,
    // lon: 0.0,
    tzId: '--',
    localtimeEpoch: 0,
    localtime: 'localtime',
  ),
  current: CurrentWeather(
    lastUpdatedEpoch: 0,
    lastUpdated: '--',
    tempC: 0.0,
    tempF: 0.0,
    isDay: 0,
    condition: Condition(text: '--', icon: '--', code: 0),
    windMph: 0.0,
    windKph: 0.0,
    windDegree: 0,
    windDir: '--',
    pressureMb: 0.0,
    pressureIn: 0.0,
    precipMm: 0.0,
    precipIn: 0.0,
    humidity: 0,
    cloud: 0,
    feelslikeC: 0.0,
    feelslikeF: 0.0,
    visKm: 0.0,
    visMiles: 0.0,
    uv: 0.0,
    gustMph: 0.0,
    gustKph: 0.0,
    // airQuality: AirQuality(
    //   co: 0.0,
    //   no2: 0.0,
    //   o3: 0.0,
    //   so2: 0.0,
    //   pm25: 0.0,
    //   pm10: 0.0,
    //   usEpaIndex: 0,
    //   gbDefraIndex: 0,
    // ),
  ),
  forecast: [
    ForecastDay(
      date: '--',
      dateEpoch: 0,
      day: DaySummary(
        maxTempC: 0.0,
        maxTempF: 0.0,
        minTempC: 0.0,
        minTempF: 0.0,
        avgTempC: 0.0,
        avgTempF: 0.0,
        maxWindMph: 0.0,
        maxWindKph: 0.0,
        totalPrecipMm: 0.0,
        totalPrecipIn: 0.0,
        totalSnowCm: 0.0,
        avgVisKm: 0.0,
        avgVisMiles: 0.0,
        avgHumidity: 0,
        dailyWillItRain: 0,
        dailyChanceOfRain: 0,
        dailyWillItSnow: 0,
        dailyChanceOfSnow: 0,
        condition: Condition(text: '--', icon: '--', code: 0),
        uv: 0.0,
        // airQuality: AirQuality(
        //   co: 0.0,
        //   no2: 0.0,
        //   o3: 0.0,
        //   so2: 0.0,
        //   pm25: 0.0,
        //   pm10: 0.0,
        //   usEpaIndex: 0,
        //   gbDefraIndex: 0,
        // ),
      ),
      astro: Astro(
        sunrise: '--',
        sunset: '--',
        moonrise: '--',
        moonset: '--',
        moonPhase: '--',
        moonIllumination: 0,
        isMoonUp: 0,
        isSunUp: 0,
      ),
      hour: [
        HourForecast(
          timeEpoch: 0,
          time: '--',
          tempC: 0.0,
          tempF: 0.0,
          isDay: 0,
          condition: Condition(text: '--', icon: '--', code: 0),
          windMph: 0.0,
          windKph: 0.0,
          windDegree: 0,
          windDir: '--',
          pressureMb: 0.0,
          pressureIn: 0.0,
          precipMm: 0.0,
          precipIn: 0.0,
          snowCm: 0,
          humidity: 0,
          cloud: 0,
          feelslikeC: 0.0,
          feelslikeF: 0.0,
          windchillC: 0.0,
          windchillF: 0.0,
          heatindexC: 0.0,
          heatindexF: 0.0,
          dewpointC: 0.0,
          dewpointF: 0.0,
          willItRain: 0,
          chanceOfRain: 0,
          willItSnow: 0,
          chanceOfSnow: 0,
          visKm: 0.0,
          visMiles: 0.0,
          gustMph: 0.0,
          gustKph: 0.0,
          uv: 0.0,
          // airQuality: AirQuality(
          //   co: 0.0,
          //   no2: 0.0,
          //   o3: 0.0,
          //   so2: 0.0,
          //   pm25: 0.0,
          //   pm10: 0.0,
          //   usEpaIndex: 0,
          //   gbDefraIndex: 0,
          // ),
          // shortRad: 0,
          // diffRad: 0,
        ),
      ],
    ),
  ],
  lastFetchTime: DateTime.now(),
);

Map weatherData = Language.weatherData.weatherData;
