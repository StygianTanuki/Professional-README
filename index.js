// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Creates an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of the project?",
      },
      {
        type: "list",
        name: "license",
        message: "What type of license are you using?",
        choices: ["MIT", "BSD3.0", "APACHE2.0", "GPL3.0"],
      },
      {
        type: "input",
        name: "features",
        message: "What features does the project have?",
      },
      {
        type: "input",
        name: "usage",
        message: "What examples can you provide for the project?",
      },
      {
        type: "input",
        name: "install",
        message: "Installation Instructions",
      },
      {
        type: "input",
        name: "contribute",
        message: "How to Contribute",
      },
      {
        type: "input",
        name: "links",
        message: "What links are provided?",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your E-Mail:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username:",
      }
];

// Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function () {
        console.log("File has been saved.");
    })
}

// Creates a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=> {
        const readMeDoc = generateMarkdown(data);
        // Creates a file in the Output folder for the README to be created in
        writeToFile("Output/README.md", readMeDoc);
    });
}

// Function call to initialize app
init();