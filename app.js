#! /usr/bin/env node
//import the inquirer module ,which is a command line interface for node.js
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.bgGreenBright("\n\t\t WORD COUNTER \n\t"));
//declare a constant "answer" and assign it the result of the inquirer.promt function
const answers = await inquirer.prompt([
    {
        name: "sentence", //property
        type: "input",
        message: "Please enter your sentence to count the words:",
        transformer: (input) => {
            // Use for changing the color of the user input.
            return chalk.green.bold(input);
        }
    }
]);
// trim means removing white spaces 
// split convert element them into an array format
const words = answers.sentence.trim().split(" ");
if (!answers.sentence) {
    console.log(chalk.red.bold("No sentence entered. Please enter a sentence."));
}
//print the array of words to the use of console 
// console.log(words)
// Print the number of words in the sentence.
else {
    console.log((`your sentence words is: `) + chalk.yellow(`${words.length}`));
}
