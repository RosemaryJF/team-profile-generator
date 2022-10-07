// const Employee = require('../lib/employee');
const Manager = require("../lib/Manager");

describe('Manager class', () => {
    it('Creates a new manager', () => {
        const manager = new Manager('Rosie Forster', 5151, 'rosemaryjforster@gmail.com', 'A1');

        expect(manager.name).toEqual('Rosie Forster');
        expect(manager.id).toEqual(5151);
        expect(manager.email).toEqual('rosemaryjforster@gmail.com');
        expect(manager.officeNumber).toEqual(expect.any(String));
    });

    it('Checks all methods on the Manager Class', () => {
        const manager = new Manager('Rosie Forster', 5151, 'rosemaryjforster@gmail.com', 'USYD');

        expect(manager.getName()).toEqual(manager.name);
        expect(manager.getID()).toEqual(manager.id);
        expect(manager.getEmail()).toEqual(manager.email);
        expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
        expect(manager.getRole()).toEqual('Manager');
    });
});