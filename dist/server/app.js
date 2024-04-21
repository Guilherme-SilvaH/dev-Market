"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers")); // Assegure-se de que o caminho está correto
const app = (0, express_1.default)();
const PORT = 3000;
// Utilizando o roteador no caminho '/users'
app.use('/users', routers_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
