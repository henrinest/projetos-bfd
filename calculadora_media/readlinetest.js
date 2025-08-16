const readline = require('readline')
const info = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

info.question ('Qual o seu nome? ', (nome) => {
    info.question ('Qual é sua idade? ', (idade) => {

        console.log(`Seja bem vindo, ${nome}!`);
        console.log(`Idade: ${idade}`);
        info.close();
    });
});