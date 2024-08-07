// Function to validate if the input is a valid number
function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

// Main function to capture and process the numbers
function processNumbers() {
    let firstNumber = prompt('Enter the first number');
    let secondNumber = prompt('Enter the second number');
    
    // Validate the inputs
    if (!isValidNumber(firstNumber) || !isValidNumber(secondNumber)) {
        alert('Please enter valid numbers.');
        return; // Exit the function if any input is invalid
    }

    // Convert inputs to numbers
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    // Perform operations
    const sum = firstNumber + secondNumber;
    const sub = firstNumber - secondNumber;
    const multi = firstNumber * secondNumber;
    const div = secondNumber !== 0 ? firstNumber / secondNumber : 'Undefined'; // Check for division by zero
    const restDiv = secondNumber !== 0 ? firstNumber % secondNumber : 'Undefined'; // Check for division by zero

    // Challenges
    const isSumEven = sum % 2 === 0;
    const areNumbersEqual = firstNumber === secondNumber;

    // Display results
    alert('Sum: ' + sum);
    alert('Subtraction: ' + sub);
    alert('Multiplication: ' + multi);
    alert('Division: ' + div);
    alert('Remainder of division: ' + restDiv);

    // Challenges
    alert(`Is the sum even? ${isSumEven ? 'Yes' : 'No'}`);
    alert(`Are the numbers equal? ${areNumbersEqual ? 'Yes' : 'No'}`);
}

// Call the main function
processNumbers();

