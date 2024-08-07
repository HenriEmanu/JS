/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

// Jogo da adivinhação

// Apresenta a mensagem ao usuário para começar o jogo
let result = prompt('Adivinhe o número que estou pensando? Está entre 0 e 10.');

// Gera um número aleatório entre 0 e 100
const randomNumber = Math.round(Math.random() * 10);

// Inicia o contador de tentativas
let xAttempts = 1;

// Continua pedindo para o usuário até ele acertar o número
while (Number(result) != randomNumber) {
    result = prompt('Erro, tente novamente');
    xAttempts++;
}

// Mensagem de sucesso com pluralização de 'tentativa' ou 'tentativas'
alert(`Você acertou, parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativa${xAttempts > 1 ? 's' : ''}.`);