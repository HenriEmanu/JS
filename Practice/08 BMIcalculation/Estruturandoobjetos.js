/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

// Crie uma lista de pacientes
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

// Cria uma lista para armazenar as informações dos pacientes
let patientDetails = []

// Percorre cada paciente na lista
for (let patient of patients) {
    // Cria uma string com os detalhes do paciente
    let details = `Name: ${patient.name}, Age: ${patient.age}, Weight: ${patient.weight}, Height: ${patient.height}`
    // Adiciona a string à lista de detalhes dos pacientes
    patientDetails.push(details)
}

// Mostra a lista completa dos detalhes dos pacientes
alert(patientDetails.join('\n'))