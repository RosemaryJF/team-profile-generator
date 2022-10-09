// Test to ensure all intern functions run and return information
const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('Creates a new intern', () => {
        const intern = new Intern('Rosie Forster', 5151, 'rosemaryjforster@gmail.com', 'USYD');

        expect(intern.name).toEqual('Rosie Forster');
        expect(intern.id).toEqual(5151);
        expect(intern.email).toEqual('rosemaryjforster@gmail.com');
        expect(intern.school).toEqual(expect.any(String));
    });

    it('Checks all methods on the intern Class', () => {
        const intern = new Intern('Rosie Forster', 5151, 'rosemaryjforster@gmail.com', 'USYD');

        expect(intern.getName()).toEqual(intern.name);
        expect(intern.getID()).toEqual(intern.id);
        expect(intern.getEmail()).toEqual(intern.email);
        expect(intern.getSchool()).toEqual(intern.school);
        expect(intern.getRole()).toEqual('Intern');
    });
})