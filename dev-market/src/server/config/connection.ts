
const { Pool }  = require('pg');

// Cria uma nova instância do pool de conexões utilizando as configurações especificadas.
const pool = new Pool({
    host: 'localhost',    // Endereço do servidor do banco de dados
    database: 'devMarket',  // Nome do banco de dados
    port: 5432,           // Porta na qual o servidor do banco de dados está escutando
    user: 'postgres',     // Nome do usuário para conectar ao banco de dados
    password: 'postgres'  // Senha do usuário
});


export default pool;