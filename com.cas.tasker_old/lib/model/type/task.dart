import 'package:hive_flutter/adapters.dart';

@HiveType(typeId: 0)
class Task {
  @HiveField(0)
  String title;

  @HiveField(1)
  String subtitle;

  @HiveField(2)
  int color;

  @HiveField(3)
  dynamic content;

  @HiveField(4)
  bool done = false;

  @HiveField(5)
  DateTime createTime;

  @HiveField(6)
  DateTime lastEditTime;

  Task(
    this.title,
    this.subtitle,
    this.color,
    this.content,
    this.createTime,
    this.lastEditTime
  );

  factory Task.fromDatabase(
    int year, int month, int day, int index
  ) {
    Task
    return Task(title, subtitle, color, content, createTime, lastEditTime)
  }


}
