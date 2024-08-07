/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/*  Calculando o IMC
    peso / (altura * altura)
*/
// Crie uma lista de pacientes
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

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(3);
}

function message(patient) {
    return `
    O(A) paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}
    `;
}

for (let patient of patients) {
    let IMCtext = message(patient)
    alert(IMCtext)
}
