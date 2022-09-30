const Employee = require("./employee")

class Engineer extends Employee {
    constructor (name, github) {
        super(name, id, email)
        this.github = github
    }

    getGitHub(){

    }

    getRole() {

    }
}

const engineerQuestions= [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: "engineerName",
        },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: "engineerId",
        },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: "engineerEmail",
        },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?",
        name: "engineerGitHub",
        },
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        name: "teamMember",
        }
]

module.exports = Engineer