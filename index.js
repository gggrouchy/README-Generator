// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";


// const inquirer = require("inquirer");
// const fs = require("fs");
// const path = require("path");
// const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What the name of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide contribution guidelines.",
    },
    {
        type: "input",
        name: "test",
        message: "Provide test instructions.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license.",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

]; 



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);  
}
  
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      console.log("Generating README File...");
        writeToFile("README.md", generateMarkdown(answers));
    });
}

// Function call to initialize app

init(); 
