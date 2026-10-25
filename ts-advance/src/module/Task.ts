import { MeasureTime } from "../decorator/MeastuerTime";
import { Validate } from "../decorator/Validate";
import { taskType, typeMakeTask } from "../interface/task.type";

abstract class BaseTask {
  abstract lengthTaskData(): number | string;
  abstract AllTask(): taskType[];
}

//  Service Layer

export class MakeTask extends BaseTask implements typeMakeTask {
  taskData: taskType[] = [];

  @Validate
  addTask(task: string, author: string) {
    let newTask: taskType = {
      name: task,
      createdAt: new Date(),
      isDo: true,
      author,
    };

    this.taskData.push(newTask);
    return "Task is adding";
  }

  removeTask(nameTask: string) {
    const updateTask = this.taskData.find((value) => value.name == nameTask);

    if (!updateTask) {
      return "Name task is not found : RemoveTask";
    }

    const newTaskData = this.taskData.filter(
      (value) => value.name !== nameTask,
    );

    this.taskData = newTaskData;

    return `Task ${nameTask} is Deleting`;
  }

  @MeasureTime
  AllTask(): taskType[] {
    return this.taskData;
  }

  lengthTaskData(): number | string {
    return this.taskData.length ? this.taskData.length : "TaskData is empty";
  }
}
