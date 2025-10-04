import { ClienteController } from "./controllers/ClienteController.js";
import { ClienteView } from "./views/ClienteView.js";

const view = new ClienteView();
const controller = new ClienteController(view);

// Exemplo de fluxo pedido no desafio:
controller.cadastrarCliente("Thauan", "thauan@email.com", 1000);
controller.cadastrarCliente("João", "jotinha@email.com", 500);

controller.listarClientes();

controller.transferirValor("thauan@email.com", "jotinha@email.com", 200);

controller.listarClientes();

controller.consultarCliente("jotinha@email.com");