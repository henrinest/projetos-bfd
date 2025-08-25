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

//Função para solicitação das 2 notas.
async function inputNotas() {
    let n1;
    let n2;

    // Solicitação da primeira nota.
    let notaValida = false;
    while (!notaValida) {
        const nota1 = await pergunta('Digite sua primeira nota: ');
        n1 = parseFloat(nota1);

        if (n1 <= 10 && n1 >= 0 && !isNaN(n1)){
            notaValida = true;
    } else {
        console.log ('Nota digitada de maneira inválida! O programa não aceitará textos, os valores precisam ser números entre 0 e 10.');
        console.log ('----------------------------------------------------------------------------------------------------------------');
        }
    }

    // Solicitação da segunda nota.
    notaValida = false;
    while (!notaValida) {
        const nota2 = await pergunta('Digite sua segunda nota: ');
        n2 = parseFloat(nota2);

        if (n2 <= 10 && n2 >= 0 && !isNaN(n2)){
            notaValida = true;
    } else {
        console.log ('Nota digitada de maneira inválida! O programa não aceitará textos, os valores precisam ser números entre 0 e 10.');
        console.log ('----------------------------------------------------------------------------------------------------------------');
        }
    }
    calcMedia(n1, n2);
}

// Função para realização do cálculo de média e exibição dos resultados.
function calcMedia(n1, n2) {
    
    //Execução do cálculo de média.
    const media = (n1 + n2) / 2;
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