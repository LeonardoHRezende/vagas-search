import { prisma } from "../helpers/prisma";
import express from "express";
import createUserValidator from "../helpers/zod/createUserValidator";

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {

    if (!req.body) {
        res.status(400).json({
            response: 'Data is missing'
        })
    }

    const userData = await createUserValidator(req?.body);

    console.log(req.body)

    if (userData.success) {
        const createUser =
            await prisma.user.create({
                data: {
                    name: req?.body?.name,
                    age: req?.body?.age,
                    gender: req?.body?.gender,
                    email: req?.body?.email,
                    telephone: req?.body?.telephone,
                    description: req?.body?.description,
                    ...(req?.body?.habilits && {
                        habilits: {
                            createMany: [
                                {
                                    title: req?.body?.habilits.title
                                }
                            ]
                        }
                    }),
                    ...(req?.body?.academicFormation && {
                        academicFormation: {
                            create: [{
                                title: req?.body?.academicFormation?.title,
                                schoolName: req?.body?.academicFormation?.schoolName,
                                startedAt: req?.body?.academicFormation?.startedAt,
                                endedAt: req?.body?.academicFormation?.endedAt,
                                currentFormation: req?.body?.academicFormation?.currentFormation,
                            }]
                        }
                    }),
                    ...(req?.body?.exeperience && {
                        experiences: {
                            create: [{
                                company: req?.body?.experiences?.company,
                                title: req?.body?.experiences?.title,
                                currentJob: req?.body?.experiences?.currentJob,
                                startedAt: req?.body?.experiences?.startedAt,
                                endedAt: req?.body?.experiences?.endedAt,
                                description: req?.body?.experiences?.description
                            }]
                        }
                    })
                }
            })
        res.status(201).json(createUser)
    }
    else {
        res.status(400).json(userData.error.issues)
    }
})

export default app;