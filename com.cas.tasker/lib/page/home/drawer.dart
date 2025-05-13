import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';

class SideBar extends StatefulWidget {
  const SideBar({super.key});

  @override
  State<SideBar> createState() => SideBarState();
}

class SideBarState extends State<SideBar> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: primary,
      child: Column(
        children: [
          ListTile()
        ],
      ),
    );
  }
}
