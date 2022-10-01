const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return 'Manager';
    };
};

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: "managerName",
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: "managerId",
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: "managerEmail",
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: "managerOfficeNumber",
    },
]

module.exports = {Manager, managerQuestions}