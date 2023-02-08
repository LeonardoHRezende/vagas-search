import createUser from "../routes/createUser"
import request from 'supertest';

describe('POST /', () => {
    it('returns 400 if no data is provided', async () => {
        const res = await request(createUser).post('/');
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({ response: 'Data is missing' });
    });

    it('returns 400 if userData validation fails', async () => {
        const res = await request(createUser).post('/').send({});
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({});
    });

    it('returns 201 and created user if userData is valid', async () => {
        const userData = {
            name: 'John Doe',
            age: 30,
            gender: 'Male',
            email: 'johndoe@example.com',
            telephone: '1234567890',
            description: 'Test user',
            habilits: {
                title: 'Test hability',
            },
            academicFormation: {
                title: 'Test formation',
                schoolName: 'Test school',
                startedAt: '2022-01-01',
                endedAt: '2022-12-31',
                currentFormation: false,
            },
            experiences: {
                company: 'Test company',
                title: 'Test experience',
                currentJob: false,
                startedAt: '2022-01-01',
                endedAt: '2022-12-31',
                description: 'Test description',
            }
        };

        const res = await request(createUser).post('/').send(userData);
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
            ...userData,
            habilits: [
                {
                    title: 'Test hability',
                }
            ],
            academicFormation: [
                {
                    title: 'Test formation',
                    schoolName: 'Test school',
                    startedAt: '2022-01-01',
                    endedAt: '2022-12-31',
                    currentFormation: false,
                }
            ],
            experiences: [
                {
                    company: 'Test company',
                    title: 'Test experience',
                    currentJob: false,
                    startedAt: '2022-01-01',
                    endedAt: '2022-12-31',
                    description: 'Test description',
                }
            ]
        });
    });
});