import 'package:flutter/material.dart';
import 'package:tasker/annotation.dart';
import 'package:tasker/func/home/task_group/add/input.ctrl.dart';
import 'package:tasker/func/home/task_group/input.ctrl.dart';
import 'package:tasker/page/home/task_group/card.mod.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/data/type.dart';

class TaskGroupApi {
  static List<TaskGroup> getAllTaskGroup() {
    return Data.taskGroup.getAllTaskGroup().values.toList().cast<TaskGroup>();
  }

  static void updateNewInfo(
    List<int> date, Task task, TaskGroup taskGroup
  ) {
    Data.task.storeTask(date[0], date[1], date[2], task.index, task);
    Data.taskGroup.putTaskGroup(taskGroup.name, taskGroup);
  }

  static void deleteTask(Task task) {
    Data.task.deleteTask(
      task.date[0],
      task.date[1],
      task.date[2],
      task.index,
      task
    );
    Data.taskGroup.deleteTaskInTaskGroup(task.taskGroupName);
  }

  static void storeAddNewTaskGroup() {
    TaskGroup taskGroup = TaskGroup(
      TaskGroupAddInputCtrl.name.getValue(),
      TaskGroupAddInputCtrl.color.currentColor().toARGB32(),
      Data.taskGroup.newTaskGroupIndex(),
      TaskGroupAddInputCtrl.name.getValue(),
      'not yet enable',
      DateTime.now(),
      DateTime.now(),
      {}
    );
    Data.taskGroup.putTaskGroup(taskGroup.name, taskGroup);
  }

  // * use while deleting the task group
  static bool checkTaskGroupWithTasksNotDone(TaskGroup taskGroup) {
    return taskGroup.tasks.values.isNotEmpty ? true : false;
  }

  static void onDeleteButtonPressed(
    TaskGroup taskGroup, void Function() refresh, BuildContext context
  ) {
    checkTaskGroupWithTasksNotDone(taskGroup)
    ? showDeleteDialog(context, taskGroup, refresh)
    : deleteTaskGroup(taskGroup, refresh);
  }

  static void deleteTaskGroup(TaskGroup taskGroup, Function() refresh) {
    Data.taskGroup.deleteTaskGroup(taskGroup);
    Data.task.onDeleteTaskGroup(taskGroup.name);
    refresh();
  }

  @UseIn('edit screen when pressed check button')
  static void onChangeTaskGroupName(TaskGroup originTaskGroup) {
    // Data.taskGroup.putTaskGroup(taskGroupOriginName, taskGroup);
    // TaskGroup newTaskGroup = originTaskGroup;
    var allData = Data.taskGroup.getAllData();
    allData['group'].remove(originTaskGroup.name);

    String newName = TaskGroupEditInputCtrl.title.controller.text;
    String oldName = originTaskGroup.name;
    originTaskGroup.name = newName;

    allData['group'][newName] = originTaskGroup;

    Data.taskGroup.box?.putAll(allData);
    // Data.task.onDeleteTaskGroup(oldName);
    print('282');
    Data.task.onChangeTaskGroupName(newName, oldName);
    print('233');
    Data.taskGroup.onTaskGroupNameChange(newName, oldName);
  }
}
