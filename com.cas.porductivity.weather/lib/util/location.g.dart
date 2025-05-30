// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'location.dart';

// **************************************************************************
// TypeAdapterGenerator
// **************************************************************************

class SearchedLocationAdapter extends TypeAdapter<SearchedLocation> {
  @override
  final int typeId = 9;

  @override
  SearchedLocation read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return SearchedLocation(
      fields[0] as String,
      fields[1] as String,
      fields[2] as String,
      fields[3] as String,
      fields[4] as double,
      fields[5] as double,
    );
  }

  @override
  void write(BinaryWriter writer, SearchedLocation obj) {
    writer
      ..writeByte(6)
      ..writeByte(0)
      ..write(obj.country)
      ..writeByte(1)
      ..write(obj.state)
      ..writeByte(2)
      ..write(obj.county)
      ..writeByte(3)
      ..write(obj.name)
      ..writeByte(4)
      ..write(obj.lat)
      ..writeByte(5)
      ..write(obj.lng);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is SearchedLocationAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}
