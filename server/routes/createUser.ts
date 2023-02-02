import { prisma } from "../helpers/prisma";
import express from "express";

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {

    if (!req.body) {
        res.status(401).json({
            response: 'dados faltando'
        })
    }

    const createUser = await prisma.user.create({
        data: {
            name: req?.body?.name,
            age: req?.body?.age,
            gender: req?.body?.gender,
            email: req?.body?.email,
            telephone: req?.body?.telephone,
            description: req?.body?.description,
            habilits: {
                create: {
                    title: req?.body?.habilits?.title
                }
            },
            academicFormation: {
                create: {
                    title: req?.body?.academicFormation?.title,
                    schoolName: req?.body?.academicFormation?.schoolName,
                    startedAt: new Date("2023-01-06T03:00:00.000z"),
                    endedAt: new Date("2023-01-06T03:00:00.000z"),
                    currentFormation: req?.body?.academicFormation?.currentFormation,
                }
            },
            experiences: {
                create: {
                    company: req?.body?.experiences?.company,
                    title: req?.body?.experiences?.title,
                    currentJob: req?.body?.experiences?.currentJob,
                    startedAt: new Date("2023-01-06T03:00:00.000z"),
                    endedAt: new Date("2023-01-06T03:00:00.000z"),
                    description: req?.body?.experiences?.description
                }
            }
        }
    })
    res.send(createUser)
})

export default app;