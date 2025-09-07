class Filme {
    constructor(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.emprestado = false;
    };
    emprestar() {
        this.emprestado = true;
    };
    devolver() {
        this.emprestado = false;
    };
};

module.exports = Filme;