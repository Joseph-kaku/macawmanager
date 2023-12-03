import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';
const app = require('../server')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);
dotenv.config();

jest.setTimeout(60000);

describe('DELETE Test Handlers', () => {
    test('responds to /completedprojects', async () => {
        const res = await request.delete('/completedprojects/656bc787f94c2a0dc3139a9b');
        expect(res.statusCode).toBe(200)
    });

    test('responds to /contacts', async () => {
        const res = await request.delete('/contacts/656bdbda97ff54c35cc95b9a');
        expect(res.statusCode).toBe(404)
    });

    test('responds to /projects', async () => {
        const res = await request.delete('/projects/656aed8bb3491f9e1385cbf5');
        expect(res.statusCode).toBe(200)
    });

    test('responds to /teams', async () => {
        const res = await request.delete('/teams/656ae29da108b3a9cc7f7883');
        expect(res.statusCode).toBe(200)
    });
})