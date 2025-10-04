import { Cliente } from "../models/Cliente.js";

export class ClienteView {
    exibirMensagem(mensagem: string): void {
        console.log(mensagem);
    }
    listarClientes(clientes: Cliente[]): void {
        console.log("\n")
        console.log("--- Lista de clientes ---");
        clientes.forEach(cliente => {
            console.log (`Nome: ${cliente.nome}, Email: ${cliente.email}, Saldo: ${cliente.saldo}`);
        });
    }
    exibirCliente(cliente: Cliente | undefined): void {
        if (!cliente) {
            console.log("Cliente não encontrado!");
            return;
        }
        console.log (`\nCliente encontrado: Nome: ${cliente.nome}, Email: ${cliente.email}, Saldo: ${cliente.saldo}\n`);
    };
};