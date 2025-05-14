import 'package:flutter/material.dart';
import 'package:tasker/data/data.dart';



class BaseModel {
  static Color getPrimaryColor() => Color(Data.app.get<int>('primaryColor'));
}