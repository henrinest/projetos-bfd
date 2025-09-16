import { Mamifero } from "./classes/Mamifero.js";
import { Ave } from "./classes/Ave.js";
import { Reptil } from "./classes/Reptil.js";
import { Inventario } from "./managers/Inventario.js";
const inventario = new Inventario();
const leao = new Mamifero("Leão", 5);
const arara = new Ave("Arara Azul", 2);
const cobra = new Reptil("Cobra Coral", 4);
inventario.adicionar(leao);
inventario.adicionar(arara);
inventario.adicionar(cobra);
inventario.listar();
inventario.interagirTodos();
//# sourceMappingURL=index.js.map