import 'package:weather_wise/util/annotation.dart';

abstract class Initializable {
  @functional
  Future<void> initialize();
}