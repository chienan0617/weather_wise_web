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
  }
}
