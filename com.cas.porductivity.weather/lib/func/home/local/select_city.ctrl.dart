import 'package:flutter/material.dart';
import 'package:weather/util/data/data.dart';
import 'package:weather/util/location.dart'; // 假設這裡有定義 SearchedLocation

class SelectCityCtrl {
  // 1. _locations 改成 SearchedLocation list
  static List<SearchedLocation> _locations = _loadLocationsFromStorage();
  // 2. currentCity 改成目前被選到的 SearchedLocation（或 null）
  static SearchedLocation? currentLocation =
      _locations.isNotEmpty ? _locations[0] : null;

  // 3. rebuildLocalPage 參數改為帶 (double, double)
  static void Function(double, double) rebuildLocalPage = (_, __) {};

  static List<SearchedLocation> _loadLocationsFromStorage() {
    final raw = (Data.app.get('location') as List).cast<SearchedLocation>();
    // `raw` 已經是 SearchedLocation list，若要去重可以自行處理 name
    // 以下示範簡單做法：去重後只留下第一筆
    final Map<String, SearchedLocation> dedup = {};
    for (var loc in raw) {
      if (!dedup.containsKey(loc.name)) {
        dedup[loc.name] = loc;
      }
    }
    return dedup.values.toList();
  }

  static void reloadLocations() {
    _locations = _loadLocationsFromStorage();
    if (_locations.isEmpty) {
      currentLocation = null;
    } else {
      if (currentLocation == null ||
          !_locations.any((l) => l.name == currentLocation!.name)) {
        currentLocation = _locations[0];
      }
    }
    // 只要 local list 變了，就讓 call 這個 callback 重建下層畫面（像下拉清單）
    refreshCallback();
  }

  // 下拉選單用：必須把 SearchedLocation list 轉成 DropdownMenuItem
  static List<DropdownMenuItem<String>> get dropdownItems {
    return _locations.map((loc) {
      return DropdownMenuItem<String>(
        value: loc.name, // value 還是字串 city name
        child: Text(
          loc.name,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 14,
            fontFamily: "Space Grotesk",
          ),
        ),
      );
    }).toList();
  }

  // 4. 當使用者在下拉選到 newValue（String name）時，先找出對應的 SearchedLocation
  static void onChanged(String newValue) {
    final matched = _locations.firstWhere((loc) => loc.name == newValue);
    currentLocation = matched;
    refreshCallback();
    // ❗️ 絕對要這樣寫：matched.lat, matched.lng
    rebuildLocalPage(matched.lat, matched.lng);
  }

  // 這邊保留給 ColorGradient 用的 callback
  static VoidCallback refreshCallback = () {};
}
