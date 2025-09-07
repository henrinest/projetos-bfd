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

//Declaração de constantes e varivavéis globais para o armazenamento de informações do usuário da aplicação.
let user = null;
const usuariosCadastrados = [];

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
async function menu(userName) {
    console.log(" \n=== Menu ===\n Cadastramento de usuário [1]\n Listar Livros [2]\n Listar Filmes [3]\n Empréstimo de livro [4]\n Empréstimo de filme [5]");
    console.log(" Cadastrar itens [6]\n Devolução de itens [7]\n Listar itens emprestados pelo usuário atual [8]\n Realizar troca entre usuários cadastrados [9]\n Sair [0]\n");

    console.log(`Usuário atual: ${user ? `"${user.nome}"` : '"Nenhum"'}\n`); //Exposição do nome do usuário que está utilizando a aplicação no momento.

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
            devolverItem();
            break;
        case "8":
            listarUserItens();
            break;
        case "9":
            trocaUsuario();
            break;
        case "0":
            main.close();
            break;
        default:
            console.clear();
            console.log("=== Escolha uma das opções listadas no menu inicial. ===");
            return menu();
    };
};

//Função para cadastro de usuário, o cadastro fica registrado como um objeto na classe "Usuario".
async function usuarioCadastro() {
    const userName = await pergunta("Digite seu nome de usuário: ");

    if (isNaN(userName)) {
        console.clear();
        user = new Usuario(userName);
        usuariosCadastrados.push(user);
        console.log(`=== Usuário criado: ${user.nome} ===`);
        return menu();
    } else {
        console.clear();
        console.log("=== Nome de usuário digitado de maneira inválida, cadastre novamente. ===");
        return usuarioCadastro();
    };
};

//Função criada para possibilitar a troca em usuários previamente cadastrados.
async function trocaUsuario() {
    if (user === null) {
        console.clear();
        console.log("=== Nenhum usuário cadastrado! ===");
        console.log("=== Cadastre um usuário antes de utilizar a opção de troca entre usuários! ===");
        return menu();
    }
    console.clear();
    console.log("Usuários cadastrados: ");
    usuariosCadastrados.forEach((usuariosCadastrados, index) => {
        console.log(`${index + 1}. ${usuariosCadastrados.nome}`);
    });
    const indice = await pergunta("\nSelecione o usuário que você deseja utilizar escolhendo o número do indíce apresentado: ");
    const seletorIndice = indice - 1;
    if (isNaN(seletorIndice)) {
        console.clear();
        console.log("=== Número de indíce digitado de maneira inválida! ===");
        return trocaUsuario();
    }
    if (seletorIndice < 0 || seletorIndice >= usuariosCadastrados.length) {
        console.log("=== Número índice de usuário digitado é inválido! ===");
        console.log("=== Digite o número do indíce de um usuário que esteja registrado no sistema! ===");
        return menu();

    };
    console.clear();
    user = usuariosCadastrados[seletorIndice];
    console.log(`=== A troca de usuário para "${user.nome}" foi realizada! ===`);
    return menu();
};

//Funcionalidade que permite o cadastramento separado de livros e filmes.
async function cadastrarItens() {
    let continuar = true; //Verificação booleana.
    const resposta = await pergunta("\nDeseja cadastrar um novo Livro [1] ou Filme [2]? ");

    if (resposta === "1") {
        console.clear();
        while (continuar) {

            const livroTitulo = await pergunta("\nDigite o título da obra: ");
            let livroAutor = await pergunta("Digite o nome do autor da obra: ");
            while (!isNaN(livroAutor)) {
                console.log("Nome do autor digitado de maneira inválida!\n")
                livroAutor = await pergunta("Digite o nome do autor da obra: ");
            }
            newLivro = new Livro(livroTitulo, livroAutor);
            biblioteca.adicionarLivro(newLivro);

            console.log(`=== Livro "${livroTitulo}" cadastrado com sucesso! ===`);

            const resposta = await pergunta("\nDeseja cadastrar outro livro? (s/n): ");
            continuar = resposta.toLowerCase() === 's';
        };
    } else if (resposta === "2") {
        console.clear();
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
    } else {
        console.clear();
        console.log("=== A opção digitada é inválida! ===");
        console.log("=== Digite uma opção válida para realizar o cadastramento dos itens no sistema! ===");
        return cadastrarItens();
    }
    return menu();
};

//Listagem dos livros previamente cadastrados.
async function listarLivros() {
    console.clear();
    if (biblioteca.livrosCadastrados.length === 0) {
        console.log("=== Nenhum livro registrado! ===");
        console.log("=== Realize o registro de um livro antes de utilizar essa funcionalidade! ===");
        return menu();
    };
    console.log("=== Livros registrados na biblioteca: ===");
    biblioteca.listarLivros();
    return menu();
};

//Listagem dos filmes previamente cadastrados.
async function listarFilmes() {
    console.clear();
    if (locadora.filmesCadastrados.length === 0) {
        console.log("=== Nenhum filme registrado! ===")
        console.log("=== Realize o registro de um livro antes de utilizar essa funcionalidade! ===")
        return menu();
    };
    console.log("=== Filmes registrados na locadora: ===");
    locadora.listarFilmes();
    return menu();
};

//Função que possibilita que um usuário, previamente cadastrado possa solicitar o empréstimo de um livro.
async function emprestarLivro() {
    console.clear();
    if (user === null) {
        console.log("=== Nenhum usuário cadastrado! ===");
        console.log("=== Cadastre um usuário antes de utilizar a opção de empréstimo! ===");
        return menu();
    }
    if (biblioteca.livrosCadastrados.length === 0) {
        console.log("=== Nenhum livro registrado! ===");
        console.log("=== Realize o registro de um livro antes de utilizar essa funcionalidade! ===");
        return menu();
    }
    console.log("=== Livros registrados na Biblioteca: ===");
    biblioteca.listarLivros();
    const livroIndice = await pergunta("\n-> Digite o número do indíce do livro que você deseja emprestado: ");
    const indiceLivro = livroIndice - 1;
    if (indiceLivro < 0 || indiceLivro >= biblioteca.livrosCadastrados.length) {
        console.log("=== Número índice digitado é inválido! ===");
        console.log("=== Digite o número do indíce de um livro que esteja registrado no sistema! ===");
        return menu();
    };
    user.pegarLivro(biblioteca, indiceLivro);
    return menu();

};

//Função que possibilita que um usuário, previamente cadastrado possa solicitar o empréstimo de um filme.
async function emprestarFilme() {
    console.clear();
    if (user === null) {
        console.log("=== Nenhum usuário cadastrado! ===")
        console.log("=== Cadastre um usuário antes de utilizar a opção de empréstimo! ===")
        return menu();
    }
    if (locadora.filmesCadastrados.length === 0) {
        console.log("=== Nenhum filme registrado! ===")
        console.log("=== Realize o registro de um filme antes de utilizar essa funcionalidade! ===")
        return menu();
    }
    console.log("=== Filmes registrados na Locadora: ===");
    locadora.listarFilmes();
    const filmeIndice = await pergunta("\n-> Digite o número do indíce do livro que você deseja emprestado: ");
    const indiceFilme = filmeIndice - 1;
    if (indiceFilme < 0 || indiceFilme >= locadora.filmesCadastrados.length) {
        console.log("=== Número índice digitado é inválido! ===");
        console.log("=== Digite o número do indíce de um filme que esteja registrado no sistema! ===");
        return menu();
    };
    user.pegarFilme(locadora, indiceFilme);
    return menu();
};

//Função que permite a devolução de um item (livros ou filmes) armazenado no array itensEmprestados, da classe Usuario.
async function devolverItem() {
    console.clear();
    if (user === null) {
        console.log("=== Nenhum usuário cadastrado! ===");
        console.log("=== Cadastre um usuário antes de utilizar a opção de devolução! ===");
        return menu();
    }
    if (user.itensEmprestados.length === 0) {
        console.log("=== Nenhum item registrado! ===");
        console.log("=== Solicite o emrpéstimo de um livro ou filme para que essa funcionalidade possa ser utilizada! ===");
        return menu();
    }
    console.log("=== Itens atualmente em posse do usuário: ===");
    user.listarUserItens();
    const indice = await pergunta("\n-> Digite o número do indíce do item que deseja devolver: ");
    const indiceNum = indice - 1;
    if (indiceNum < 0 || indiceNum >= user.itensEmprestados.length) {
        console.log("=== Número índice digitado é inválido! ===");
        console.log("=== Digite o número do indíce de um livro que esteja registrado no sistema! ===");
        return menu();
    };
    user.devolverItem(indiceNum);
    return menu();
}

//Função que permite a visualização dos itens (livros e filmes) armazenados no array itensEmprestados, da classe Usuario.
async function listarUserItens() {
    console.clear();
    if (user === null) {
        console.log("=== Nenhum usuário cadastrado! ===");
        console.log("=== Cadastre um usuário antes de utilizar a opção de listagem de itens do usuário! ===");
        return menu();
    }
    console.log("=== Itens atualmente em posse do usuário: ===");
    user.listarUserItens();
    return menu();
    ;
}

//Chama a função principal, disponibilizando um menu seletor para o usuário da aplicação.
menu();