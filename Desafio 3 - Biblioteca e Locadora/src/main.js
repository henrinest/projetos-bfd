//Exportação do readline e das classes para utilização no arquivo principal.
const readline = require("readline");
const Usuario = require('./classes/usuario');
const Livro = require('./classes/livro');
const Filme = require('./classes/filme');
const Locadora = require('./classes/locadora');
const Biblioteca = require('./classes/biblioteca');

//Criação dos objetos Biblioteca e Locadora, que não possuem atributos principais.
const biblioteca = new Biblioteca();
const locadora = new Locadora();

let user;
const usuariosCadastrados = [];
const usuarioAtual = user;

const main = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Criação da função para solicitação de múltiplas perguntas.
function pergunta(questao) {
    return new Promise((resolve) => {
        main.question((questao), (resposta) => {
            resolve(resposta);
        });
    });
};

//Criação da função que expõe o menu de opções para o usuário da aplicação.
async function menu() {
    console.log(" \n=== Menu ===\n Cadastramento de usuário [1]\n Listar Livros [2]\n Listar Filmes [3]\n Empréstimo de livro [4]\n Empréstimo de filme [5]");
    console.log(" Cadastrar itens [6]\n Devolução de itens [7]\n Listar itens emprestados pelo usuário atual [8]\n Sair [0]\n");
    const resposta = await pergunta("[Selecione a opção]: ");

    switch (resposta) {
        case "1":
            usuarioCadastro();
            break;
        case "2":
            listarLivros();
            break;
        case "3":
            listarFilmes();
            break;
        case "4":
            emprestarLivro();
            break;
        case "5":
            emprestarFilme();
            break;
        case "6":
            cadastrarItens();
            break;
        case "7":
            devolverItem()
            break;
        case "8":
            listarUserItens()
            break;
        case "0":
            main.close();
            break;
        default:
            console.log("=== Escolha uma das opções listadas no menu inicial. ===");
            return menu();
    };
};

// Função para cadastro de usuário, o cadastro fica registrado como um objeto na classe "Usuario".
async function usuarioCadastro() {
    const userName = await pergunta("Digite seu nome de usuário: ");

    if (isNaN(userName)) {
        user = new Usuario(userName);
        usuariosCadastrados.push(user);
        console.log(`=== Usuário criado: ${user.nome} ===`);
        menu();
    } else {
        console.log("=== Nome de usuário digitado de maneira inválida, cadastre novamente. ===");
        usuarioCadastro();
    };
};

async function cadastrarItens() {
    let continuar = true; //Verificação booleana.
    const resposta = await pergunta("\nDeseja cadastrar um novo Livro [1] ou Filme [2]? ");

    if (resposta === "1") {
        while (continuar) {

            const livroTitulo = await pergunta("\nDigite o título da obra: ");
            let livroAutor = await pergunta("Digite o nome do autor da obra: ");
            while (!isNaN(livroAutor)) {
                console.log("Nome do autor digitado de maneira inválida!\n")
                livroAutor = await pergunta("Digite o nome do autor da obra: ");
            }
            newLivro = new Livro(livroTitulo, livroAutor)
            biblioteca.adicionarLivro(newLivro);

            console.log(`=== Livro "${livroTitulo}" cadastrado com sucesso! ===`);

            const resposta = await pergunta("\nDeseja cadastrar outro livro? (s/n): ");
            continuar = resposta.toLowerCase() === 's';
        };
    } else if (resposta === "2") {
        while (continuar) {

            const filmeTitulo = await pergunta("\nDigite o título da obra: ");
            let filmeDiretor = await pergunta("Digite o nome do diretor da obra: ");
            while (!isNaN(filmeDiretor)) {
                console.log("Nome do diretor digitado de maneira inválida!\n")
                filmeDiretor = await pergunta("Digite o nome do diretor da obra: ");
            }
            newFilme = new Filme(filmeTitulo, filmeDiretor);
            locadora.adicionarFilme(newFilme);

            console.log(`\n=== Filme "${filmeTitulo}" cadastrado com sucesso! ===`);

            const resposta = await pergunta("\nDeseja cadastrar outro filme? (s/n): ");
            continuar = resposta.toLowerCase() === 's';
        };
    };
    menu();
};

async function listarLivros() {
    biblioteca.listarLivros();
    menu();
};

async function listarFilmes() {
    locadora.listarFilmes();
    menu();
};

async function emprestarLivro() {
    console.log("Livros registrados na Biblioteca:")
    biblioteca.listarLivros();   
    const livroIndice = await pergunta("\nDigite o número do indíce do livro que você deseja emprestado: ");
    const indiceLivro = livroIndice - 1;
    user.pegarLivro(biblioteca, indiceLivro);
    menu();
};

async function emprestarFilme() {
    console.log("Filmes registrados na Locadora:")
    locadora.listarFilmes();
    const filmeIndice = await pergunta("\nDigite o número do indíce do livro que você deseja emprestado: ");
    const indiceFilme = filmeIndice - 1;
    user.pegarFilme(locadora, indiceFilme);
    menu();
};

async function devolverItem() {
    console.log("Itens atualmente em posse do usuário: ");
    user.listarUserItens();
    const indice = await pergunta("\nDigite o número do indíce do item que deseja devolver: ");
    const indiceNum = indice - 1;
    user.devolverItem(indiceNum);
    menu();
}

async function listarUserItens() {
    user.listarUserItens();
    menu();
;}

menu();