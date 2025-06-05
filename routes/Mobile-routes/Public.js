import express from "express";
import bcrypt from 'bcrypt'
import { PrismaClient } from '@PrismaClient'

const prismna = new PrismaClient()
const router = express.Router()

// Cadastro
router.post('/cadastro', async (req, res) => {
    try {

    const user = req.body

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)

    await PrismaClient.user.create ({
        data: {
            matricula: user.matricula,
            name: user.name,
            password
        }
    })
    res.status(201).json(user)
    }
    catch(err){
     res.status(500).json({ message: 'Erro no servidor, tente novamente' })    
    }
})

export default router 
