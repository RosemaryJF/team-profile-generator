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
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber)
            employeesArr.push(manager);
            return addToTeamPrompt();
        });
};

const engineerQuestionsFunc = () => {
    inquirer.prompt(engineerQuestions)
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerid,
                answers.engineerEmail,
                answers.engineerGithub)
            employeesArr.push(engineer);
            return addToTeamPrompt();
        });
};

const internQuestionsFunc = () => {
    inquirer.prompt(internQuestions)
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool)
            employeesArr.push(intern);
            return addToTeamPrompt();
        });
};

const addToTeamPrompt = () => {
    inquirer.prompt(employeePrompt)
        .then(answer => {
            if (answer.employeeType === "Engineer") {
                console.log("You added an Engineer!")
                engineerQuestionsFunc();
            } else if (answer.employeeType === "Intern") {
                console.log("You added an intern!")
                internQuestionsFunc();
            } else {
                console.log(employeesArr);
                generateHTML();
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

const generateHTML = (employeesArr) => {
    let htmlFile = htmlTemplate(employeesArr)
    fs.writeFile("./dist/index.html", htmlFile, "UTF-8", (err) =>
        err ? console.error(err) : console.log("Congrats! Your team HTML page has been created!")
    )
};

init()
module.exports = employeesArr