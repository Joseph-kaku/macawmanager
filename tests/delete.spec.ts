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
        const res = await request.delete('/completedprojects/656ae16f12c69b653667b7a9');
        expect(res.statusCode).toBe(200)
    });

    test('responds to /contacts', async () => {
        const res = await request.delete('/contacts/656ae17512c69b653667b7ac');
        expect(res.statusCode).toBe(404)
    });

    test('responds to /projects', async () => {
        const res = await request.delete('/projects/656ae17512c69b653667b7ae');
        expect(res.statusCode).toBe(200)
    });

    test('responds to /teams', async () => {
        const res = await request.delete('/teams/656ae17512c69b653667b7b0');
        expect(res.statusCode).toBe(404)
    });
})