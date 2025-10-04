import type { Request, Response } from "express";
import { Cliente } from "../models/Cliente.js";
import { ClienteView } from "../views/ClienteView.js";

export class ClienteController {
    private clientes: Cliente[] = [];
    private view: ClienteView;

    constructor(view: ClienteView) {
        this.view = view;
    }
    cadastrarCliente(nome: string, email: string, saldo: number): void {
        if (this.clientes.some(cliente => cliente.email === email)) {
            this.view.exibirMensagem("Erro: já existe um cliente com esse email.");
        }
        const novoCliente = new Cliente(nome, email, saldo);
        this.clientes.push(novoCliente);
        this.view.exibirMensagem("Cliente cadastrado com sucesso!");
    }
    listarClientes(req: Request, res: Response): void {
        this.view.listarClientes(this.clientes, res);
    }
    consultarCliente(email: string): void {
        const cliente = this.clientes.find(cliente => cliente.email === cliente.email);
        this.view.exibirCliente(cliente);
    }
    transferirValor(origemEmail: string, destinoEmail: string, valor: number): void {
        const origem = this.clientes.find(cliente => cliente.email === origemEmail)
        const destino = this.clientes.find(cliente => cliente.email === destinoEmail)

        if (!origem || !destino) {
            console.log("--- Email de origem ou destino não encontrado pelo sistema! ---");
            return;
        }
        if (origem.saldo < valor) {
            console.log("--- Saldo insufuciente para realização da tranferência bancária! ---")
            return;
        }
        origem.saldo -= valor;
        destino.saldo += valor;

        this.view.exibirMensagem("--- Transferência bancária completada com sucesso! ---");
    };
};