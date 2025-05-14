import 'package:flutter/material.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/init/init.dart';



class BaseModel implements Registerable {
  BaseModel() {Initialize.register(this);}

  @override
  void initialize() {
    Data.app.put('primaryColor', 0xFFffffff);
  }

  @override
  void checkKey() {
    Data.app.checkKeyExist('pageIndex', 0);
  }

  Color getPrimaryColor() => Color(Data.app.get<int>('primaryColor'));
  int getPageIndex() => Data.app.get<int>('pageIndex');
  int getLanguageIndex() => Data.app.get<int>('languageIndex');
}
