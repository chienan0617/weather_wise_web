import 'package:hive_flutter/hive_flutter.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/data/data.dart';
import 'package:tasker/util/data/type.dart';

class TaskGroupData implements DataBase {
  late final Box? box;

  TaskGroupData() {
    Data.register(this);
  }

  @override
  Box getBox() => box!;

  @override
  Future<void> initialize() async => box = await Hive.openBox('taskGroup');

  @override
  Map<String, dynamic> getAllData() {
    return box?.toMap().cast<String, dynamic>() ?? {};
  }

  void deleteTaskInTaskGroup(
    String taskGroupName, int taskIndex
  ) {
    TaskGroup taskGroup = getTaskGroup(taskGroupName);
    taskGroup.tasks.remove(taskIndex);
  }

  int newTaskGroupIndex() {
    if (!box!.containsKey('index')) {
      box?.put('index', 0);
    }

    int index = box?.get('index') ?? 0;
    box?.put('index', index + 1);
    return index + 1;
  }

  void putTaskGroup(String groupName, TaskGroup taskGroup) {
    Map data = box?.get('group');
    data[taskGroup.name] = taskGroup;
    box!.put('group', data);
  }

  void addTaskToTaskGroup(Task task, int day) {
    TaskGroup taskGroup = getTaskGroup(task.taskGroupName);
    taskGroup.tasks[task.index] = task;
    putTaskGroup(task.taskGroupName, taskGroup);
  }

  Map getAllTaskGroup() => (box?.get('group') as Map);
  TaskGroup getTaskGroup(String name) => (box?.get('group') as Map)[name];

  @override
  void checkKeyExist(String key, defaultValue) {
    if (!box!.containsKey(key)) {
      box?.put(key, defaultValue);
    }
  }

  @override
  get<T>(name) => box?.get(name) as T;

  @override
  void put<T>(String name, value) => box?.put(name, value);

  @override
  void initData() {
    checkKeyExist('index', 1);
    checkKeyExist('group', {});

    if (!box!.get('group').containsKey('default')) {
      var data = box!.get('group');
      data['default'] = TaskGroup(
        'default',
        primary.toARGB32(),
        newTaskGroupIndex(),
        'title',
        'subtitle',
        DateTime.now(),
        DateTime.now(),
        {}
      );
      box?.put('group', data);
    }
  }
}
