class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.itensEmprestados = [];
    }
    pegarLivro(Biblioteca, indiceLivro) {
        const livro = Biblioteca.livrosCadastrados[indiceLivro];
        if (this.itensEmprestados.length >= 3) {
            console.log("=== A quantidade de itens que podem ser emprestados foi atingida! ===")
        } else if (livro.emprestado) {
            console.log("\n=== Livro se encontra indisponível! ===")
        } else {
            livro.emprestado = true;
            this.itensEmprestados.push(livro);
            console.log(`\nEmpréstimo do livro "${livro.titulo}" foi realizado com sucesso!`);
        };
    };
    pegarFilme(Locadora, indiceFilme) {
        const filme = Locadora.filmesCadastrados[indiceFilme];
        if (this.itensEmprestados.length >= 3) {
            console.log("=== A quantidade de itens que podem ser emprestados foi atingida! ===");
        } else if (filme.emprestado) {
            console.log("\n=== Filme se encontra indisponível! ===");
        } else {
            filme.emprestado = true;
            this.itensEmprestados.push(filme);
            console.log(`\nEmpréstimo do filme "${filme.titulo}" foi realizado com sucesso!`);
        }
    }
    devolverItem(indiceNum) {
        const item = this.itensEmprestados[indiceNum];
        item.emprestado = false;
        console.log(`\nDevolução do item "${item.titulo}" foi realizada com sucesso!\n`);
        this.itensEmprestados.splice(indiceNum, 1);
    }
    listarUserItens() {
        this.itensEmprestados.forEach((item, index) => {
            console.log(`${index + 1}. ${item.titulo} - ${item.autor || item.diretor}`);
        });
    };
};

module.exports = Usuario;