import 'package:weather/func/home/local/weather.mod.dart';

class ForecastIoApi {
  static List<(DateTime date, HourForecast)> getForecastHours(Weather weather, int length) {
    return weather.forecast
      .expand(
        (d) => d.hour
          .where(
            (h) => DateTime.parse("${d.date} ${h.time.split(' ').last}").isAfter(DateTime.now()),
          )
          .map(
            (h) => (
              DateTime.parse("${d.date} ${h.time.split(' ').last}"),
              h,
            ),
          ),
      )
      .take(length)
      .toList();
  }
}
