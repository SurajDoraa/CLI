import readline, { createInterface } from "readline";
import chalk from "chalk"; // Import the chalk library

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const showMenu = () => {
    console.log(chalk.blue("\n1. Add a Task"));
    console.log(chalk.green("2. View Tasks"));
    console.log(chalk.red("3. Exit"));
    rl.question(chalk.yellow("Choose an option: "), handleInput);
};

const handleInput = (option) => {
    if (option === "1") {
        rl.question(chalk.cyan("Enter the Task: "), (task) => {
            todos.push(task);
            console.log(chalk.greenBright(`Task added: ${task}`));
            showMenu();
        });
    } else if (option === "2") {
        if (todos.length === 0) {
            console.log(chalk.redBright("\nNo tasks found."));
        } else {
            console.log(chalk.magenta("\nYour Todo List:"));
            todos.forEach((task, index) => {
                console.log(chalk.whiteBright(`${index + 1}. ${task}`));
            });
        }
        showMenu();
    } else if (option === "3") {
        console.log(chalk.blueBright("\nGood Bye!"));
        rl.close();
    } else {
        console.log(chalk.red("Invalid Option. Please try again."));
        showMenu();
    }
};

showMenu();
