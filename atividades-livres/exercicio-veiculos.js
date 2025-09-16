class Veiculo {
    constructor(tipo) {
        this.tipo = tipo;
        this.velocidade = 0
    }
    mover() {

    }
}

class Carro extends Veiculo {
    mover() {
        this.velocidade += 10
        console.log(`O ${this.tipo} se moveu em uma velocidade de ${this.velocidade} km/h.`)
    }
}

class Aviao extends Veiculo {
    mover() {
        this.velocidade += 1000
        console.log(`O ${this.tipo} se moveu em uma velocidade de ${this.velocidade} m.`)
    }
}

class Barco extends Veiculo {
    mover() {
        this.velocidade += 5
        console.log(`O ${this.tipo} se moveu em uma velocidade de ${this.velocidade} nós.`)
    }
}

class VeiculoManager {
    constructor() {
        this.veiculos = []
    }
    moverTodos(veiculo) {
        if (veiculo) {
            this.veiculos.push(veiculo);
        }        
        for (let i = 0; i < this.veiculos.length; i++) {
            this.veiculos[i].mover();
        }

    }
}

const carro1 = new Carro("carro");
const aviao1 = new Aviao("avião");
const barco1 = new Barco("barco");
const veiculoManager = new VeiculoManager();

veiculoManager.moverTodos(carro1);  // Adiciona carro e move todos
veiculoManager.moverTodos(aviao1); // Adiciona avião e move todos
veiculoManager.moverTodos(barco1); // Adiciona barco e move todos

carro1.mover();
aviao1.mover();
barco1.mover();
veiculoManager.moverTodos();