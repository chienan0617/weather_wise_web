import 'package:bookkeeping/util/base.dart';
import 'package:bookkeeping/util/data/data.dart';

class Init implements Initializable {
  @override
  Future<void> initialize() {
    throw UnimplementedError();
  }
}

Future<void> setupApp() async {
  await Data.initialize();
}
