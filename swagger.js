"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const doc = {
    info: {
        title: 'API',
        description: ''
    },
    //host: 'localhost:8080',
    //schemes: ['http']
    // host: 'put render here',
    // schemes: ['https']
};
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.ts'];
(0, swagger_autogen_1.default)(outputFile, endpointsFiles, doc);
