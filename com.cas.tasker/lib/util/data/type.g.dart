// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'type.dart';

// **************************************************************************
// TypeAdapterGenerator
// **************************************************************************

class TaskAdapter extends TypeAdapter<Task> {
  @override
  final int typeId = 0;

  @override
  Task read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return Task(
      fields[0] as String,
      fields[1] as TaskType,
      fields[2] as DateTime,
      fields[3] as DateTime,
      fields[4] as int,
      fields[6] as dynamic,
      fields[7] as int,
    )..done = fields[5] as bool;
  }

  @override
  void write(BinaryWriter writer, Task obj) {
    writer
      ..writeByte(8)
      ..writeByte(0)
      ..write(obj.title)
      ..writeByte(1)
      ..write(obj.type)
      ..writeByte(2)
      ..write(obj.createTime)
      ..writeByte(3)
      ..write(obj.lastEdit)
      ..writeByte(4)
      ..write(obj.color)
      ..writeByte(5)
      ..write(obj.done)
      ..writeByte(6)
      ..write(obj.content)
      ..writeByte(7)
      ..write(obj.index);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is TaskAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class TodoAdapter extends TypeAdapter<Todo> {
  @override
  final int typeId = 2;

  @override
  Todo read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return Todo(
      fields[0] as String,
      fields[1] as dynamic,
      fields[2] as TodoType,
    );
  }

  @override
  void write(BinaryWriter writer, Todo obj) {
    writer
      ..writeByte(3)
      ..writeByte(0)
      ..write(obj.title)
      ..writeByte(1)
      ..write(obj.content)
      ..writeByte(2)
      ..write(obj.type);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is TodoAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class TaskTypeAdapter extends TypeAdapter<TaskType> {
  @override
  final int typeId = 1;

  @override
  TaskType read(BinaryReader reader) {
    switch (reader.readByte()) {
      case 0:
        return TaskType.list;
      case 1:
        return TaskType.card;
      default:
        return TaskType.list;
    }
  }

  @override
  void write(BinaryWriter writer, TaskType obj) {
    switch (obj) {
      case TaskType.list:
        writer.writeByte(0);
        break;
      case TaskType.card:
        writer.writeByte(1);
        break;
    }
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is TaskTypeAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

class TodoTypeAdapter extends TypeAdapter<TodoType> {
  @override
  final int typeId = 3;

  @override
  TodoType read(BinaryReader reader) {
    switch (reader.readByte()) {
      case 0:
        return TodoType.list;
      case 1:
        return TodoType.card;
      default:
        return TodoType.list;
    }
  }

  @override
  void write(BinaryWriter writer, TodoType obj) {
    switch (obj) {
      case TodoType.list:
        writer.writeByte(0);
        break;
      case TodoType.card:
        writer.writeByte(1);
        break;
    }
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is TodoTypeAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}
