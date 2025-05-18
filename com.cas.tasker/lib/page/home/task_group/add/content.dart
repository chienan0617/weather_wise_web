import 'package:flutter/material.dart';
import 'package:tasker/func/home/task_group/add/input.ctrl.dart';
import 'package:tasker/library.util.dart';

class AddContent extends StatefulWidget {
  const AddContent({super.key});

  @override
  State<AddContent> createState() => _AddContentState();
}

class _AddContentState extends State<AddContent> {
  @override
  void initState() {
    super.initState();
    TaskGroupAddInputCtrl.name.init();
  }

  @override
  Widget build(BuildContext context) {
    Widget section(
      IconData icon,
      String title,
      Widget secondary,
      void Function() onPressed,
    ) {
      return ListTile(
        leading: Icon(icon, size: 20, color: style_0),
        title: Text(
          title,
          style: TextStyle(
            color: style_0,
            fontSize: 20,
            fontWeight: FontWeight.w500,
          ),
        ),
        trailing: secondary,
        onTap: onPressed,
      );
    }

    return Container(
      margin: EdgeInsets.symmetric(horizontal: 20, vertical: 40),
      decoration: BoxDecoration(
        color: style_n0p,
        borderRadius: BorderRadius.circular(12.5),
      ),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 7.5),
            child: TextField(
              controller: TaskGroupAddInputCtrl.name.controller,
              style: const TextStyle(
                color: style_0,
                fontSize: 18,
                fontWeight: FontWeight.w400,
              ),
              cursorColor: primary,
              decoration: InputDecoration(
                hintMaxLines: 1,
                hintText: 'add name',
                hintStyle: TextStyle(
                  color: style_96,
                  fontSize: 18,
                  fontWeight: FontWeight.w400,
                ),
                prefixIcon: Icon(Icons.text_fields, color: style_0, size: 20),
              ),
            ),
          ),
          section(
            Icons.color_lens_outlined,
            'color',
            Row(
              mainAxisSize: MainAxisSize.min,
              spacing: 7.5,
              children: [
                Text(
                  TaskGroupAddInputCtrl.color.currentColorName(),
                  style: TextStyle(color: style_96, fontSize: 16)
                ),
                Container(
                  width: 17.5,
                  height: 17.5,
                  decoration: BoxDecoration(
                    color: TaskGroupAddInputCtrl.color.currentColor(),
                    borderRadius: BorderRadius.circular(5),
                  ),
                ),
              ],
            ),
            () {
              showDialog(
                context: context,
                builder: (context) {
                  return PickColorDialog(refresh: () => setState(() {}));
                },
              );
            },
          ),
        ],
      ),
    );
  }
}

class PickColorDialog extends StatefulWidget {
  final VoidCallback refresh;
  const PickColorDialog({super.key, required this.refresh});

  @override
  State<PickColorDialog> createState() => _PickColorDialogState();
}

class _PickColorDialogState extends State<PickColorDialog> {


  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      backgroundColor: style_n8p,
      content: SingleChildScrollView(
        child: Column(
          children: List.generate(TaskGroupAddInputCtrl.color.length, (int index) {
            return ListTile(
              onTap: () {
                TaskGroupAddInputCtrl.color.onChanged(index);
                setState(() {});
                widget.refresh();
                Navigator.pop(context);
              },
              leading: Container(
                width: 20,
                height: 20,
                decoration: BoxDecoration(
                  color: TaskGroupAddInputCtrl.color.colorList[index],
                  borderRadius: BorderRadius.circular(7.5),
                ),
              ),
              title: Text(
                TaskGroupAddInputCtrl.color.colorNames[index],
                style: TextStyle(color: style_0, fontSize: 18),
              ),
              trailing: TaskGroupAddInputCtrl.color.currentIndex == index
                ? Icon(Icons.check, color: style_0, size: 24)
                : const SizedBox(),
            );
          }),
        ),
      ),
    );
  }
}
