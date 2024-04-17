
import express from "express";
import usersList from "./controllers/users";

// Criando uma instância do Router ao invés de express().
const router = express.Router();
// Definindo a rota que usa a função de controle usersList.
router.get("/users", usersList);

// Exportando o router para uso em outro lugar do seu aplicativo.
export default router;