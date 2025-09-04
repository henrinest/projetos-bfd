class Livro {
    constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.emprestado = false;
    };
};

class Usuario {
    constructor(nome) {
        this.nome = nome;
    }
    pegarLivro(Livro) {
        console.log(`=== O usuário ${this.nome} pegou o seguinte livro: ${Livro.titulo} === \n`);
        Livro.emprestado = true;
    };
    livrosEmprestados(Livro) {
        if (Livro.emprestado === true) {
            console.log(`Livro ${Livro.titulo} se encontra indisponível \n`);
        } else {
            console.log(`Livro ${Livro.titulo} se encontra disponível!`);
        }
    }
};

const user = new Usuario("João Henrique");
let livro1 = new Livro("Bacurau", "João Scarpelly");
let livro2 = new Livro("Zorro", "Diego Vanegas");

user.pegarLivro(livro1);

user.livrosEmprestados(livro1);
user.livrosEmprestados(livro2);

