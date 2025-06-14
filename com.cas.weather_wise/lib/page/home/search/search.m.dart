import 'package:flutter/material.dart';
import 'package:weather_wise/page/home/search/search_bar.dart';
import 'package:weather_wise/util/file_handle.dart';
import 'package:weather_wise/util/library.dart';
import 'package:weather_wise/util/util.dart';

class SearchPage extends StatefulWidget {
  const SearchPage({super.key});

  @override
  State<SearchPage> createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF111121),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1933),
        leading: IconButton(
          onPressed: () => Util.openDrawer(context),
          icon: const Icon(Icons.menu, color: style_0, size: 26),
        ),
        title: Text(
          Language.word('Locations'),
          textAlign: TextAlign.center,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 18,
            fontFamily: fontFamilyDefault,
            fontWeight: FontWeight.w700,
            height: 1.28,
          ),
        ),
      ),
      body: Column(
        children: [
          SearchField(refresh: () => setState(() {})),
          Items(refresh: () => setState(() {})),
        ],
      ),
    );
  }
}
