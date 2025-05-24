import 'package:flutter/material.dart';
import 'package:weather/page/home/city/add/add.m.dart';
import 'package:weather/page/home/city/content.dart';
import 'package:weather/util/library.dart';

class SearchPageScreen extends StatefulWidget {
  const SearchPageScreen({super.key});

  @override
  State<SearchPageScreen> createState() => _SearchPageScreenState();
}

class _SearchPageScreenState extends State<SearchPageScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1933),
        leading: IconButton(
          onPressed: () {},
          icon: const Icon(Icons.menu, color: style_0, size: 26),
        ),
        title: const Text(
          'Locations',
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.white,
            fontSize: 18,
            fontFamily: 'Space Grotesk',
            fontWeight: FontWeight.w700,
            height: 1.28,
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: const Color(0xFF2B11EA),
        onPressed: () {
          Navigator.pop(context);
          Navigator.push(context, MaterialPageRoute(builder: (context) => CityAddPageScreen()));
        },
        child: const Icon(Icons.add, size: 28, color: Colors.white),
      ),
      body: const SearchContent(),
    );
  }
}
