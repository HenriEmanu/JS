let number = prompt('Enter a number');
let numberTwo = prompt('Enter another number');

number = Number(number);
numberTwo = Number(numberTwo);

let result = (number + numberTwo) / 2;

if (result % 2 === 0) {
    alert('Even.');
} if (result % 2 !== 0) {
    alert('Odd.');
}
