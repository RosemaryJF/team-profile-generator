const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};

const internQuestions = [
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
];

module.exports = {Intern, internQuestions}