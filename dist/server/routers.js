"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./controllers/users"));
// Criando uma instância do Router ao invés de express().
const router = express_1.default.Router();
// Definindo a rota que usa a função de controle usersList.
router.get("/users", users_1.default);
// Exportando o router para uso em outro lugar do seu aplicativo.
exports.default = router;
