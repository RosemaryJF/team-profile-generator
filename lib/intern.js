const Employee = require("./Employee");

// Constructor extending the Employee constructor
// adding one function and overwriting the getRole function
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

module.exports = Intern


// module.exports = {Intern, internQuestions}