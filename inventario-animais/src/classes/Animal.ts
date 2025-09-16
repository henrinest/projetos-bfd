import type { IAnimal } from '../interfaces/IAnimal.js';

export abstract class Animal implements IAnimal {
    constructor(public nome: string, public idade: number) { }

    abstract emitirSom(): void;
    abstract mover(): void;
}