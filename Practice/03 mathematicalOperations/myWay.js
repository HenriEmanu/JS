/*
    Capture 2 numbers
    and perform mathematical operations
    addition, subtraction, multiplication,
    division, and remainder of division.

    And for each operation, show an alert with the result.
*/

alert('We will perform some mathematical operations. Please enter a number in the following boxes!');

// Function to validate if the input is a valid number
function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

// Function to format numbers with two decimal places
function formatNumber(value) {
    return value.toFixed(2);
}

// Function to handle addition
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Function to handle subtraction
function subtractNumbers(num1, num2) {
    return num1 - num2;
}

// Function to handle multiplication
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// Function to handle division with zero check
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return 'Undefined (division by zero)';
    }
    return num1 / num2;
}

// First Operation
let firstNumber = prompt('Enter the first number to be added with the next one:');
let secondNumber = prompt('Enter the second number:');

if (!isValidNumber(firstNumber) || !isValidNumber(secondNumber)) {
    alert('Please enter valid numbers.');
} else {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let firstResult = addNumbers(firstNumber, secondNumber);
    alert('The result of the addition is: ' + formatNumber(firstResult));
}

// Second Operation
let thirdNumber = prompt('Enter the third number to be subtracted from the previous result:');

if (!isValidNumber(thirdNumber)) {
    alert('Please enter a valid number.');
} else {
    thirdNumber = Number(thirdNumber);

    let secondResult = subtractNumbers(firstResult, thirdNumber);
    alert('The result of the subtraction is: ' + formatNumber(secondResult));
}

// Third Operation
let fourthNumber = prompt('Enter the fourth number to be multiplied by the previous result:');

if (!isValidNumber(fourthNumber)) {
    alert('Please enter a valid number.');
} else {
    fourthNumber = Number(fourthNumber);

    let thirdResult = multiplyNumbers(secondResult, fourthNumber);
    alert('The result of the multiplication is: ' + formatNumber(thirdResult));
}

// Fourth Operation
let fifthNumber = prompt('Enter the fifth and final number to divide the previous result and get the final result:');

if (!isValidNumber(fifthNumber)) {
    alert('Please enter a valid number.');
} else {
    fifthNumber = Number(fifthNumber);

    let finalResult = divideNumbers(thirdResult, fifthNumber);
    alert('The final result is: ' + (typeof finalResult === 'string' ? finalResult : formatNumber(finalResult)));
}

/* 
alert('We will perform some mathematical operations. Please enter a number in the following boxes!');

// Function

// First Operation
let firstNumber = prompt('Enter the first number to be added with the next one:');
let secondNumber = prompt('Enter the second number:');

let firstResult = Number(firstNumber) + Number(secondNumber);
alert('The result of the addition is: ' + firstResult);

// Second Operation
let thirdNumber = prompt('Enter the third number to be subtracted from the previous result:');

let secondResult = Number(firstResult) - Number(thirdNumber);
alert('The result of the subtraction is: ' + secondResult);

// Third Operation
let fourthNumber = prompt('Enter the fourth number to be multiplied by the previous result:');

let thirdResult = Number(secondResult) * Number(fourthNumber);
alert('The result of the multiplication is: ' + thirdResult);

// Fourth Operation
let fifthNumber = prompt('Enter the fifth and final number to divide the previous result and get the final result:');

let finalResult = Number(thirdResult) / Number(fifthNumber);
alert('The final result is: ' + finalResult); 
*/
