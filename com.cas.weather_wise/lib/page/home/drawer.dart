import 'package:flutter/material.dart';

class SideBar extends StatefulWidget {
  const SideBar({super.key});

  @override
  State<SideBar> createState() => _SideBarState();
}

class _SideBarState extends State<SideBar> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: const Color(0xFF111121),
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          const UserAccountsDrawerHeader(
            decoration: BoxDecoration(
              color: Color(0xFF1C1933),
            ),
            accountName: Text(
              'CAStudio',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            accountEmail: Text('normal'),
            currentAccountPicture: CircleAvatar(
              backgroundImage: AssetImage('assets/image/logo_cas.webp'),
            ),
          ),
          Container(
            color: const Color(0xFF111121),
            child: Column(
              children: [

              ],
            ),
          ),
          ListTile(
            leading: const Icon(Icons.home, color: Colors.white),
            title: const Text('首頁', style: TextStyle(color: Colors.white)),
            onTap: () {
              Navigator.pop(context);
            },
          ),
          // const Expanded(child: SizedBox()),
          ListTile(
            leading: const Icon(Icons.home, color: Colors.white),
            title: const Text('首頁', style: TextStyle(color: Colors.white)),
            onTap: () {
              Navigator.pop(context);
            },
          ),
        ],
      ),
    );
  }
}
