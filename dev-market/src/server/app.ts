import express from "express";
import router from "./routers"; // Assegure-se de que o caminho está correto

const app = express();
const PORT = 3000;

// Utilizando o roteador no caminho '/api'
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});