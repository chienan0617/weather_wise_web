// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'weather_current.mod.dart';

// **************************************************************************
// TypeAdapterGenerator
// **************************************************************************

class WeatherCurrentAdapter extends TypeAdapter<WeatherCurrent> {
  @override
  final int typeId = 0;

  @override
  WeatherCurrent read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return WeatherCurrent(
      cityName: fields[0] as String,
      region: fields[1] as String,
      country: fields[2] as String,
      lat: fields[3] as double,
      lon: fields[4] as double,
      timeZoneID: fields[5] as String,
      localtimeEpoch: fields[6] as int,
      localtime: fields[7] as String,
      lastUpdatedEpoch: fields[8] as int,
      lastUpdated: fields[9] as String,
      tempC: fields[10] as double,
      tempF: fields[11] as double,
      isDay: fields[12] as int,
      conditionText: fields[13] as String,
      conditionIcon: fields[14] as String,
      conditionCode: fields[15] as int,
      windMph: fields[16] as double,
      windKph: fields[17] as double,
      windDegree: fields[18] as int,
      windDir: fields[19] as String,
      pressureMb: fields[20] as double,
      pressureIn: fields[21] as double,
      precipMm: fields[22] as double,
      precipIn: fields[23] as double,
      humidity: fields[24] as int,
      cloud: fields[25] as int,
      feelslikeC: fields[26] as double,
      feelslikeF: fields[27] as double,
      visKm: fields[28] as double,
      visMiles: fields[29] as double,
      uv: fields[30] as double,
      gustMph: fields[31] as double,
      gustKph: fields[32] as double,
      lastFetchTime: fields[33] as DateTime,
    );
  }

  @override
  void write(BinaryWriter writer, WeatherCurrent obj) {
    writer
      ..writeByte(34)
      ..writeByte(0)
      ..write(obj.cityName)
      ..writeByte(1)
      ..write(obj.region)
      ..writeByte(2)
      ..write(obj.country)
      ..writeByte(3)
      ..write(obj.lat)
      ..writeByte(4)
      ..write(obj.lon)
      ..writeByte(5)
      ..write(obj.timeZoneID)
      ..writeByte(6)
      ..write(obj.localtimeEpoch)
      ..writeByte(7)
      ..write(obj.localtime)
      ..writeByte(8)
      ..write(obj.lastUpdatedEpoch)
      ..writeByte(9)
      ..write(obj.lastUpdated)
      ..writeByte(10)
      ..write(obj.tempC)
      ..writeByte(11)
      ..write(obj.tempF)
      ..writeByte(12)
      ..write(obj.isDay)
      ..writeByte(13)
      ..write(obj.conditionText)
      ..writeByte(14)
      ..write(obj.conditionIcon)
      ..writeByte(15)
      ..write(obj.conditionCode)
      ..writeByte(16)
      ..write(obj.windMph)
      ..writeByte(17)
      ..write(obj.windKph)
      ..writeByte(18)
      ..write(obj.windDegree)
      ..writeByte(19)
      ..write(obj.windDir)
      ..writeByte(20)
      ..write(obj.pressureMb)
      ..writeByte(21)
      ..write(obj.pressureIn)
      ..writeByte(22)
      ..write(obj.precipMm)
      ..writeByte(23)
      ..write(obj.precipIn)
      ..writeByte(24)
      ..write(obj.humidity)
      ..writeByte(25)
      ..write(obj.cloud)
      ..writeByte(26)
      ..write(obj.feelslikeC)
      ..writeByte(27)
      ..write(obj.feelslikeF)
      ..writeByte(28)
      ..write(obj.visKm)
      ..writeByte(29)
      ..write(obj.visMiles)
      ..writeByte(30)
      ..write(obj.uv)
      ..writeByte(31)
      ..write(obj.gustMph)
      ..writeByte(32)
      ..write(obj.gustKph)
      ..writeByte(33)
      ..write(obj.lastFetchTime);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is WeatherCurrentAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}
