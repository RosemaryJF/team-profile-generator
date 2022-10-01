const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGitHub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    };
};

const engineerQuestions = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: "engineerName",
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: "engineerid",
    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: "engineerEmail",
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?",
        name: "engineerGithub",
    },
];

module.exports = {Engineer, engineerQuestions}