const Employee = require('../lib/Employee.js')

describe('Employee class', () => {
    it('Creates a new employee', () => {
        const employee = new Employee('Rosie Forster', 5151, 'rosemaryjforster@gmail.com');

        expect(employee.name).toEqual('Rosie Forster');
        expect(employee.id).toEqual(5151);
        expect(employee.email).toEqual('rosemaryjforster@gmail.com');
    });

    it('Checks all methods on the Employee Class', () => {
        const employee = new Employee('Rosie Forster', 5151, 'rosemaryjforster@gmail.com');

        expect(employee.getName()).toEqual(employee.name);
        expect(employee.getID()).toEqual(employee.id);
        expect(employee.getEmail()).toEqual(employee.email);
        expect(employee.getRole()).toEqual('Employee');
    });

    // it('Should throw an error if not provided an email in the correct format')
    //     const err = new Error(
    //         'Information input in an invalid format'
    //     );
    //     const cb = () => {
    //         const employee = new Employee();
    //         employee.getEmail();
    //     }
    //     expect(cb).toThrowError(err);
})