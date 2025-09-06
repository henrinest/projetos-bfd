class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.itensEmprestados = [];
    }
    pegarLivro(Biblioteca, indiceLivro) {
        const livro = Biblioteca.livrosCadastrados[indiceLivro];
        if (livro.emprestado) {
            console.log("\nLivro se encontra indisponível!")
        } else {
            livro.emprestado = true
            this.itensEmprestados.push(livro)  
        }
    }
    pegarFilme(Locadora, indiceFilme) {
        const filme = Locadora.filmesCadastrados[indiceFilme];
        if (filme.emprestado) {
            console.log("\nFilme se encontra indisponível!")
        } else {
            filme.emprestado = true
            this.itensEmprestados.push(filme)
        }
    }
    devolverItem(indiceLivro) {
        this.itensEmprestados.splice[indiceLivro]
    }
    listarUserLivros() {
        console.log("Livros atualmente emprestados pelo usuário: ")
        this.itensEmprestados.forEach((Livro, index) => {
            console.log(`${index + 1}. ${Livro.titulo} - ${Livro.autor}`);
        });
    }
    listarUserFilmes() {
        console.log("Filmes atualmente emprestados pelo usuário: ")
        this.itensEmprestados.forEach((Filme, index) => {
            console.log(`\n${index + 1}. ${Filme.titulo} - ${Filme.diretor}`);
        });
    }
}

module.exports = Usuario