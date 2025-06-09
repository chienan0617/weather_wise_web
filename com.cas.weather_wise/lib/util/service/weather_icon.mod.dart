// import 'package:flutter/material.dart';
// import 'package:hive_flutter/adapters.dart';
// import 'package:weather_wise/util/language.dart';
// import 'package:weather_wise/util/service/weather.mod.dart';


// @HiveType(typeId: 10)
// class WeatherIcon {
//   @HiveField(0) final int code;
//   @HiveField(1) final String description;

//   WeatherIcon(
//     this.code,
//     this.description
//   );

//   factory WeatherIcon.build(Condition condition) {
//     return WeatherIcon(
//       condition.code,
//       Language.weatherData.weatherData[condition.text],
//     );
//   }
// }


// @HiveType(typeId: 11)
// class WeatherDescription {
//   @HiveField(0) final List<Map> lang;

//   WeatherDescription(
//     this.lang
//   );
// }