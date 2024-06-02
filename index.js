#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Display a Welcome message:
console.log(chalk.bold.cyanBright("\n \tHello! Ready to count words? Type your text to start:"));
// Prompt the user to type a sentence:
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bold("Type your text and we’ll count the words instantly:"),
    },
]);
// Trim the sentence and split it into words based on "spaces":
let words = answer.sentence.trim().split(" ");
// Print the array of words to the console:
console.log(chalk.bold("- sentences words"));
console.log(words);
// Perform analysis on the user's input sentence.
console.log(chalk.bold(`You have ${chalk.bold.cyan(words.length)} words in your text.`));
