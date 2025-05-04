import 'package:flutter/material.dart';
import 'package:tasker/page/home/home.m.dart';
import 'package:tasker/util/init.util.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await start();
  runApp(Main());
}

class Main extends StatefulWidget {
  const Main({super.key});

  @override
  State<Main> createState() => _MainState();
}

class _MainState extends State<Main> {
  @override
  Widget build(BuildContext context) {
    return HomeScreen();
  }
}