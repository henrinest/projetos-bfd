import { Animal } from "./Animal.js";

export class Mamifero extends Animal {
emitirSom(): void {
console.log(`${this.nome} faz: "grrr"`);
}
mover(): void {
console.log(`${this.nome} está correndo.`);
}
}