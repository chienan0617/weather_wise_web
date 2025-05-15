import 'package:flutter/material.dart';
import 'package:tasker/model/model.dart';
import 'package:tasker/util/theme.dart';
import 'package:tasker/page/home/calendar/_calendar.dart';


const textColor = Color(0xFF808080); // 128: (128,128,128)
const textStyle = TextStyle(color: textColor);


class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // theme: theme,
      debugShowCheckedModeBanner: false,
      title: 'tasker',
      home: SafeArea(
        child: Scaffold(
          backgroundColor: style_16,
          appBar: AppBar(
            backgroundColor: style_n8,
            leading: IconButton(
              onPressed: () {},
              icon: const Icon(Icons.menu, size: 28, color: style_0p)
            ),
            actions: [],
          ),
          body: [CalendarPage(), Container()][Model.app.getPageIndex()],
        )
      )
    );
  }
}
