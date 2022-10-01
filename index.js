const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const htmlTemplate = require("./src/html-page-template")

const {managerQuestions, Manager} = require("./lib/Manager");
const {engineerQuestions, Engineer} = require("./lib/Engineer");
const {internQuestions, Intern} = require("./lib/Intern");

const employeesArr = [];

const init = () => { managerQuestionsFunc() }

const managerQuestionsFunc = () => {
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            answers = new Manager(
                answers.managerName,
                answers.managerName,
                answers.managerName,
                answers.managerName)
            employeesArr.push(answers);
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
                // generateHTML();
            };
        });
};

const employeePrompt = [
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: "employeeType",
        choices: [
            {name: 'Engineer'},
            {name: 'Intern'}, 
            {name: "I don't want to add any more team members"}
        ],
    },
];

// const generateHTML = () => {
//     let htmlFile = htmlTemplate(employeesArr)
//                 fs.writeFile("index.html", htmlFile, (err) =>
//                     err ? console.error(err) : console.log("Congrats! Your team")
//                 )
//                 .catch((err) => {
//                 console.error(err)
//             });
// };

init()