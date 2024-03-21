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

//Program 4: Largest Number Finder
