import 'package:flutter/material.dart';
import 'package:tasker/func/home/task_group/task_group.api.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/data/type.dart';

class EditBottomBar extends StatefulWidget {
  final TaskGroup taskGroup;
  final void Function() refresh;
  const EditBottomBar({
    super.key,
    required this.taskGroup,
    required this.refresh,
  });

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
          EditBottomBarItem(icon: Icons.check, onPressed: () {
            // var taskGroup = widget.taskGroup;
            // taskGroup.name = TaskGroupEditInputCtrl.title.controller.text;
            TaskGroupApi.onChangeTaskGroupName(widget.taskGroup);
            // print('successfully');
            // print(Data.taskGroup.getAllTaskGroup().values.where((i) {print(i.name); return false;}));
            Navigator.pop(context);
            widget.refresh();
          }),
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
