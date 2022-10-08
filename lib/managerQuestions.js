// Variable containing all console questions to run to retrieve manager information
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
];

module.exports = managerQuestions