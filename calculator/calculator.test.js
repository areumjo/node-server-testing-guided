const calculator = require('./calculator.js');

// test runner => the library that runs the tests
// assertion library => the library that handles the tests cases (handles the details)

// New test - test starts with `it` or `test`
    // if you put x == xit, it will skip the test
xit('runs the test', () => {
    // assertions
    expect(true).toBe(true);
});

const { add } = calculator;

// test suite (collection of related tests)
describe('the calculator', () => {
    
    describe('the add method', () => {
        it('should add two numbers', () => {
            expect(add(2,2)).toBe(4);
            expect(add(2,1)).toBe(3);
            expect(add(-2,4)).toBe(2);
        })
    });

    // add function should return 0 on no arguments
    it('should return 0 on no arguments', () => {
        expect(add()).toBe(0); 
    })

});

// what should the `add`function do?
// A: take two values and combine them
// return one value
// add(2,2) => 4

// what should happen on no argumnets? one argument? or many arguments?
// what if they pass in strings?
