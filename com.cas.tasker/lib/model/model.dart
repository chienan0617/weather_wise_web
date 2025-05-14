import 'package:tasker/model/app/base.dart';
import 'package:tasker/model/init/init.dart';

class Model {
  static BaseModel? base;

  Model() {
    base = BaseModel();
  }

  static Future<void> initialize() async {
    // print('object');
    // base =
  }

}