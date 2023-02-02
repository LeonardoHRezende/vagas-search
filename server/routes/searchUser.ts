import { prisma } from "../helpers/prisma";
import Express from "express";

const app = Express();

app.get('/', async (req, res) => {

    const searchUser = await prisma.habilits.findMany();

    res.send(searchUser);
})

export default app;