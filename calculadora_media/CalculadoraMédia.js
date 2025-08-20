const readline = require("readline");
const notas = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Criação da função para solicitação de múltiplas perguntas.
function pergunta(questao) {
    return new Promise ((resolve) => {
        notas.question((questao), (resposta) => {
            resolve(resposta);
        });
    });
};

//Solicitação de input das duas notas ao usuário.
async function inputNotas() {
    const nota1 = await pergunta('Digite sua primeira nota: ');
    const nota2 = await pergunta('Digite sua segunda nota: ');

    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    if (n1 > 10 || n2 > 10 || n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)) {
        console.log();
        console.log('=== Notas digitadas de maneira inválida! O sistema não aceitará textos e as notas precisam ser números entre 0 e 10! ===');
        console.log('=== Digite suas notas novamente: ===');
        console.log();
        return inputNotas();
    } else {
        calcMedia(n1, n2);
    }
}

function calcMedia(n1, n2) {
    
    //Execução do cálculo de média.
    let media = (n1 + n2) / 2;
    console.log();
    console.log(`== Nota média = ${media} ==`);

    if (media >= 7) {
         console.log('== Situação: Aprovado(a). ==');
         console.log();
     } else {
        console.log('== Situação: Reprovado(a). ==');
        console.log();
    }
    notas.close();
}

 inputNotas();