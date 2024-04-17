import { Router } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../controllers/users'
import { hashPassword } from "../config/hashPassword";
import  bcrypt  from "bcrypt"

const router = Router();

router.post('/register', async (req, res) => {
    const {username, email, password, confirmPassword } = req.body;

    // Adicionar verificação de senha aqui, se necessário
    if (password !== confirmPassword) {
        return res.status(400).send({ message: "Passwords do not match" });
    }

    try {
        const hashedPassword = await hashPassword(password);
        const userRepository = getRepository(User);
        const user = userRepository.create({username, email, password: hashedPassword });
        await userRepository.save(user);
        res.status(201).send({ message: "User registered successfully", username: user.username });
    } catch (error) {
        res.status(500).send({ message: "Error registering user", error});
    }
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({where: {username}})

    if(!user){
        return res.status(404).send("user not found")
    };

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch){
        return res.status(400).send("invalid credentials");
    }

    res.send('logged in sucessfully')
})


export default router