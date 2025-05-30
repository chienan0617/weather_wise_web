import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:weather/func/home/city/city_content.ctrl.dart';
import 'package:weather/func/home/city/city_io.api.dart';
import 'package:weather/page/home/search/edit/edit.m.dart';
import 'package:weather/util/language.dart';
import 'package:weather/util/library.dart';

class SearchContent extends StatefulWidget {
  const SearchContent({super.key});

  @override
  State<SearchContent> createState() => _SearchContentState();
}

class _SearchContentState extends State<SearchContent> {
  @override
  Widget build(BuildContext context) {
    return Column(children: [const SearchBar(), const Items()]);
  }
}

class SearchBar extends StatefulWidget {
  const SearchBar({super.key});

  @override
  State<SearchBar> createState() => _SearchBarState();
}

class _SearchBarState extends State<SearchBar> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
      decoration: BoxDecoration(
        color: const Color(0xFF282347),
        borderRadius: BorderRadius.circular(15),
      ),
      child: TextField(
        controller: CityContentCtrl.search.controller,
        decoration: InputDecoration(
          border: InputBorder.none,
          prefixIcon: const Icon(
            Icons.search,
            color: Color(0xFF9991C9),
            size: 28,
          ),
          hintText: Language.get('Search for a city or airport'),
          hintStyle: const TextStyle(
            color: Color(0xFF9991C9),
            fontSize: 16,
            fontFamily: 'Space Grotesk',
            // height: 1.5,
          ),
        ),
        style: GoogleFonts.spaceGrotesk(
          textStyle: TextStyle(
            color: style_0,
            fontWeight: FontWeight.w500,
            fontFamily: 'Space Grotesk',
            height: 1.5,
          ),
        ),
      ),
    );
  }
}

class Items extends StatefulWidget {
  const Items({super.key});

  @override
  State<Items> createState() => _ItemsState();
}

class _ItemsState extends State<Items> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    List<String> cityList = CityIoApi.getCityList();

    return Column(
      children: List.generate(cityList.length, (int index) {
        return GestureDetector(
          onTap: () {
            Navigator.pop(context);
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => CityEditPageScreen()),
            );
          },
          child: Container(
            width: size.width,
            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                const SizedBox(width: 10),
                Container(
                  width: 60,
                  height: 60,
                  decoration: BoxDecoration(
                    color: const Color(0xFF1C1933),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Icon(
                    Icons.location_on_outlined,
                    color: style_0,
                    size: 28,
                  ),
                ),
                const SizedBox(width: 25),
                Text(
                  cityList[index],
                  style: const TextStyle(
                    color: style_8,
                    fontSize: 18,
                    fontWeight: FontWeight.w500,
                    fontFamily: 'Space Grotesk',
                  ),
                ),
                const Expanded(child: SizedBox()),
                const Icon(Icons.arrow_forward_ios, color: style_104, size: 20),
                const SizedBox(width: 10)
              ],
            ),
          ),
        );
      }),
    );
  }
}
