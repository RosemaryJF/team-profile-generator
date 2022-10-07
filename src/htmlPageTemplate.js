const generateEmployeeCards = employees => {
    const generateManagerCard = (Manager) => {
        return `
    <div class="tile is-child is-4 has-text-centered employeeCard">
        <h2>${Manager.getName()}</h2>
        <h3>${Manager.getRole()}</h3>
        <p>${Manager.getID()}</p>
        <p>${Manager.getEmail()}</p>
        <p>${Manager.getOfficeNumber()}</p>
    </div>
    `
    }

    const generateEngineerCard = engineer => {
        return `
        <div class="tile is-child is-4 has-text-centered">
            ${engineer.getName()}
        </div>
        `
    }

    const generateInternCard = intern => {
        return `
        <div class="tile is-child is-4 has-text-centered">
            ${intern.getName()}
        </div>
        `
    }

    const employeeCards = employeesArr => {
        // let baseHTML = ''
        for (let i = 0; i = employeesArr; i++) {
            if (employeesArr[i].getRole() === 'Manager') {
                baseHTML = baseHTML + generateManagerCard(employeesArr[i])
            }
            if (employeesArr[i].getRole() === 'Engineer') {
                baseHTML = baseHTML + generateEngineerCard(employeesArr[i])
            }
            if (employeesArr[i].getRole() === 'Intern') {
                baseHTML = baseHTML + generateInternCard(employeesArr[i])
            }
        } return employeeCards
    } 

    //     const html = [];

    //     html.push(Employees
    //         .filter(Employee => (Employee.getRole() === 'Manager'))
    //         .map(manager => generateManagerCard(manager))
    //     );

    //     html.push(Employees
    //         .filter(employee => employee.getRole() === 'Engineer')
    //         .map(engineer => generateEngineerCard(engineer))
    //         .join("")
    //     );

    //     return html.join("");
    // };
}



const generateBaseHTML = employees => {
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
        ${generateEmployeeCards(employees)}
        </div>
    </div>
</body>
</html>
    `
};

module.exports = generateBaseHTML