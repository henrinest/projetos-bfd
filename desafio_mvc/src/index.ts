import express from "express";
import Router from "express";
import { ClienteController } from "./controllers/ClienteController.js";
import { ClienteView } from "./views/ClienteView.js";

const app = express();
const port = 3000;
const router = Router();
const view = new ClienteView();
const controller = new ClienteController(view);

router.get("/clients", (req, res) => controller.listarClientes(req, res));

// Cadastro de clientes e solicitação de transferência:
controller.cadastrarCliente("Thauan", "thauan@email.com", 1000);
controller.cadastrarCliente("João", "jotinha@email.com", 500);

//controller.listarClientes();

controller.transferirValor("thauan@email.com", "jotinha@email.com", 200);

//controller.listarClientes();

controller.consultarCliente("thauan@email.com");

app.use("/api", router);

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
}).on("error", (error) => {
    console.log(`Erro ao iniciar servidor: ${error}`)
});