import 'package:hive_flutter/hive_flutter.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/data/type.dart';

class TaskData implements DataBase {
  late final Box? box;

  TaskData() {Data.register(this);}

  @override
  Box getBox() => box!;

  void storeTask(
    int year, int month, int day, int totalIndex, Task task
  ) {
    Map data = getTask(year, month, day);
    data[totalIndex] = task;
    box?.put('<$year-$month-$day>', data);
  }

  Map<int, Task> getTask(int year, int month, int day) {
    return (box?.get('<$year-$month-$day>', defaultValue: {})
        as Map<dynamic, dynamic>).cast<int, Task>();
  }

  void deleteTask(
    int year, int month, int day, int totalIndex, Task task
  ) {
    Map data = getTask(year, month, day);
    data.remove(totalIndex);
    box?.put('<$year-$month-$day>', data);
  }

  Task getTaskByIndex(int index) => get<Task>(index.toString());

  @override
  Map<String, dynamic> getAllData() {
    return box?.toMap().cast<String, dynamic>() ?? {};
  }

  // * get add add self automatically
  int newTaskIndex() {
    if (!(box?.containsKey('index') ?? false)) {
      box?.put('index', 0);
    }

    int index = box?.get('index') ?? 0;
    box?.put('index', index + 1);
    return index + 1;
  }

  @override
  void checkKeyExist(String key, defaultValue) {
    if (!box!.containsKey(key)) {
      box!.put(key, defaultValue);
    }
  }

  @override
  T get<T>(name) => box?.get(name) as T;

  @override
  Future<void> initialize() async {
    box = await Hive.openBox('task');
    box?.containsKey('index') ?? box?.put('index', 1);
  }

  @override
  void put<T>(String name, value) => box?.put(name, value);

  @override
  void initData() {
  }
}
