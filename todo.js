// A simple to-do list application in JavaScript

let todo = [];

let choice = prompt("What would you like to do? (add, remove, list, quit)");

while (true) {
    if (choice === "quit") {
        break;
    }
    else if (choice === "add") {
        let task = prompt("Enter a new task:");
        todo.push(task);
    } else if (choice === "remove") {
        let index = prompt("Enter the index of the task to remove:");
        todo.splice(index, 1);
    } else if (choice === "list") {
        console.log("To-Do List:");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
    } else {
        console.log("Invalid choice. Please try again.");
    }
}