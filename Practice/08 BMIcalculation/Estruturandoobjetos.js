/* 
  Create a list of patients

  Each patient in the list should contain
    name
    age
    weight
    height

  Write a list containing the names of the patients
*/

// Create a list of patients
const patients = [
    {
        name: 'Cami',
        age: 39,
        weight: 46.5,
        height: 157,
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

// Create a list to store patient details
let patientDetails = []

// Loop through each patient in the list
for (let patient of patients) {
    // Create a string with the patient's details
    let details = `Name: ${patient.name}, Age: ${patient.age}, Weight: ${patient.weight}, Height: ${patient.height}`
    // Add the string to the patient details list
    patientDetails.push(details)
}

// Show the complete list of patient details
alert(patientDetails.join('\n'))
