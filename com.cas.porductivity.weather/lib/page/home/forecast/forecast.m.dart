import 'package:flutter/material.dart';
import 'package:weather/func/home/local/weather_current.mod.dart';

class ForecastPageScreen extends StatelessWidget {
  const ForecastPageScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1933),
        title: const Text('Weather Forecast'),
      ),
      body: FutureBuilder<WeatherCurrent>(
        future: WeatherCurrent.fetchData(API_KEY, 'Taipei'),
        builder: (
          BuildContext context,
          AsyncSnapshot<WeatherCurrent> snapshot,
        ) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (snapshot.hasData) {
            final weather = snapshot.data!;
            return Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    // 這裡包一層 Expanded
                    child: SingleChildScrollView(
                      child: Text(
                        weather.toString(),
                        style: const TextStyle(
                          color: Colors.white,
                          fontFamily: 'Space Grotesk',
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            );
          } else {
            return const Center(child: Text('No data available'));
          }
        },
      ),
    );
  }
}
