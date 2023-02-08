import { z } from "zod";

const createUserValidator = async (objectData: object) => {

    const academicFormationObject = z.object(
        {
            title: z.string().optional(),
            schoolName: z.string().optional(),
            startedAt: z.string().optional(),
            endedAt: z.string().optional(),
            currentFormation: z.boolean().optional(),
        }
    ).optional();

    const habilitsObject = z.object({
        title: z.string().optional()
    }).optional();

    const experiencesObject = z.object({
        company: z.string().optional(),
        title: z.string().optional(),
        currentJob: z.boolean().optional(),
        startedAt: z.string().optional(),
        endedAt: z.string().optional(),
        description: z.string().optional(),
    }).optional();

    const validator = z.object({
        name: z.string(),
        age: z.number(),
        gender: z.string(),
        email: z.string(),
        telephone: z.string(),
        description: z.string(),
        habilits: z.array(habilitsObject).optional(),
        academicFormation: z.array(academicFormationObject).optional(),
        experiences: z.array(experiencesObject).optional()
    });

    const validData = validator.safeParse(objectData);

    return validData;
}
export default createUserValidator;