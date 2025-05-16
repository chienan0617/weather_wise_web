import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/task_group/edit/edit.m.dart';
import 'package:tasker/util/data/type.dart';

class TaskGroupCard extends StatefulWidget {
  final TaskGroup taskGroup;

  const TaskGroupCard({super.key, required this.taskGroup});

  @override
  State<TaskGroupCard> createState() => _TaskGroupCardState();
}

class _TaskGroupCardState extends State<TaskGroupCard> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return GestureDetector(
      onTap: () => Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => TaskGroupEditScreen(
            taskGroup: widget.taskGroup
          ),
        ),
      ),
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        height: size.height * 0.175,
        width: size.width,
        decoration: BoxDecoration(
          color: style_n16p,
          borderRadius: BorderRadius.circular(15),
          border: Border(
            left: BorderSide(color: Color(widget.taskGroup.color), width: 7.5),
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // title
            Row(
              // mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const SizedBox(width: 15),
                Text(
                  widget.taskGroup.name,
                  style: const TextStyle(
                    color: style_0,
                    fontSize: 28,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const Expanded(child: SizedBox()),
                IconButton(
                  onPressed: () {},
                  icon: const Icon(
                    Icons.delete_outline,
                    color: style_0,
                    size: 28,
                  ),
                ),
                const SizedBox(width: 10),
              ],
            ),
            const Expanded(child: SizedBox()),
            // content
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 7.5),
                decoration: BoxDecoration(
                  color: Colors.blue.withAlpha(128),
                  borderRadius: BorderRadius.circular(10),
                ),

                child: SizedBox(
                  width: 70,
                  child: Row(
                    children: [
                      Icon(
                        Icons.calendar_month,
                        color: Colors.blue[300],
                        size: 18,
                      ),
                      const SizedBox(width: 5),
                      Text(
                        widget.taskGroup.createTime.toString().substring(5, 10),
                        style: TextStyle(color: Colors.blue[300], fontSize: 16),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
