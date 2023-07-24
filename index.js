// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
        name: "credits",
        message: "List the collaborators",
      },
      {
        type: "input",
        name: "links",
        message: "What links are provided?",
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("File has been saved.");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=> {
        const readMeDoc = generateMarkdown(data);
        writeToFile("/output/README.md", readMeDoc);
    });
}

// Function call to initialize app
init();
