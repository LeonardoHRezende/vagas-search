import { z } from "zod";

const createUserValidator = async (objectData: object) => {

    const validator = z.object({
        name: z.string(),
        age: z.number(),
        gender: z.string(),
        email: z.string(),
        telephone: z.string(),
        description: z.string(),
        habilits: z.object({
            title: z.string()
        }),
        academicFormation: z.object(
            {
                title: z.string(),
                schoolName: z.string(),
                startedAt: z.string(),
                endedAt: z.string(),
                currentFormation: z.boolean(),
            }
        ),
        experiences: z.object({
            company: z.string(),
            title: z.string(),
            currentJob: z.boolean(),
            startedAt: z.string(),
            endedAt: z.string(),
            description: z.string(),
        })
    });

    try {
        const validData = validator.parse(objectData);

        return validData;
    } catch (e) {
        console.log(e)
        throw e;
    }
}
export default createUserValidator;