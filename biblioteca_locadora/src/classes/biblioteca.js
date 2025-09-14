class Biblioteca {
    constructor() {
        this.livrosCadastrados = [];
    }
    adicionarLivro(Livro) {
        this.livrosCadastrados.push(Livro);
    }
    listarLivros() {
        this.livrosCadastrados.forEach((livro, index) => {
            let status;
            if (livro.emprestado) {
                status = "Indisponível";
            } else {
                status = "Disponível";
            }
            console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} - [${status}]`);
        });
    };
};

export default Biblioteca;