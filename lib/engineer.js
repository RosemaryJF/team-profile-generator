const Employee = require("./Employee")

// Constructor extending the Employee constructor
// adding one function and overwriting the getRole function
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

module.exports = Engineer