const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const { Employee, employeePrompt } = require("./lib/Employee");
const { Engineer, engineerQuestions } = require("./lib/Engineer");
const { Intern, internQuestions } = require("./lib/Intern");
const { Manager, managerQuestions } = require("./lib/Manager");

const employeesArr = [];

const init = () => { managerQuestionFunc() }

const managerQuestionFunc = () => {
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            employeesArr.push(answers);
            return addToTeamPrompt();
        })
}

const addToTeamPrompt = () => {
    inquirer.prompt(employeePrompt)
        .then(answer => {
            if (answer.teamMemberType === "Engineer") {
                    console.log("You've chosen to add an Engineer to your team!");
            } else if (answer.teamMemberType === "Intern") {
                    console.log("You've chosen to add an Intern to your team!");
            } else {
                    console.log("You've finished building your team!");
            };
        });
};

init()
