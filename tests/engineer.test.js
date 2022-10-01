const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer class', () => {
    it('Creates a new engineer', () => {
        const engineer = new Engineer('Rosie Forster', 5151, 'rosemaryjforster@gmail.com', 'RosemaryJF');

        expect(engineer.name).toEqual('Rosie Forster');
        expect(engineer.id).toEqual(5151);
        expect(engineer.email).toEqual('rosemaryjforster@gmail.com');
        expect(engineer.github).toBe(expect.any(String));
    });

    it('Checks all methods on the Employee Class', () => {
        const engineer = new Employee('Rosie Forster', 5151, 'rosemaryjforster@gmail.com', 'RosemaryJF');

        expect(engineer.getName()).toEqual(engineer.name);
        expect(engineer.getID()).toEqual(engineer.id);
        expect(engineer.getEmail()).toEqual(engineer.email);
        expect(engineer.getGitHub()).toEqual(engineer.github);
        expect(engineer.getRole()).toEqual('Engineer');
    });
});