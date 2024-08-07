/* 
  Given a list of patients, calculate the BMI of each patient and print

  "Patient X has a BMI of: Y"

  Where X is the patient's name and Y is the BMI of that patient

  Create a function to calculate BMI
*/

/*  Calculating BMI
    weight / (height * height)
*/
// Create a list of patients
const patients = [
    {
        name: 'Cami',
        age: 23,
        weight: 65,
        height: 162,
    },
    {
        name: 'Rik',
        age: 90,
        weight: 90,
        height: 230,
    },
    {
        name: 'Joselito',
        age: 100,
        weight: 200,
        height: 120,
    },
]

function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(3);
}

function generateMessage(patient) {
    return `
    Patient ${patient.name} has a BMI of ${calculateBMI(patient.weight, patient.height)}
    `;
}

for (let patient of patients) {
    let bmiText = generateMessage(patient);
    alert(bmiText);
}
