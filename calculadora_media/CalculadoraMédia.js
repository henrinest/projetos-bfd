const readline = require("readline");
const rl = readline.createInterface({
  imput: process.stdin,
  output: process.stdout,
});

function pergunta(questão) {
  return new Promise((resolve) => {
    rl.question(questão, (resposta) => {
      resolve(resposta);
    });
  });
}

async function perguntarNome() {
  const primeiroNome = await pergunta("Qual é o seu nome? ");
  return primeiroNome;
}

console.log(`Seu nome é ${primeiroNome}`);

rl.close();