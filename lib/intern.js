const Employee = require("./employee")

class Intern extends Employee {
    constructor (name, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

const internQuestions= [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: "internName",
        },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: "internId",
        },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: "internEmail",
        },
    {
        type: 'input',
        message: "What is your intern's school?",
        name: "internSchool",
        },
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        name: "teamMember",
        }
]

module.exports = Intern