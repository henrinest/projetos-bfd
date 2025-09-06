//Exportação do readline e das classes para utilização no arquivo principal.
const readline = require("readline");
const Usuario = require('./usuario');
const Livro = require('./livro');
const Filme = require('./filme');
const Locadora = require('./locadora');
const Biblioteca = require('./biblioteca');

const main = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Criação da função para solicitação de múltiplas perguntas.
function pergunta(questao) {
    return new Promise ((resolve) => {
        main.question((questao), (resposta) => {
            resolve(resposta);
        });
    });
};

//Criação da função que expõe o menu de opções para o usuário da aplicação.
async function menu() {
    console.log(" === Menu ===\n Cadastramento de usuário [1]\n Listar Livros [2]\n Listar Filmes [3]\n Empréstimo de Livro [4]\n Empréstimo de Filmes [5]");
    console.log(" Devolução de Livros [6]\n Devolução de Filmes [7]\n Listar itens emprestados pelo usuário [8]\n Sair [0]\n");
    const resposta = await pergunta("[Selecione a opção]: ");

    switch (resposta) {
        case "1":
        usuarioCadastro();
        break;
        case "2":

        break;
        case "3":

        break;
        case "4":

        break;
        case "5":

        break;
        case "6":

        break;
        case "7":

        break;
        case "8":

        break;
        case "0":
        main.close()
        break;
    };
};

// Função para cadastro de usuário, o cadastro fica registrado como um objeto na classe "Usuario".
async function usuarioCadastro() {
    const res = await pergunta("Digite seu nome de usuário: ");
    const usuariosCadastrados = []
    let user;

    if (isNaN(res)){
    user = new Usuario(res);
    usuariosCadastrados.push(user)
    console.log(`=== Usuário criado: ${user.nome} === \n`);
    menu();
    } else {
        console.log("=== Nome de usuário digitado de maneira inválida, cadastre novamente. ===");
        usuarioCadastro();
    };  
};

menu();