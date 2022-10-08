// const Employee = require("../lib/Employee")

const generateEmployeeCards = employees => {

    const generateManagerCard = (managerAnswers) => {
        return `
            <div class="tile is-child is-4 has-text-centered employeeCard">
                <h2>${managerAnswers.getName()}</h2>
                <h3><i class="fas fa-tasks" style="color: #ffffff;"></i>${managerAnswers.getRole()}</h3>
                <p>ID: ${managerAnswers.getID()}</p>
                <p>Email: <a href="mailto:${managerAnswers.getEmail()}">${managerAnswers.getEmail()}</a></p>
                <p>Office Number: ${managerAnswers.getOfficeNumber()}</p>
            </div>
    `
    }

    const generateEngineerCard = engineerAnswers => {
        return `
            <div class="tile is-child is-4 has-text-centered">
                <h2>${engineerAnswers.getName()}</h2>
                <h3><i class="fas fa-user-cog" style="color: #ffffff;"></i>${engineerAnswers.getRole()}</h3>
                <p>ID: ${engineerAnswers.getID()}</p>
                <p>Email: <a href="mailto:${engineerAnswers.getEmail()}">${engineerAnswers.getEmail()}</a></p>
                <p>GitHub: <a href="https://www.github.com/${engineerAnswers.getGitHub()}" target="_blank">${engineerAnswers.getGitHub()}</a></p>
            </div>
    `
    }

    const generateInternCard = internAnswers => {
        return `
            <div class="tile is-child is-4 has-text-centered">
                <h2>${internAnswers.getName()}</h2>
                <h3><i class="fas fa-user-graduate" style="color: #ffffff;"></i>${internAnswers.getRole()}</h3>
                <p>ID: ${internAnswers.getID()}</p>
                <p>Email: <a href="mailto:${internAnswers.getEmail()}">${internAnswers.getEmail()}</a></p>
                <p>School: ${internAnswers.getSchool()}</p>
            </div>
    `
    }

    const cardHtml = [];

    cardHtml.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManagerCard(manager))
    );

    cardHtml.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineerCard(engineer))
        .join("")
    );

    cardHtml.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateInternCard(intern))
        .join("")
    );

    return cardHtml.join("")
}

const generateBaseHTML = employees => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
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