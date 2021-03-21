// JS is a Dynamic language which means value changes in runtime

console.log('Hello World'); //Prints hello world in console
let name = 'kali'; //let and var are similar
console.log(name); //prints variable name

//after es6 we can use let in place of var

let firstName = 'kali', lastName = 'linux'; //Declare two variables in one line using ","

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const intRate = 0.3;
// intRate = 1; //<-- this will lead to an error message because const value can't change
console.log(intRate);

////////////////////########   1. Primitive Data Types   ########\\\\\\\\\\\\\\\\\\\\

// let name = 'kali'; // String Literal
let age = 20; // Number Literal
let isApproved = false; // Boolean Literal
// let firstName = undefined;
let selectedColor = null;

console.log(typeof name);

////////////////////########   2. Reference Data Types   ########\\\\\\\\\\\\\\\\\\\\\\
// Object

 // let oName ='kali'; 
 // let oAge = 20;

let person = {
    oName: 'kali', // So both oName and oAge are defined in single object
    oAge: 20
};

console.log(person);

// changing "oName" value
    // Dot Notation
        person.oName = "shiv";
        
        console.log(person.oName);
    
    // Bracket Notation
        person['oName'] = 'luv';

        console.log(person['oName']);

        // Benefit of Bracket Notation
            let selection = 'oName';
            person[selection] = 'mata'; // If variable name is updated/changes in runtime [] is helpful

            console.log(person.oName);

// Array

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length)

// Functions
// Types
// Performing a task
function greet(gname, glastName) { //We can pass any name to "gname" Parameter
    console.log('Hello ' + gname + ' ' + glastName);
}

greet('John', 'Smith'); //John is arguement
greet('Mary');

// Calculating a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);
//    or
console.log(square(3));