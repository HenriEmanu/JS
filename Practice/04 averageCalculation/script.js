/*
    Solicitar o nome do aluno e as 3 notas
    do bimestre e calcular a média daquele aluno.

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os parabéns.

    Se o aluno não passou no bimestre,
    motivar o aluno a dar o seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
    */

    // Questions
    let student = prompt('Qual o seu nome aluno(a)?');
    let note1 = prompt('Qual a nota da primeira prova?');
    let note2 = prompt('Qual a nota da segunda prova?');
    let note3 = prompt('Qual a nota da terceira prova?');

    // Average (note1 + note2 + note3) / every notes
    let average = (Number(note1) + Number(note2) + Number(note3)) / 3;

    // Result
    let result = average > 6;

    // Reprovado
    let noChances = average < 3

    // ToFixed
    average = average.toFixed(1)
    // if/else
    if (result) {
        alert('Parabéns, ' + student + '! You did it! Sua média foi de ' + average);
    } else if (noChances) {
        alert('Já era pra tu meu caro aluno ' + student + '. Perdeu sua chance... Sua média foi de ' + average)
    }
     else {
        alert('Oh que pena ' + student + ' :(. Sua média de ' + average + ' não alcançou o minímo para passar. Mas continue estudando e sei que conseguirá! I belive in you :)');
    }