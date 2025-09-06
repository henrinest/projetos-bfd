class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;
    };
    emprestar() {
        this.emprestado = true;
    };
    devolver() {
        this.emprestado = false;
    };
};

module.exports = Livro;