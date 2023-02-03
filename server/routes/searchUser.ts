import { prisma } from "../helpers/prisma";
import Express from "express";

const app = Express();

app.get('/', async (req, res) => {

    const searchUsers = await prisma.user.findMany();

    const users = await Promise.all(
        searchUsers.map(async (user) => {

            const habilits = await prisma.habilits.findMany({
                where: {
                    userId: user.id
                }
            });

            const academicFormation = await prisma.academicFormation.findMany({
                where: {
                    userId: user.id
                }
            });

            const experience = await prisma.experience.findMany({
                where: {
                    userId: user.id
                }
            });

            return { user, habilits, academicFormation, experience };
        })
    );

    res.send(users);
})

export default app;