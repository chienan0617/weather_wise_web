import 'package:flutter/material.dart';
import 'package:tasker/model/util/theme.dart';


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
      theme: theme,
      debugShowCheckedModeBanner: false,
      title: 'tasker',
      home: Column(
        children: [
          const Center(
            child: Text('data', style: TextStyle(color: style_0)),
          )
        ],
      ),
    );
  }
}
