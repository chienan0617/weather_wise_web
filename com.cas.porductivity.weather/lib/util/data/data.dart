import 'package:weather/util/data/type/app.dart';

class Data {
  static final AppData app = AppData();

  static List<Registerable> instances = [];

  static Future<void> initialize() async {
    await app.initialize();

    checkData();
  }

  static Future<void> checkData() async {
    for (var i in instances) {
      // i.initialize();
      i.initData();
    }
  }

  static register(DataBase object) => instances.add(object);
}

abstract class Registerable {
  void initialize();

  void initData();
}

abstract class DataBase implements Registerable {
  Map getAllData();

  void checkKeyExist(String key, dynamic defaultValue);

  T get<T>(String key);

  void put<T>(String key, dynamic value);

  @override
  void initData();

  @override
  Future<void> initialize();
}