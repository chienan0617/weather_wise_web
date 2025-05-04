import 'package:hive/hive.dart';

part 'type.g.dart';

void typeInit() {
  Hive.registerAdapter(TaskAdapter());
  Hive.registerAdapter(TodoTypeAdapter());
  Hive.registerAdapter(TaskTypeAdapter());
  Hive.registerAdapter(TodoAdapter());
}

@HiveType(typeId: 0)
class Task {
  @HiveField(0)
  final String title;

  @HiveField(1)    // todo: 'list' or 'card'
  final TaskType type;

  // @HiveField(2)    // todo: if type is list
  // List<Map<String, dynamic>> taskList;

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

  Task(
    this.title,
    this.type,
    this.createTime,
    this.lastEdit,
    this.color,
    this.content
  );
}

@HiveType(typeId: 1)
enum TaskType {
  @HiveField(0)
  list,

  @HiveField(1)
  card,
}

@HiveType(typeId: 2)
class Todo {
  @HiveField(0)
  String title;

  @HiveField(1)
  dynamic content;

  @HiveField(2)
  TodoType type;

  Todo(
    this.title,
    this.content,
    this.type
  );
}

@HiveType(typeId: 3)
enum TodoType {
  @HiveField(0)
  list,

  @HiveType(typeId: 1)
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