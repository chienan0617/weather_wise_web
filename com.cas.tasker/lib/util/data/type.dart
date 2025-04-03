import 'package:flutter/material.dart';
import 'package:hive/hive.dart';

part 'type.g.dart';

void typeInit() {
  Hive.registerAdapter(TaskAdapter());
  Hive.registerAdapter(TodoTypeAdapter());
}

@HiveType(typeId: 0)
class Task {
  @HiveField(0)
  final String title;

  @HiveField(1)    // todo: 'list' or 'card'
  final TodoType type;

  @HiveField(2)    // todo: if type is list
  List<Map<String, dynamic>> taskList;

  @HiveField(3)
  final DateTime createTime;

  @HiveField(4)
  DateTime lastEdit;

  @HiveField(5)
  int color;

  @HiveField(6)
  bool done = false;

  @HiveField(7)
  String content;

  Task(
    this.title,
    this.type,
    this.taskList,
    this.createTime,
    this.lastEdit,
    this.color,
    this.content
  );
}

@HiveType(typeId: 1)
enum TodoType {
  @HiveField(0)
  list,
  
  @HiveField(1)
  card,
}

// todo: flutter pub run build_runner build

/*
  class ColorAdapter extends TypeAdapter<Color> {
    @override
    final int typeId = 3; // 確保這個 typeId 與其他 Adapter 不衝突

    @override
    Color read(BinaryReader reader) {
      // 讀取一個整數並轉換成 Color
      final int value = reader.readInt();
      return Color(value);
    }

    @override
    void write(BinaryWriter writer, Color obj) {
      // 將 Color 的 value 寫入
      writer.writeInt(obj.value);
    }
  }
*/