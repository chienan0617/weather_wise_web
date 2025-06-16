import 'package:flutter/material.dart';
import 'package:weather_wise/func/controller/home_bottom_bar.dart';
import 'package:weather_wise/util/file_handle.dart';

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
            decoration: BoxDecoration(color: Color(0xFF1C1933)),
            accountName: Text(
              'CAStudio',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            accountEmail: Text('normal'),
            currentAccountPicture: CircleAvatar(
              backgroundImage: AssetImage('assets/image/logo_cas.webp'),
            ),
          ),
          const Align(
            alignment: Alignment.topRight,
            child: Banner(
              message: 'Web Alpha',
              location: BannerLocation.topEnd,
              // color: Colors.lightBlue,
              // textStyle: TextStyle(
              //   // fontSize: 14
              // ),
            ),
          ),
          Container(
            color: const Color(0xFF111121),
            // width: double.infinity,
            child: Column(children: []),
          ),
          ListTile(
            leading: const Icon(Icons.home, color: Colors.white),
            title: Text(
              Language.word('Home'),
              style: const TextStyle(color: Colors.white),
            ),
            onTap: () {
              Navigator.pop(context);
              HomePageCtrl.onValueChanged(0);
            },
          ),
          // const Expanded(child: SizedBox()),
          ListTile(
            leading: const Icon(Icons.settings_outlined, color: Colors.white),
            title: Text(
              Language.word('Setting'),
              style: const TextStyle(color: Colors.white),
            ),
            onTap: () {
              Navigator.pop(context);
              HomePageCtrl.onValueChanged(4);
            },
          ),

          ListTile(
            leading: const Icon(Icons.info_outline, color: Colors.white),
            title: Text('About', style: const TextStyle(color: Colors.white)),
            onTap: showAbout,
          ),
        ],
      ),
    );
  }

  void showAbout() {
    showAboutDialog(
      context: context,
      applicationName: 'Weather Wise',
      applicationIcon: Image.asset(
        'assets/icon/app_icon_debug_web.png',
        width: 50,
        height: 50,
      ),
      applicationLegalese: 'Copy right (c) CAStudio',
      applicationVersion: 'Web: 1.4.1-Alpha',
      // barrierColor: Colors.amber,
      barrierLabel: 'label',
    );
  }
}
