const app = require('../server')
const supertest = require('supertest');
const request = supertest(app);
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

jest.setTimeout(60000);

describe('GET Test Handlers', () => {
    test('responds to /completedprojects', async () => {
        const res = await request.get('/completedprojects');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    });

    test('responds to /contacts', async () => {
        const res = await request.get('/contacts');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    });

    test('responds to /projects', async () => {
        const res = await request.get('/projects');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    });

    test('responds to /teams', async () => {
        const res = await request.get('/teams');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    });
})