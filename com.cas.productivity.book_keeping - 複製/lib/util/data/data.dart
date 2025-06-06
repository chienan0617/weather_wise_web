import 'package:bookkeeping/util/annotation.dart';
import 'package:bookkeeping/util/base.dart';
import 'package:bookkeeping/util/data/type/app.dart';

class Data {
  static AppData app = AppData();

  @initially
  static Future<void> initialize() async {
    app.initialize();

    solveRegister();
  }

  @original
  static List<Registerable> instances = [];

  @initially
  static Future<void> solveRegister() async {
    for (var e in instances) {
      e.initData();
    }
  }

  @functional
  static void register(Registerable object) => instances.add(object);

  @initially
  static Future<void> typeInit() async {}
}

abstract class Registerable implements Initializable {
  @override
  Future<void> initialize();

  @functional
  Future<void> initData();
}

abstract class Database implements Registerable {
  @override
  Future<void> initialize();

  @override
  Future<void> initData();

  @functional
  void put<E>(String key, Object value);

  @functional
  T get<T>(String key);

  @functional
  void checkKeyExist(String key, Object defaultValue);
}
