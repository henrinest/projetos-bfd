class Locadora {
    constructor() {
        this.filmesCadastrados = [];
    }
    adicionarFilme(Filme) {
        this.filmesCadastrados.push(Filme);
    }
    listarFilmes() {
        this.filmesCadastrados.forEach((Filme, index) => {
            let status;
            if (Filme.emprestado) {
                status = "Indisponível";
            } else {
                status = "Disponível";
            }
            console.log(`${index + 1}. ${Filme.titulo} - ${Filme.diretor} - [${status}]`);
        });
    };
};

export default Locadora;