"use strict";
// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Controller for completed projects.                                             |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompletedProjects = exports.updateCompletedProject = exports.getCompletedProject = exports.getAll = exports.create = void 0;
const db_1 = __importDefault(require("../db"));
const ObjectId = require('mongodb').ObjectId;
const CompletedProjects = db_1.default.completedProjects;
const create = (req, res) => {
    try {
        const { projectName } = req.body;
        const completedProjects = new CompletedProjects(req.body);
        completedProjects.save()
            .then((data) => {
            console.log("Data saved: ", data);
            res.status(201).send(data);
        })
            .catch((err) => {
            console.error("Error in saving: ", err);
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the completed project.'
            });
        });
    }
    catch (err) {
        console.error("General Error: ", err);
        res.status(500).json(err);
    }
};
exports.create = create;
const getAll = (req, res) => {
    try {
        CompletedProjects.find({})
            .then((data) => {
            res.status(200).send(data);
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving the completed projects.'
            });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getAll = getAll;
const getCompletedProject = (req, res) => {
    try {
        const completedProjectId = new ObjectId(req.params.completedProjectId);
        CompletedProjects.find({ completedProjectId })
            .then((data) => {
            if (Object.keys(completedProjectId).length == 0) {
                console.log("no project found");
                res.status(404).send({ message: 'Project not found' });
                return;
            }
            else {
                console.log("Project found");
                res.status(200).send(data);
                console.log(data);
                return;
            }
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving the project.'
            });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getCompletedProject = getCompletedProject;
const updateCompletedProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectName = req.params.projectName;
        if (!projectName) {
            res.status(400).send({ message: 'Invalid Project Name Supplied' });
            return;
        }
        const completedProjects = yield CompletedProjects.findOne({ projectName }).exec();
        if (!completedProjects) {
            res.status(404).send({ message: 'Project not found' });
            return;
        }
        completedProjects.projectName = projectName;
        completedProjects.projectDescription = req.body.projectDescription;
        completedProjects.technologies = req.body.technologies;
        completedProjects.completionDate = req.body.completionDate;
        completedProjects.projectManager = req.body.projectManager;
        yield completedProjects.save();
        res.status(204).send();
    }
    catch (err) {
        res.status(500).json({ message: err.message || 'Some error occurred while processing your request.' });
    }
});
exports.updateCompletedProject = updateCompletedProject;
const deleteCompletedProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectName = req.params.projectName;
        if (!projectName) {
            res.status(400).json({ message: 'Invalid Project Name Supplied' });
            return;
        }
        const result = yield CompletedProjects.deleteOne({ projectName }).exec();
        if (result.deletedCount === 0) {
            res.status(404).json({ message: 'Project not found' });
            return;
        }
        res.status(200).send();
    }
    catch (err) {
        res.status(500).json({ message: err.message || 'Some error occurred while deleting the project.' });
    }
});
exports.deleteCompletedProjects = deleteCompletedProjects;
exports.default = {
    create: exports.create,
    getAll: exports.getAll,
    getCompletedProject: exports.getCompletedProject,
    updateCompletedProject: exports.updateCompletedProject,
    deleteCompletedProjects: exports.deleteCompletedProjects
};
