import 'package:hive/hive.dart';
import 'package:tasker/util/data/data.dart';

class AppData implements DataBase {
  late Box? box;
  String boxName;

  AppData(this.boxName);

  @override
  void checkKeyExist(String key, dynamic defaultValue) {
    if (!box!.containsKey(key)) {
      box!.put(key, defaultValue);
    }
  }

  @override
  Box getBox() => box!;

  @override
  Future<void> initialize () async {
    box = await Hive.openBox(boxName);
  }

  @override
  Map<String, dynamic> getAllData() {
    return box?.toMap().cast<String, dynamic>() ?? {};
  }

  @override
  T get<T>(String name) => box!.get(name) as T;

  @override
  put<T>(String name, dynamic value) => box!.put(name, value);
}
