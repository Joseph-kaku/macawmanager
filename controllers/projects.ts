// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Controller for projects.                                                       |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import { Request, Response } from  'express';
import db from '../db';
const ObjectId = require('mongodb').ObjectId;
const projects = db.projects;


export const getAll = (req: Request, res: Response): void => {
    try{
        projects.find({}).then((data: object) => {
            res.status(200).send(data);
        })
        .catch((err: { message: object }) => {
            res.status(500).send({
                message: err.message || 'An error occured while retrieving the projects'
            });
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

export const createNew = (req: Request, res: Response): void => {
    try {
        const { projectName } = req.body;

        const newProjects = new projects(req.body);

        newProjects.save().then((data: object) => {
            console.log("Data Saved: ", data);
            res.status(201).send(data);
        })
        .catch((err: Error) => {
            console.error("Error in saving: ", err);
            res.status(500).send({
                message: err.message || 'Some error occurred while creating a new project'
            });
        });
    } catch(err) {
        console.error("General Error: ", err);
        res.status(500).json(err);
    }
};




export default {
    getAll,
    createNew
};