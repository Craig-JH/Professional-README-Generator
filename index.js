// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("./utils/generate-markdown.js");
const generatePage = require("./src/page-template.js");

// TODO: Create an array of questions for user input
const questions = [];
const userQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (projectTitleInput) => {
        if (projectTitleInput) {
          return true;
        } else {
          console.log("Please enter a title for your project!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project:",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to provide a description of your project!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "installation",
      message: "Please provide a description of how to install your project:",
    },

    {
      type: "input",
      name: "usage",
      message: "Please provide direction on how to use:",
    },

    {
      type: "input",
      name: "contributors",
      message: "Please list the contributers on this project:",
    },

    {
      type: "input",
      name: "tests",
      message: "Please write any tests for your project, if any:",
    },

    {
      type: "checkbox",
      name: "license",
      message: "Please select a license from the list:",
      choices: [
        "Apache 2.0 License",
        "Eclipse Public License 1.0",
        "IBM Public License Version 1.0",
        "MIT License",
        "The Unlicense",
      ],
    },

    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },

    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);
};
userQuestions()
  .then(generatePage)
  .then((pageReadMe) => {
    return writeFile(pageReadMe);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
