import 'package:flutter/material.dart';
import 'package:tasker/util/init/init.dart';
import 'package:tasker/page/home/_home.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Initialize.start();
  runApp(App());
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  @override
  Widget build(BuildContext context) {
    return HomePage();
  }
}
