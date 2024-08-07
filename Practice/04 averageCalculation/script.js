/*
    Request the student's name and the 3 grades
    for the term and calculate the average for that student.

    The passing average should be greater than 6.

    If the student passes the term, congratulate them.

    If the student does not pass the term,
    motivate the student to do their best on the recovery exam.

    In both cases, show a message with the student's name and the grade.
*/

// Questions
let student = prompt('What is your name?');
let note1 = prompt('What is the grade for the first exam?');
let note2 = prompt('What is the grade for the second exam?');
let note3 = prompt('What is the grade for the third exam?');

// Average (note1 + note2 + note3) / number of grades
let average = (Number(note1) + Number(note2) + Number(note3)) / 3;

// Result
let result = average > 6;

// Failed
let noChances = average < 3;

// ToFixed
average = average.toFixed(1);

// if/else
if (result) {
    alert('Congratulations, ' + student + '! You did it! Your average grade is ' + average);
} else if (noChances) {
    alert('It’s over for you, dear student ' + student + '. You lost your chance... Your average grade is ' + average);
} else {
    alert('Oh, what a pity ' + student + ' :(. Your average of ' + average + ' did not meet the minimum requirement to pass. But keep studying, and I know you will succeed! I believe in you :)');
}
