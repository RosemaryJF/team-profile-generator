const inquirer = require("inquirer");
const fs = require("fs");
const htmlTemplate = require("./src/htmlPageTemplate")

// Variables requiring all library js files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Variables containing console questions
const managerQuestions = require("./lib/managerQuestions");
const engineerQuestions = require("./lib/engineerQuestions");
const internQuestions = require("./lib/internQuestions");

// Empty array which employees are pushed to as they are created
const employeesArr = [];

// Function to initiate console application
const init = () => { managerQuestionsFunc() }

// Function to run manager questions
// and push answers to the employees array
const managerQuestionsFunc = () => {
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            answers = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber)
            employeesArr.push(answers);
            console.log("The manager has been added!")
            return addToTeamPrompt();
        });
};

// Function to run engineer questions
// and push answers to the employees array
const engineerQuestionsFunc = () => {
    inquirer.prompt(engineerQuestions)
        .then((answers) => {
            answers = new Engineer(
                answers.engineerName,
                answers.engineerid,
                answers.engineerEmail,
                answers.engineerGithub)
            employeesArr.push(answers);
            console.log("You added an Engineer!")
            return addToTeamPrompt();
        });
};

// Function to run intern questions
// and push answers to the employees array
const internQuestionsFunc = () => {
    inquirer.prompt(internQuestions)
        .then((answers) => {
            answers = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool)
            employeesArr.push(answers);
            console.log("You added an intern!")
            return addToTeamPrompt();
        });
};

// Inquirer prompt to run below employee prompt
// user choice will decide what function is run
const addToTeamPrompt = () => {
    inquirer.prompt(employeePrompt)
        .then(answer => {
            if (answer.employeeType === "Engineer") {
                engineerQuestionsFunc();
            } else if (answer.employeeType === "Intern") {
                internQuestionsFunc();
            } else {
                generateHTML(employeesArr);
            };
        });
};

// Varialble containing the employee prompt
// from which the user selects if they want to add another team member of not
const employeePrompt = [
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: "employeeType",
        choices: [
            { name: 'Engineer' },
            { name: 'Intern' },
            { name: "I don't want to add any more team members" }
        ],
    },
];

// Variable function to write the index.html 
// And throw error if unable to
const generateHTML = (employees) => {
    let htmlFile = htmlTemplate(employees)
    fs.writeFile("./dist/index.html", htmlFile, "UTF-8", (err) =>
        err ? console.error(err) : console.log("Congrats! Your team HTML page has been created!")
    )
};

init()