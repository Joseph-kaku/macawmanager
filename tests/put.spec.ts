import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';
const app = require('../server')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app);
dotenv.config();

jest.setTimeout(60000);

describe('PUT Handlers', () => {
    test('Responds to put /completedprojects', async () => {
        
        const res = await request.put('/completedprojects/656ad96360618d1b040a9fa7').send({
            projectName: "Updated Jest Test",
            projectDescription: "Updated Jest Test.",
            technologies: [
                "Power BI",
                "Tableau",
                "SQL Server",
                "Data Warehouse"
            ],
            completionDate: "2023-11-10",
            projectManager: "Test Test"
        });
        // expect(res.header['content-type']).toEqual('application/json; charset=utf-8');
        expect(res.statusCode).toEqual(204);
    });

    test('Responds to put /contacts', async () => {
        const res = await request.put('/contacts/656adf592fbb6832833fcf8a').send({
            name: "Updated Jest Test",
            title: "Updated Jest Test",
            email: "jane.doe@acmetech.com",
            phone: "+1-646-555-1212",
            department: "Management",
            projects: [
                "Machine Learning Model for Fraud Detection",
                "Data Analytics Dashboard for Business Intelligence"
            ]
        });
        // expect(res.header['content-type']).toEqual('application/json; charset=utf-8');
        expect(res.statusCode).toEqual(404);
    });

    test('Responds to put /projects', async () => {
        const res = await request.put('/projects/656ad96960618d1b040a9fac').send({
            projectName: "Updated Jest Test",
            company: "Updated Jest Test",
            projectDescription: "Develop a machine learning model that analyzes financial transactions to identify and prevent fraudulent activities.",
            technologies: [
                "Python",
                "TensorFlow",
                "Scikit-learn",
                "Apache Spark"
            ],
            projectStatus: "Completed"
        });
        // expect(res.header['content-type']).toEqual('application/json; charset=utf-8');
        expect(res.statusCode).toEqual(204);
    });

    test('Responds to put /teams', async () => {
        const res = await request.put('/teams/656adf592fbb6832833fcf8e').send({
            teamName: "Updated Jest Test",
            teamGoals: "Updated Complete the CSE341 final by December 14th.",
            teamTasks: "Updated HTTP PUT, MongoDB setup."
        });
        // expect(res.header['content-type']).toEqual('application/json; charset=utf-8');
        expect(res.statusCode).toEqual(404);
    });
});