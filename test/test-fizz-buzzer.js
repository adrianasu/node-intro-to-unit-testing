// import fizzBuzzer module
const fizzBuzzer = require('../fizzBuzzer');
// import chai and declare expect var
const expect = require('chai').expect;

//unit tests for fizzBuzzer
describe('fizzBuzzer', function() {

    //test normal case
    it('should return fizz, buzz, fizz-buzz', function() {
        const normalCases = [
            {a: 6, expected: "fizz"},
            {a: 10, expected: "buzz"},
            {a: 30, expected: "fizz-buzz"}
        ];
        normalCases.forEach((input) => {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    //test for bad inputs
    it('should raise error if arg is not a number', function() {
        const badInputs = ['a','10', true];
        badInputs.forEach((input)=> {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});