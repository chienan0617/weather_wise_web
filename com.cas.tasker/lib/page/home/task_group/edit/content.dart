import 'package:flutter/material.dart';
import 'package:tasker/func/home/task_group/task_group.api.dart';
import 'package:tasker/library.util.dart';
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
    List<Task> tasks = widget.taskGroup.tasks.values.toList();

    return SingleChildScrollView(
      child: Column(
        children: [
          Finishing(text: '已完成'),

          Column(
            children: List.generate(tasks.length, (int index) {
              return !tasks[index].done ? CheckboxListTile(
                contentPadding: const EdgeInsets.only(left: 20, right: 10),
                value: tasks[index].done,
                onChanged: (newValue) {
                  TaskGroupApi.updateNewInfo(tasks[index].date, tasks[index], widget.taskGroup);
                  tasks[index].done = !tasks[index].done;
                  setState(() {});
                },
                title: Text(
                  tasks[index].title,
                  maxLines: 1,
                  style: const TextStyle(
                    color: style_0,
                    fontSize: 18,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                activeColor: Color(widget.taskGroup.color),
                side: const BorderSide(color: style_0),
                controlAffinity: ListTileControlAffinity.leading,
                subtitle: Text(
                  '${tasks[index].date[1]}-${tasks[index].date[2]}',
                  style: const TextStyle(color: style_72, fontSize: 13),
                ),
                secondary: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  child: IconButton(
                    onPressed: ()  {
                      TaskGroupApi.deleteTask(tasks[index]);
                      setState(() {});
                    },
                    icon: const Icon(
                      Icons.close, color: style_72, size: 24,
                    )
                  )
                ),
              ) : const SizedBox();
            }),
          ),

          Finishing(text: '未完成'),

          Column(
            children: List.generate(tasks.length, (int index) {
              return tasks[index].done ? CheckboxListTile(
                contentPadding: const EdgeInsets.only(left: 20, right: 10),
                value: tasks[index].done,
                onChanged: (newValue) {
                  TaskGroupApi.updateNewInfo(tasks[index].date, tasks[index], widget.taskGroup);
                  tasks[index].done = !tasks[index].done;
                  setState(() {});
                },
                title: Text(
                  tasks[index].title,
                  maxLines: 1,
                  style: const TextStyle(
                    color: style_0,
                    fontSize: 18,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                activeColor: Color(widget.taskGroup.color),
                side: const BorderSide(color: style_0),
                controlAffinity: ListTileControlAffinity.leading,
                subtitle: Text(
                  '${tasks[index].date[1]}-${tasks[index].date[2]}',
                  style: const TextStyle(color: style_72, fontSize: 13),
                ),
                secondary: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  child: IconButton(
                    onPressed: ()  {
                      TaskGroupApi.deleteTask(tasks[index]);
                      setState(() {});
                    },
                    icon: const Icon(
                      Icons.close, color: style_72, size: 24,
                    )
                  )
                ),
              ) : const SizedBox();
            }),
          ),
        ],
      ),
    );
  }
}

class Finishing extends StatelessWidget {
  final String text;

  const Finishing({
    super.key,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        SizedBox(width: 20),
        Text(text, style: TextStyle(color: style_128, fontSize: 16)),
        SizedBox(width: 20),
        Expanded(child: Divider(thickness: 0.5,)),
        SizedBox(width: 20)
      ],
    );
  }
}
