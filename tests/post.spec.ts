import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';
const app = require('../server')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);
dotenv.config();

jest.setTimeout(60000);

describe('POST Handlers', () => {
    test('Responds to post /completedprojects', async () => {
        
        const res = await request.post('/completedprojects').send({
            projectName: "Jest Test",
            projectDescription: "Jest Test.",
            technologies: [
                "Power BI",
                "Tableau",
                "SQL Server",
                "Data Warehouse"
            ],
            completionDate: "2023-11-10",
            projectManager: "Test Test"
        });
        expect(res.header['content-type']).toEqual('application/json; charset=utf-8');
        expect(res.statusCode).toEqual(201);
    });

    test('Responds to post /contacts', async () => {
        const res = await request.post('/contacts').send({
            name: "Jest Test",
            title: "Jest Test",
            email: "jane.doe@acmetech.com",
            phone: "+1-646-555-1212",
            department: "Management",
            projects: [
                "Machine Learning Model for Fraud Detection",
                "Data Analytics Dashboard for Business Intelligence"
            ]
        });
        expect(res.header['content-type']).toEqual('application/json; charset=utf-8');
        expect(res.statusCode).toEqual(201);
    });

    test('Responds to post /projects', async () => {
        const res = await request.post('/projects').send({
            projectName: "Jest Test",
            company: "Jest Test",
            projectDescription: "Develop a machine learning model that analyzes financial transactions to identify and prevent fraudulent activities.",
            technologies: [
                "Python",
                "TensorFlow",
                "Scikit-learn",
                "Apache Spark"
            ],
            projectStatus: "Completed"
        });
        expect(res.header['content-type']).toEqual('application/json; charset=utf-8');
        expect(res.statusCode).toEqual(201);
    });

    test('Responds to post /teams', async () => {
        const res = await request.post('/teams').send({
            teamName: "Jest Test",
            teamGoals: "Complete the CSE341 final by December 14th.",
            teamTasks: "HTTP PUT, MongoDB setup."
        });
        expect(res.header['content-type']).toEqual('application/json; charset=utf-8');
        expect(res.statusCode).toEqual(201);
    });
});