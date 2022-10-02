// const { managerQuestions } = require("../lib/manager");
const generateRoster = employees => {
    const generateManagerCard = (manager) => {
        return `
    <div class="tile is-child is-4 has-text-centered employeeCard">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
        <p>${manager.getID()}</p>
        <p>${manager.getEmail()}</p>
        <p>${manager.getOfficeNumber()}</p>
    </div>
    `
    }

    const generateEngineerCard = engineer => {
        return `
        <div class="tile is-child is-4 has-text-centered">
            Some text
        </div>
        `
    }

    // const generateInternCard = intern => {
    //     return `
    //     <div class="tile is-child is-4 has-text-centered">
    //         Some text
    //     </div>
    //     `
    // }

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

    return html.join("");
};

const generateBaseHTML = file => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" src="../dist/stylesheet.css">
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
        ${generateRoster(file)}
        </div>
    </div>
</body>
</html>
    `
};

module.exports = generateBaseHTML