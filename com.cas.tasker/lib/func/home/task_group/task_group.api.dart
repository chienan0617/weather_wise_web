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
    Data.taskGroup.deleteTaskInTaskGroup(task.taskGroupName, task.index);
  }
}
