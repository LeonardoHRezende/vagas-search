import { prisma } from "../helpers/prisma";
import express from "express";
import createUserValidator from "../helpers/zod/createUserValidator";

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {

    if (!req.body) {
        res.status(401).json({
            response: 'dados faltando'
        })
    }

    const userData = await createUserValidator(req?.body);
    console.log('rota', userData)
    const createUser =
        await prisma.user.create({
            data: {
                name: userData?.name,
                age: userData?.age,
                gender: userData?.gender,
                email: userData?.email,
                telephone: userData?.telephone,
                description: userData?.description,
                habilits: {
                    create: {
                        title: userData?.habilits?.title
                    }
                },
                academicFormation: {
                    create: {
                        title: userData?.academicFormation?.title,
                        schoolName: userData?.academicFormation?.schoolName,
                        startedAt: new Date("2023-01-06T03:00:00.000z"),
                        endedAt: new Date("2023-01-06T03:00:00.000z"),
                        currentFormation: userData?.academicFormation?.currentFormation,
                    }
                },
                experiences: {
                    create: {
                        company: userData?.experiences?.company,
                        title: userData?.experiences?.title,
                        currentJob: userData?.experiences?.currentJob,
                        startedAt: new Date("2023-01-06T03:00:00.000z"),
                        endedAt: new Date("2023-01-06T03:00:00.000z"),
                        description: userData?.experiences?.description
                    }
                }
            }
        })
    res.status(201).json(createUser)
})

export default app;