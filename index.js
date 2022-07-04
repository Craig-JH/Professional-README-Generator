// TODO: Include packages needed for this application
const { writeFile, copyFile } = require('./Develop/utils/generateMarkdown.js');
const inquirer = require("inquirer");
// const generatePage = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of the project (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
  ]);
};

const promptSections = (readmeData) => {
  console.log(`
    =============
    Add Sections
    =============
    `);

  if (!readmeData.projects) {
    readmeData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "description",
        message:
          "Please provide a description of what the app is for (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You need to enter a description of the app!");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "TOC",
        message:
          "What would you like to add to Table of Contents? (Check all that apply)",
        choices: [
          "Installation",
          "Usage",
          "License",
          "Contributing",
          "Tests",
          "Questions",
          "Other",
        ],
      },
    ])
    .then((projectData) => {
      readmeData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptSections(readmeData);
      } else {
        return readmeData;
      }
    });
};

promptQuestions()
  .then(promptSections)
  .then(readmeData => {
    return generatePage(readmeData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
