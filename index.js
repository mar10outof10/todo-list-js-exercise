// Create a new task by making a task object
const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markComplete: function() {
      this.complete = true;
    }
  };

  return task;
};


// Print the state of a task to the console in a nice readable way

const task1 = newTask("Clean Cat Litter", "Shovel the poop out the box");
const task2 = newTask("Do Laundry", "Launder things");
const tasks = [task1, task2];

console.log(tasks);
console.log(task1.title);
task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
