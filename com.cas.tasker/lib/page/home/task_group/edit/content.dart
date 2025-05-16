import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/data/type.dart';

class EditContentItem extends StatefulWidget {
  final TaskGroup taskGroup;

  const EditContentItem({super.key, required this.taskGroup});

  @override
  State<EditContentItem> createState() => _EditContentItemState();
}

class _EditContentItemState extends State<EditContentItem> {
  @override
  Widget build(BuildContext context) {
    // to prevent update
    TaskGroup taskGroup = Data.taskGroup.getTaskGroup(widget.taskGroup.name);
    List<Task> taskGroupTasks = taskGroup.tasks.values.toList();

    return SingleChildScrollView(
      child: Column(
        children: List.generate(taskGroupTasks.length, (int index) {
          return Column(
            children: [
              Row(children: []),

              CheckboxListTile(
                contentPadding: const EdgeInsets.symmetric(horizontal: 20),
                value: taskGroupTasks[index].done,
                onChanged: (newValue) {
                  setState(() {
                    //
                  });
                },
                title: Text(
                  taskGroupTasks[index].title,
                  maxLines: 1,
                  style: const TextStyle(
                    color: style_0,
                    fontSize: 20,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                activeColor: Color(taskGroup.color),
                side: const BorderSide(color: style_0),
                controlAffinity: ListTileControlAffinity.leading,
                secondary: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  child: Text(
                    taskGroupTasks[index].lastEdit.toString().substring(5, 10),
                    style: const TextStyle(color: style_72, fontSize: 16),
                  ),
                ),
              ),
            ],
          );
        }),
      ),
    );
  }
}
