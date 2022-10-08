// Variable containing all console questions to run to retrieve engineer information
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

module.exports = engineerQuestions