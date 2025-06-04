import 'dart:convert';
import 'package:flutter/services.dart';
import 'package:hive/hive.dart';

part 'location.mod.g.dart';

@HiveType(typeId: 9)
class SearchedLocation {
  /// 國家名稱
  @HiveField(0)
  final String country;

  /// 州或省份名稱
  @HiveField(1)
  final String state;

  /// 縣或地區名稱
  @HiveField(2)
  final String county;

  /// 城市或地點名稱
  @HiveField(3)
  final String name;

  /// 緯度
  @HiveField(4)
  final double lat;

  /// 經度
  @HiveField(5)
  final double lng;

  SearchedLocation(
    this.country,
    this.state,
    this.county,
    this.name,
    this.lat,
    this.lng,
  );

  int getHash() {
    return Object.hashAll([country, state, county, name]);
  }

  /// 從 Map 物件建立 SearchedLocation 實例
  factory SearchedLocation.fromMap(Map<String, dynamic> map) {
    return SearchedLocation(
      map['country'] ?? "",
      map['state'] ?? "",
      map['county'] ?? "",
      map['name'] ?? "",
      double.tryParse(map['lat'] ?? '0') ?? 0.0,
      double.tryParse(map['lng'] ?? '0') ?? 0.0,
    );
  }

  /// 靜態變數，儲存所有的 SearchedLocation 實例
  static List<SearchedLocation> locations = [];

  /// 初始化方法，從 JSON 檔案載入資料並轉換為 SearchedLocation 實例
  static Future<void> initialize() async {
    final String originContents = await rootBundle.loadString(
      'assets/city/world_cities.json',
    );

    locations = (jsonDecode(originContents) as List<dynamic>)
      .map((item) => SearchedLocation.fromMap(item as Map<String, dynamic>))
      .toList();
  }

  @override
  String toString() {
    return hashCode.toString();
  }
}
