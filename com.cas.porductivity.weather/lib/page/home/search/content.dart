import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:weather/func/home/city/city_io.api.dart';
import 'package:weather/util/language.dart';
import 'package:weather/util/library.dart';
import 'package:weather/util/location.dart';

class SearchBar extends StatefulWidget {
  final TextEditingController controller;
  final FocusNode focusNode;
  // final VoidCallback onComplete;

  const SearchBar({
    super.key,
    required this.controller,
    required this.focusNode,
    // required this.onComplete,
  });

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
        controller: widget.controller, //CityContentCtrl.search.controller,
        focusNode: widget.focusNode,
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
          suffixIcon: IconButton(
            onPressed: () => widget.controller.text = '',
            icon: const Icon(Icons.cancel, color: style_0, size: 22),
          ),
        ),
        style: const TextStyle(
          color: style_0,
          fontWeight: FontWeight.w500,
          fontFamily: 'Space Grotesk',
          height: 1.5,
        ),
      ),
    );
  }
}

class Items extends StatefulWidget {
  final VoidCallback refresh;
  const Items({super.key, required this.refresh});

  @override
  State<Items> createState() => _ItemsState();
}

class _ItemsState extends State<Items> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    List<SearchedLocation> cityList = CityIoApi.getCityList();

    return Expanded(
      child: SingleChildScrollView(
        child: Column(
          children: List.generate(cityList.length, (int index) {
            return Container(
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
                  Expanded(
                    child: Text(
                      cityList[index].name,
                      style: const TextStyle(
                        color: style_8,
                        fontSize: 17,
                        fontWeight: FontWeight.w500,
                        fontFamily: 'Space Grotesk',
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      softWrap: false,
                    ),
                  ),
                  // const Expanded(child: SizedBox()),
                  IconButton(
                    onPressed: () {
                      CityIoApi.removeCity(cityList[index])
                      ? const SizedBox()
                      : ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          padding: const EdgeInsets.all(0),
                          content: Container(
                            color: Colors.red,
                            height: 30,
                            width: MediaQuery.of(context).size.width,
                            child: Center(
                              child: Text(
                                Language.get('There should be at least one city'),
                                style: const TextStyle(color: Colors.white, fontFamily: 'Space Grotesk', fontSize: 16, fontWeight: FontWeight.w500),
                              ),
                            ),
                          ),
                          duration: Duration(seconds: 1),
                        ),
                      );
                    },
                    icon: const Icon(Icons.close, color: style_96, size: 24),
                  ),
                  const SizedBox(width: 10),
                ],
              ),
            );
          }),
        ),
      ),
    );
  }
}

class Testing extends StatefulWidget {
  final VoidCallback refresh;
  const Testing({super.key, required this.refresh});

  @override
  State<Testing> createState() => _TestingState();
}

class _TestingState extends State<Testing> {
  @override
  Widget build(BuildContext context) {
    return Autocomplete<SearchedLocation>(
      optionsBuilder: (TextEditingValue textEditingValue) {
        return CityIoApi.getDebouncedOptions(textEditingValue);
      },
      displayStringForOption: (option) => option.name,
      optionsViewBuilder: (context, onSelected, options) {
        return Align(
          alignment: Alignment.topLeft,
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: const Color(0xFF282644),
            ),
            child: ListView.builder(
              itemCount: options.length,
              itemBuilder: (BuildContext context, int index) {
                final SearchedLocation option = options.elementAt(index);

                void onComplete() {
                  CityIoApi.addCity(option);
                  widget.refresh();
                  onSelected(option);
                }

                return ListTile(
                  onTap: onComplete,
                  leading: const Icon(
                    Icons.location_on_outlined,
                    color: style_0,
                    size: 24,
                  ),
                  title: Text(
                    option.name,
                    style: const TextStyle(
                      color: style_0,
                      fontFamily: 'Space Grotesk',
                      fontWeight: FontWeight.w500,
                      fontSize: 16,
                    ),
                  ),
                  subtitle: Text(
                    "${option.county}${option.county.isEmpty ? "" : ", "}"
                    "${option.state}${option.state.isEmpty ? "" : ", "}"
                    "${option.country}",
                    style: const TextStyle(
                      color: style_64,
                      fontFamily: 'Space Grotesk',
                      fontSize: 14,
                    ),
                  ),
                  trailing: IconButton(
                    onPressed: onComplete,
                    icon: const Icon(Icons.add, color: style_0, size: 24),
                  ),
                );
              },
            ),
          ),
        );
      },
      fieldViewBuilder: (context, controller, focusNode, onEditingComplete) {
        return SearchBar(controller: controller, focusNode: focusNode);
      },
    );
  }
}
