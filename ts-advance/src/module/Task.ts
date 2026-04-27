import { taskType, typeMakeTask } from "../interface/task.type";

abstract class BaseTask {
  abstract get lengthTaskData(): number | string;
  abstract get AllTask(): taskType[];
}

//  Service Layer

export class MakeTask extends BaseTask implements typeMakeTask {
  taskData: taskType[] = [];

  addTask(task: string, author: string) {
    let newTask: taskType = {
      name: task,
      createdAt: new Date(),
      isDo: true,
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

  get AllTask(): taskType[] {
    return this.taskData;
  }

  get lengthTaskData(): number | string {
    return this.taskData.length ? this.taskData.length : "TaskData is empty";
  }
}
