import inquirer from "inquirer
    interface Task {
    name: string;
    completed: boolean;
}

function displayTasks(tasks: Task[]): void {
    console.log('Tasks:');
    tasks.forEach((task: Task, index: number) => {
        console.log(`${index + 1}. [${task.completed ? '✅' : '❌'}] ${task.name}`);
    });
}

// Example usage:
const tasks: Task[] = [
    { name: 'Buy groceries', completed: false },
    { name: 'Do laundry', completed: true },
    { name: 'Clean room', completed: false }
];

displayTasks(tasks);



