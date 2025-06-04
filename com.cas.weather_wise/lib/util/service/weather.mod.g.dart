// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'weather.mod.dart';

// **************************************************************************
// TypeAdapterGenerator
// **************************************************************************

class WeatherAdapter extends TypeAdapter<Weather> {
  @override
  final int typeId = 0;

  @override
  Weather read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return Weather(
      location: fields[0] as Location,
      current: fields[1] as CurrentWeather,
      forecast: (fields[2] as List).cast<ForecastDay>(),
      lastFetchTime: fields[3] as DateTime,
    );
  }

  @override
  void write(BinaryWriter writer, Weather obj) {
    writer
      ..writeByte(4)
      ..writeByte(0)
      ..write(obj.location)
      ..writeByte(1)
      ..write(obj.current)
      ..writeByte(2)
      ..write(obj.forecast)
      ..writeByte(3)
      ..write(obj.lastFetchTime);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is WeatherAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class LocationAdapter extends TypeAdapter<Location> {
  @override
  final int typeId = 1;

  @override
  Location read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return Location(
      name: fields[0] as String,
      region: fields[1] as String,
      country: fields[2] as String,
      lat: fields[3] as double,
      lon: fields[4] as double,
      tzId: fields[5] as String,
      localtimeEpoch: fields[6] as int,
      localtime: fields[7] as String,
    );
  }

  @override
  void write(BinaryWriter writer, Location obj) {
    writer
      ..writeByte(8)
      ..writeByte(0)
      ..write(obj.name)
      ..writeByte(1)
      ..write(obj.region)
      ..writeByte(2)
      ..write(obj.country)
      ..writeByte(3)
      ..write(obj.lat)
      ..writeByte(4)
      ..write(obj.lon)
      ..writeByte(5)
      ..write(obj.tzId)
      ..writeByte(6)
      ..write(obj.localtimeEpoch)
      ..writeByte(7)
      ..write(obj.localtime);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is LocationAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class CurrentWeatherAdapter extends TypeAdapter<CurrentWeather> {
  @override
  final int typeId = 2;

  @override
  CurrentWeather read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return CurrentWeather(
      lastUpdatedEpoch: fields[0] as int,
      lastUpdated: fields[1] as String,
      tempC: fields[2] as double,
      tempF: fields[3] as double,
      isDay: fields[4] as int,
      condition: fields[5] as Condition,
      windMph: fields[6] as double,
      windKph: fields[7] as double,
      windDegree: fields[8] as int,
      windDir: fields[9] as String,
      pressureMb: fields[10] as double,
      pressureIn: fields[11] as double,
      precipMm: fields[12] as double,
      precipIn: fields[13] as double,
      humidity: fields[14] as int,
      cloud: fields[15] as int,
      feelslikeC: fields[16] as double,
      feelslikeF: fields[17] as double,
      visKm: fields[18] as double,
      visMiles: fields[19] as double,
      uv: fields[20] as double,
      gustMph: fields[21] as double,
      gustKph: fields[22] as double,
    );
  }

  @override
  void write(BinaryWriter writer, CurrentWeather obj) {
    writer
      ..writeByte(23)
      ..writeByte(0)
      ..write(obj.lastUpdatedEpoch)
      ..writeByte(1)
      ..write(obj.lastUpdated)
      ..writeByte(2)
      ..write(obj.tempC)
      ..writeByte(3)
      ..write(obj.tempF)
      ..writeByte(4)
      ..write(obj.isDay)
      ..writeByte(5)
      ..write(obj.condition)
      ..writeByte(6)
      ..write(obj.windMph)
      ..writeByte(7)
      ..write(obj.windKph)
      ..writeByte(8)
      ..write(obj.windDegree)
      ..writeByte(9)
      ..write(obj.windDir)
      ..writeByte(10)
      ..write(obj.pressureMb)
      ..writeByte(11)
      ..write(obj.pressureIn)
      ..writeByte(12)
      ..write(obj.precipMm)
      ..writeByte(13)
      ..write(obj.precipIn)
      ..writeByte(14)
      ..write(obj.humidity)
      ..writeByte(15)
      ..write(obj.cloud)
      ..writeByte(16)
      ..write(obj.feelslikeC)
      ..writeByte(17)
      ..write(obj.feelslikeF)
      ..writeByte(18)
      ..write(obj.visKm)
      ..writeByte(19)
      ..write(obj.visMiles)
      ..writeByte(20)
      ..write(obj.uv)
      ..writeByte(21)
      ..write(obj.gustMph)
      ..writeByte(22)
      ..write(obj.gustKph);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is CurrentWeatherAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class ForecastDayAdapter extends TypeAdapter<ForecastDay> {
  @override
  final int typeId = 3;

  @override
  ForecastDay read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return ForecastDay(
      date: fields[0] as String,
      dateEpoch: fields[1] as int,
      day: fields[2] as DaySummary,
      astro: fields[3] as Astro,
      hour: (fields[4] as List).cast<HourForecast>(),
    );
  }

  @override
  void write(BinaryWriter writer, ForecastDay obj) {
    writer
      ..writeByte(5)
      ..writeByte(0)
      ..write(obj.date)
      ..writeByte(1)
      ..write(obj.dateEpoch)
      ..writeByte(2)
      ..write(obj.day)
      ..writeByte(3)
      ..write(obj.astro)
      ..writeByte(4)
      ..write(obj.hour);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ForecastDayAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class DaySummaryAdapter extends TypeAdapter<DaySummary> {
  @override
  final int typeId = 4;

  @override
  DaySummary read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return DaySummary(
      maxTempC: fields[0] as double,
      maxTempF: fields[1] as double,
      minTempC: fields[2] as double,
      minTempF: fields[3] as double,
      avgTempC: fields[4] as double,
      avgTempF: fields[5] as double,
      maxWindMph: fields[6] as double,
      maxWindKph: fields[7] as double,
      totalPrecipMm: fields[8] as double,
      totalPrecipIn: fields[9] as double,
      totalSnowCm: fields[10] as double,
      avgVisKm: fields[11] as double,
      avgVisMiles: fields[12] as double,
      avgHumidity: fields[13] as int,
      dailyWillItRain: fields[14] as int,
      dailyChanceOfRain: fields[15] as int,
      dailyWillItSnow: fields[16] as int,
      dailyChanceOfSnow: fields[17] as int,
      condition: fields[18] as Condition,
      uv: fields[19] as double,
    );
  }

  @override
  void write(BinaryWriter writer, DaySummary obj) {
    writer
      ..writeByte(20)
      ..writeByte(0)
      ..write(obj.maxTempC)
      ..writeByte(1)
      ..write(obj.maxTempF)
      ..writeByte(2)
      ..write(obj.minTempC)
      ..writeByte(3)
      ..write(obj.minTempF)
      ..writeByte(4)
      ..write(obj.avgTempC)
      ..writeByte(5)
      ..write(obj.avgTempF)
      ..writeByte(6)
      ..write(obj.maxWindMph)
      ..writeByte(7)
      ..write(obj.maxWindKph)
      ..writeByte(8)
      ..write(obj.totalPrecipMm)
      ..writeByte(9)
      ..write(obj.totalPrecipIn)
      ..writeByte(10)
      ..write(obj.totalSnowCm)
      ..writeByte(11)
      ..write(obj.avgVisKm)
      ..writeByte(12)
      ..write(obj.avgVisMiles)
      ..writeByte(13)
      ..write(obj.avgHumidity)
      ..writeByte(14)
      ..write(obj.dailyWillItRain)
      ..writeByte(15)
      ..write(obj.dailyChanceOfRain)
      ..writeByte(16)
      ..write(obj.dailyWillItSnow)
      ..writeByte(17)
      ..write(obj.dailyChanceOfSnow)
      ..writeByte(18)
      ..write(obj.condition)
      ..writeByte(19)
      ..write(obj.uv);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is DaySummaryAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class AstroAdapter extends TypeAdapter<Astro> {
  @override
  final int typeId = 5;

  @override
  Astro read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return Astro(
      sunrise: fields[0] as String,
      sunset: fields[1] as String,
      moonrise: fields[2] as String,
      moonset: fields[3] as String,
      moonPhase: fields[4] as String,
      moonIllumination: fields[5] as int,
      isMoonUp: fields[6] as int,
      isSunUp: fields[7] as int,
    );
  }

  @override
  void write(BinaryWriter writer, Astro obj) {
    writer
      ..writeByte(8)
      ..writeByte(0)
      ..write(obj.sunrise)
      ..writeByte(1)
      ..write(obj.sunset)
      ..writeByte(2)
      ..write(obj.moonrise)
      ..writeByte(3)
      ..write(obj.moonset)
      ..writeByte(4)
      ..write(obj.moonPhase)
      ..writeByte(5)
      ..write(obj.moonIllumination)
      ..writeByte(6)
      ..write(obj.isMoonUp)
      ..writeByte(7)
      ..write(obj.isSunUp);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AstroAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class HourForecastAdapter extends TypeAdapter<HourForecast> {
  @override
  final int typeId = 6;

  @override
  HourForecast read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return HourForecast(
      timeEpoch: fields[0] as int,
      time: fields[1] as String,
      tempC: fields[2] as double,
      tempF: fields[3] as double,
      isDay: fields[4] as int,
      condition: fields[5] as Condition,
      windMph: fields[6] as double,
      windKph: fields[7] as double,
      windDegree: fields[8] as int,
      windDir: fields[9] as String,
      pressureMb: fields[10] as double,
      pressureIn: fields[11] as double,
      precipMm: fields[12] as double,
      precipIn: fields[13] as double,
      snowCm: fields[14] as double,
      humidity: fields[15] as int,
      cloud: fields[16] as int,
      feelslikeC: fields[17] as double,
      feelslikeF: fields[18] as double,
      windchillC: fields[19] as double,
      windchillF: fields[20] as double,
      heatindexC: fields[21] as double,
      heatindexF: fields[22] as double,
      dewpointC: fields[23] as double,
      dewpointF: fields[24] as double,
      willItRain: fields[25] as int,
      chanceOfRain: fields[26] as int,
      willItSnow: fields[27] as int,
      chanceOfSnow: fields[28] as int,
      visKm: fields[29] as double,
      visMiles: fields[30] as double,
      gustMph: fields[31] as double,
      gustKph: fields[32] as double,
      uv: fields[33] as double,
    );
  }

  @override
  void write(BinaryWriter writer, HourForecast obj) {
    writer
      ..writeByte(34)
      ..writeByte(0)
      ..write(obj.timeEpoch)
      ..writeByte(1)
      ..write(obj.time)
      ..writeByte(2)
      ..write(obj.tempC)
      ..writeByte(3)
      ..write(obj.tempF)
      ..writeByte(4)
      ..write(obj.isDay)
      ..writeByte(5)
      ..write(obj.condition)
      ..writeByte(6)
      ..write(obj.windMph)
      ..writeByte(7)
      ..write(obj.windKph)
      ..writeByte(8)
      ..write(obj.windDegree)
      ..writeByte(9)
      ..write(obj.windDir)
      ..writeByte(10)
      ..write(obj.pressureMb)
      ..writeByte(11)
      ..write(obj.pressureIn)
      ..writeByte(12)
      ..write(obj.precipMm)
      ..writeByte(13)
      ..write(obj.precipIn)
      ..writeByte(14)
      ..write(obj.snowCm)
      ..writeByte(15)
      ..write(obj.humidity)
      ..writeByte(16)
      ..write(obj.cloud)
      ..writeByte(17)
      ..write(obj.feelslikeC)
      ..writeByte(18)
      ..write(obj.feelslikeF)
      ..writeByte(19)
      ..write(obj.windchillC)
      ..writeByte(20)
      ..write(obj.windchillF)
      ..writeByte(21)
      ..write(obj.heatindexC)
      ..writeByte(22)
      ..write(obj.heatindexF)
      ..writeByte(23)
      ..write(obj.dewpointC)
      ..writeByte(24)
      ..write(obj.dewpointF)
      ..writeByte(25)
      ..write(obj.willItRain)
      ..writeByte(26)
      ..write(obj.chanceOfRain)
      ..writeByte(27)
      ..write(obj.willItSnow)
      ..writeByte(28)
      ..write(obj.chanceOfSnow)
      ..writeByte(29)
      ..write(obj.visKm)
      ..writeByte(30)
      ..write(obj.visMiles)
      ..writeByte(31)
      ..write(obj.gustMph)
      ..writeByte(32)
      ..write(obj.gustKph)
      ..writeByte(33)
      ..write(obj.uv);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is HourForecastAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class ConditionAdapter extends TypeAdapter<Condition> {
  @override
  final int typeId = 7;

  @override
  Condition read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return Condition(
      text: fields[0] as String,
      icon: fields[1] as String,
      code: fields[2] as int,
    );
  }

  @override
  void write(BinaryWriter writer, Condition obj) {
    writer
      ..writeByte(3)
      ..writeByte(0)
      ..write(obj.text)
      ..writeByte(1)
      ..write(obj.icon)
      ..writeByte(2)
      ..write(obj.code);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ConditionAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class AirQualityAdapter extends TypeAdapter<AirQuality> {
  @override
  final int typeId = 8;

  @override
  AirQuality read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return AirQuality(
      co: fields[0] as double,
      no2: fields[1] as double,
      o3: fields[2] as double,
      so2: fields[3] as double,
      pm25: fields[4] as double,
      pm10: fields[5] as double,
      usEpaIndex: fields[6] as int,
      gbDefraIndex: fields[7] as int,
    );
  }

  @override
  void write(BinaryWriter writer, AirQuality obj) {
    writer
      ..writeByte(8)
      ..writeByte(0)
      ..write(obj.co)
      ..writeByte(1)
      ..write(obj.no2)
      ..writeByte(2)
      ..write(obj.o3)
      ..writeByte(3)
      ..write(obj.so2)
      ..writeByte(4)
      ..write(obj.pm25)
      ..writeByte(5)
      ..write(obj.pm10)
      ..writeByte(6)
      ..write(obj.usEpaIndex)
      ..writeByte(7)
      ..write(obj.gbDefraIndex);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AirQualityAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}
