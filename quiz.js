const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
let deg = prompt('What is the temperature in Farenheit?');
console.log('The temperature is ' + (deg - 32)*5/9 + ' in celsius');
//Program 2: Grade Calculator
let grade = prompt('What percentage did you get on the test?');
if (grade > 89){
    console.log('Wow! You got an A!');
}
else if (grade > 79){
    console.log('Good job, you got a B.');
}
else if (grade > 69){
    console.log('At least you passed, you got a C.');
}
else if (grade > 59){
    console.log('Careful, you almost failed! You got a D.');
}
else{
    console.log('Bruh, you failed.');
}
//Program 3: Leap Year Checker
let year = prompt('Insert the year, Using my amazing intellect, I shall figure if its a leap year:');

let isLeapYear = false;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    console.log(year + ' is a leap year.');
} else {
    console.log(year + ' is not a leap year');
}

//Program 4: Largest Number Finder
let num1 = prompt('Insert The first number:');
let num2 = prompt('Insert The second number:');
let num3 = prompt('Insert The third number:');

let largest = num1;

if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}

console.log('The highest number is ' + largest);
