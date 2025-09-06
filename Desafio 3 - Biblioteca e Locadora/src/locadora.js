const Filme = require('./filme');
class Locadora {
    constructor () {
        this.filmesCadastrados = []
    }
    adicionarFilme(Filme) {
        this.filmesCadastrados.push(Filme)
    }
    listarFilmes() {
        this.filmesCadastrados.forEach((Filme, index) => {
            console.log(`${index + 1}. ${Filme.titulo} - ${Filme.diretor}`);
        });
    }
}

module.exports = Locadora