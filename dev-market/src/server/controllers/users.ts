
import pool from "../connection"
import { Request, Response } from 'express'

const usersList = async (req: Request, res: Response) => {
    try {
        const usersList = await pool.query('SELECT * FROM users');
        res.status(200).send(usersList.rows);
    } catch (error) {
        res.status(500).send("Erro ao recuperar os usuários");
    }
}
export default usersList;