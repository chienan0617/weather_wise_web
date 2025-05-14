import 'package:flutter/material.dart';
import 'package:tasker/data/data.dart';
import 'package:tasker/model/init/init.dart';
import 'package:tasker/model/model.dart';



class BaseModel implements Registerable {
  BaseModel() {Initialize.register(this);}

  @override
  void initialize() {
    // print(095324);
    Data.app.put('primaryColor', 0xFFffffff);
  }

  @override
  void checkKey() {
    Data.app.checkKey('pageIndex', 0);
  }

  Color getPrimaryColor() => Color(Data.app.get<int>('primaryColor'));
  int getPageIndex() => Data.app.get('pageIndex');
}
