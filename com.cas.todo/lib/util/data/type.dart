import 'package:hive/hive.dart';

part 'type.g.dart';

void typeInit() {
  // Hive.registerAdapter(TaskAdapter());
  // Hive.registerAdapter(TodoTypeAdapter());
  Hive.registerAdapter(TodoAdapter());
  Hive.registerAdapter(TodoTypeAdapter());
  Hive.registerAdapter(TimeAdapter());
}

@HiveType(typeId: 0)
class Todo {
  @HiveField(0)
  final String title;

  @HiveField(1)    // todo: 'list' or 'card'
  final TodoType type;

  // @HiveField(2)    // todo: if type is list
  // List<Map<String, dynamic>> TodoList;

  @HiveField(2)
  final DateTime createTime;

  @HiveField(3)
  DateTime lastEdit;

  @HiveField(4)
  int color;

  @HiveField(5)
  bool done = false;

  @HiveField(6)
  dynamic content;

  @HiveField(7)
  int index;

  Todo(
    this.title,
    this.type,
    this.createTime,
    this.lastEdit,
    this.color,
    this.content,
    this.index
  );
}

@HiveType(typeId: 1)
enum TodoType {
  @HiveField(0)
  list,

  @HiveField(1)
  card,
}

@HiveType(typeId: 2)
class Time {
  @HiveField(0)
  int year;

  @HiveField(1)
  int month;

  @HiveField(2)
  int day;

  @HiveField(3)
  String key;

  @override
  String toString() {
    return '<$year-$month-$day:$key>';
  }

  Time(
    this.year,
    this.month,
    this.day,
    {this.key = 'normal'}
  );
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
