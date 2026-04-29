import { MakeTask } from "./module/Task";

const makeTask = new MakeTask();

makeTask.addTask("Task 1", "amir");
makeTask.addTask("Task 2", "amir reza");
makeTask.addTask("Task 3", "amir hesam");

makeTask.removeTask("Task 1");

console.log(makeTask.AllTask());

const div = 50 / 100;
const div2 = 150 / 100 + 50;

// salary of person

const salary = 100 / 10 + 300;
const incrementSalary = 20 / 100;

console.log(div, div2, salary, incrementSalary * 400 - 400);
const price = 432;
const percent = 0.02;

const positive = price * (1 + percent);
const negative = price * (1 - percent);


console.log(positive,negative);






