const inquirer = require("inquirer");
// const jest = require("jest");
const fs = require("fs");
const htmlTemplate = require("./src/htmlPageTemplate")

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerQuestions = require("./lib/managerQuestions");
const engineerQuestions = require("./lib/engineerQuestions");
const internQuestions = require("./lib/internQuestions");

const employeesArr = [];

const init = () => { managerQuestionsFunc() }

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

const addToTeamPrompt = () => {
    inquirer.prompt(employeePrompt)
        .then(answer => {
            if (answer.employeeType === "Engineer") {
                engineerQuestionsFunc();
            } else if (answer.employeeType === "Intern") {
                internQuestionsFunc();
            } else {
                console.log(employeesArr);
                generateHTML(employeesArr);
            };
        });
};

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

const generateHTML = (employees) => {
    let htmlFile = htmlTemplate(employees)
    fs.writeFile("./dist/index.html", htmlFile, "UTF-8", (err) =>
        err ? console.error(err) : console.log("Congrats! Your team HTML page has been created!")
    )
};

init()

module.exports = employeesArr