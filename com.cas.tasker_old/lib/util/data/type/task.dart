import 'package:hive_flutter/adapters.dart';
import 'package:tasker/util/data/data.dart';

class TaskData implements DataBase {
  late Box? box;
  String boxName;

  TaskData(this.boxName);

  @override
  void checkKeyExist(String key, defaultValue) {
    if (!box!.containsKey(key)) {
      box!.put(key, defaultValue);
    }
  }

  @override
  Box getBox() => box!;

  @override
  Future<void> initialize() async {
    box = await Hive.openBox(boxName);
  }

  @override
  Map<String, dynamic> getAllData() {
    return box?.toMap().cast<String, dynamic>() ?? {};
  }


  @override
  T get<T>(String name) {
    return box!.get(name) as T;
  }

  @override
  void put<T>(String name, dynamic value) => box!.put(name, value);
}