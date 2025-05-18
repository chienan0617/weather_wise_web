import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';

class EditBottomBar extends StatefulWidget {
  const EditBottomBar({super.key});

  @override
  State<EditBottomBar> createState() => _EditBottomBarState();
}

class _EditBottomBarState extends State<EditBottomBar> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Container(
      height: size.height * 0.075,
      decoration: BoxDecoration(
        color: style_n8p,
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          EditBottomBarItem(icon: Icons.check, onPressed: () {}),
          const SizedBox(width: 20)
          // EditBottomBarItem(icon: Icons.check, onPressed: () {}),
          // EditBottomBarItem(icon: Icons.check, onPressed: () {}),
        ],
      ),
    );
  }
}

class EditBottomBarItem extends StatelessWidget {
  final IconData icon;
  final VoidCallback onPressed;

  const EditBottomBarItem({
    super.key,
    required this.icon,
    required this.onPressed
  });

  @override
  Widget build(BuildContext context) {
    return IconButton(
      onPressed: onPressed,
      icon: Icon(icon, size: 28, color: style_0),
    );
  }
}
