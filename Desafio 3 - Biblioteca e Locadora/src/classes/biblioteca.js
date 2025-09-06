class Biblioteca {
    constructor () {
        this.livrosCadastrados = []
    }
    adicionarLivro(Livro) {
        this.livrosCadastrados.push(Livro)
    }
    listarLivros() {
        this.livrosCadastrados.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
        });
    }
}

module.exports = Biblioteca