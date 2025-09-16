import { Animal } from "../classes/Animal.js";
export class Inventario {
    animais = [];
    adicionar(animal) {
        this.animais.push(animal);
    }
    listar() {
        console.log("=== Inventário de Animais ===");
        this.animais.forEach((a, i) => {
            console.log(`${i + 1}. ${a.nome} (${a.constructor.name})`);
        });
    }
    interagirTodos() {
        for (const a of this.animais) {
            a.emitirSom();
            a.mover();
        }
    }
}
//# sourceMappingURL=Inventario.js.map