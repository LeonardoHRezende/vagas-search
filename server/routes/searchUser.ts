import { prisma } from "../helpers/prisma";
import express from "express";

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {

    //busca usuário
    const searchUsers = await prisma.user.findMany();

    const users = await Promise.all(
        searchUsers.map(async (user) => {

            //adiciona habilidades do usuario ao obj de retorno
            const habilits = await prisma.habilits.findMany({
                where: {
                    userId: user.id
                }
            });

            //adiciona formação academica do usuario ao obj de retorno
            const academicFormation = await prisma.academicFormation.findMany({
                where: {
                    userId: user.id
                }
            });

            //adiciona experiencias do usuario ao obj de retorno
            const experience = await prisma.experience.findMany({
                where: {
                    userId: user.id
                }
            });

            return { user, habilits, academicFormation, experience };
        })
    );

    res.status(200).json(users);
})

export default app;