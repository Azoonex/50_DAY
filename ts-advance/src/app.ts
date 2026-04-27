import { MakeTask } from "./module/Task";

const makeTask = new MakeTask()

makeTask.addTask("Task 1","amir");
makeTask.addTask("Task 2","amir reza");
makeTask.addTask("Task 3","amir hesam");

makeTask.removeTask("Task 1")


console.log(makeTask.AllTask())