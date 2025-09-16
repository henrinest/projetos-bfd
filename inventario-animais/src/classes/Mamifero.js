import { Animal } from "./Animal.js";
export class Mamifero extends Animal {
    emitirSom() {
        console.log(`${this.nome} faz: "grrr"`);
    }
    mover() {
        console.log(`${this.nome} está correndo.`);
    }
}
//# sourceMappingURL=Mamifero.js.map