const readline = require('readline');
const notas = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Início do input de solicitação das 4 notas dos trimestres do último ano.
notas.question('Digite a nota do primeiro trimestre: ', (nota1) => {
    notas.question('Digite a nota do segundo trimestre: ', (nota2) => {
        notas.question('Digite a nota do terceiro trimestre: ', (nota3) => {
            notas.question('Digite a nota do quarto trimestre: ', (nota4) => {

                    //Conversão das notas fornecidas para números.
                    const n1 = parseFloat(nota1);
                    const n2 = parseFloat(nota2);
                    const n3 = parseFloat(nota3);
                    const n4 = parseFloat(nota4);

                //Cálculo de média da nota.
                const media = (n1 + n2 + n3 + n4) / 4;

                //Verificação de condicional, para saber se o aluno está aprovado ou reprovado.
                if (media >= 7){
                    console.log(`Sua média de nota esse ano foi de: ${media}. Você está aprovado!`);
                } else {
                    console.log(`Sua média de nota esse ano foi de: ${media}. Você está reprovado!`);
                }
                notas.close();
            });
        });
    });
});
notas.on('close', () => {
  console.log('Finalizando aplicação');
  process.exit(0);
});