// const Employee = require("../lib/Employee")

const generateEmployeeCards = employees => {

    const generateManagerCard = (managerAnswers) => {
        return `
    <div class="tile is-child is-4 has-text-centered employeeCard">
        <h2>${managerAnswers.getName()}</h2>
        <h3>${managerAnswers.getRole()}</h3>
        <p>${managerAnswers.getID()}</p>
        <p>${managerAnswers.getEmail()}</p>
        <p>${managerAnswers.getOfficeNumber()}</p>
    </div>
    `
    }

    const generateEngineerCard = engineerAnswers => {
        return `
        <div class="tile is-child is-4 has-text-centered">
           <h2>${engineerAnswers.getName()}</h2>
        </div>
        `
    }

    const generateInternCard = internAnswers => {
        return `
        <div class="tile is-child is-4 has-text-centered">
        <h2>${internAnswers.getName()}</h2>
        </div>
        `
    }

    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManagerCard(manager))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineerCard(engineer))
        .join("")
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateInternCard(intern))
        .join("")
    );

    return html.join("")
}

const generateBaseHTML = employees => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="./stylesheet.css">
    <title>My Team Roster</title>
</head>
<body>
    <header class="hero">
        <div class="hero-body has-text-centered">
            <h1 class="title" style="color: #F8F5F1;">
            My Team
            </h1>
        </div>
    </header>

    <div class="tile is-ancestor">
        <div class="tile is-parent is-12">
        ${generateEmployeeCards(employees)}
        </div>
    </div>
</body>
</html>
    `
};

 module.exports = generateBaseHTML