import { Animal } from "./Animal.js";
export class Ave extends Animal {
    emitirSom() {
        console.log(`${this.nome} canta: "piu piu"`);
    }
    mover() {
        console.log(`${this.nome} está voando.`);
    }
}
//# sourceMappingURL=Ave.js.map