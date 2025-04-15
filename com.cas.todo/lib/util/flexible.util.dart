import 'package:flutter/material.dart';

enum Device {
  mobile,
  // desktop,
  tablet,
}

class FlexWidget {
  static Device type((int, int) size)
  => size.$1 >= size.$2 ? Device.tablet : Device.mobile;

  static Widget flex({
    Widget mobile = const SizedBox(),
    Widget tablet = const SizedBox(),
    Widget? any,

    BuildContext? context,
    BoxConstraints? cons,
    (int, int)? size,
  }) {
    if (any != null) return any;

    (int, int) screen = (
      cons != null ? cons.maxWidth.toInt() : size!.$1,
      cons != null ? cons.maxHeight.toInt() : size!.$2,
    );

    switch (FlexWidget.type(screen)) {
      case Device.mobile: return mobile;
      case Device.tablet: return tablet;
    }
  }
}