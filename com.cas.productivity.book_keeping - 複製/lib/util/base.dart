import 'package:bookkeeping/util/annotation.dart';

abstract class Initializable {
  @functional
  Future<void> initialize();
}