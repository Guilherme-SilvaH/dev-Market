import { Router } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../controllers/users'
import { hashPassword } from "../config/hashPassword";
import  bcrypt  from "bcrypt"
import pool from "../config/connection"

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        // Validação de entrada...
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" }); 
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        // Verificar se o usuário já existe
        const queryText = 'SELECT * FROM users WHERE email = $1';
        const { rows } = await pool.query(queryText, [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: "Email is already registered" });
        }

        // Criptografar senha
        const hashedPassword = await hashPassword(password);

        // Inserir novo usuário no banco de dados
        const insertQuery = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *';
        const values = [name, email, hashedPassword];
        const newUser = await pool.query(insertQuery, values);

        res.status(201).json({ message: "User registered successfully", username: newUser.rows[0].name });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Error registering user" });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validar entrada
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Procurar usuário no banco de dados
        const query = 'SELECT * FROM users WHERE email = $1';
        const { rows } = await pool.query(query, [email]);

        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const user = rows[0];

        // Verificar senha
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        
        // Autenticação bem-sucedida
        res.json({ message: "Logged in successfully" });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Error logging in" });
    }
});


router.get('/allusers', async (req, res) => {
    try {
        // Execute a consulta SQL usando o pool de conexões
        const result = await pool.query('SELECT * FROM users');
        // Envie os resultados da consulta de volta como resposta
        res.json(result.rows);
    } catch (error) {
        // Lide com erros de consulta
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users' });
    }
});

export default router