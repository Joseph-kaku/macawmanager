// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.1                                                               |
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
import { ObjectId } from 'mongodb';
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
        const newProjects = {
            projectName: req.body.projectName,
            company: req.body.company,
            projectDescription: req.body.projectDescription,
            technologies: req.body.technologies,
            projectStatus: req.body.projectStatus
        };
        
        projects.create(newProjects).then((data: object) => {
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

export const getOneProject = (req: Request, res: Response): void => {
    try{
        const projectId = new ObjectId(req.params.id)
        projects.findById( req.params.id )
        .then((data: object) => {
            res.status(200).send(data);
            })
            .catch((err: { message: object }) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving the single project.'
            });
            });
        } catch (err) {
        res.status(500).json(err);
        }
    };

export const updateProject = async (req: Request, res: Response) => {

    try {
        const projectId = req.params.id;

        if (!projectId) {
            res.status(400).send({ message: 'Invalid Project ID' });
            return;
        }

        const findProject = await projects.findById(req.params.id)

        if(!findProject) {
            res.status(404).send({ message: 'Project not found' });
            return;
        }

        findProject.projectName = req.body.projectName;
        findProject.company = req.body.company;
        findProject.projectDescription = req.body.projectDescription;
        findProject.technologies = req.body.technologies;
        findProject.projectStatus = req.body.projectStatus;

        await findProject.save();
        res.status(204).send();
    } catch (err: any) {
        res.status(500).json({ message: err.message || 'Some error occurred while processing your request' });
    }
};

export const deleteProject = async (req:Request, res:Response): Promise<void> => {
    try {
        const projectId = req.params.id;
        if (!projectId) {
            res.status(400).json({ message: 'Invalid Project ID Supplied' });
            return;
    }
    const result = await projects.findById( req.params.id ).deleteOne().exec();
    if (result.deletedCount === 0) {
        res.status(404).json({ message: 'Project not found' });
        return;
    }
    res.status(200).send();
} catch (err: any) {
    res.status(500).json({ message: err.message || 'Some error occurred while deleting the project.' })
}
};



export default {
    getAll,
    createNew,
    getOneProject,
    updateProject,
    deleteProject
};