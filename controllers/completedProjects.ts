// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.2                                                               |
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

import { Request, Response } from 'express';
import db from '../db';
import { ObjectId } from 'mongodb';
const CompletedProjects = db.completedProjects;

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const create = (req: Request, res: Response): void => {

  try {
    const { projectName } = req.body;

    const completedProjects = new CompletedProjects(req.body);

    completedProjects.save()
      .then((data: object) => {
        console.log("Data saved: ", data);
        res.status(201).send(data);
      })
      .catch((err: Error) => {
        console.error("Error in saving: ", err);
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the completed project.'
        });
      });
  } catch (err) {
    console.error("General Error: ", err);
    res.status(500).json(err);
  }
};


export const getAll = (req: Request, res: Response): void => {

  try {
    CompletedProjects.find({})
      .then((data: object) => {
        res.status(200).send(data);
      })
      .catch((err: { message: object }) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving the completed projects.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getCompletedProject = (req: Request, res: Response): void => {
  try {
    const completedProjectId = new ObjectId(req.params.id);
     CompletedProjects.findById( req.params.id )
       .then((data: object) => {
        res.status(200).send(data);
        })
        .catch((err: { message: object }) => {
          res.status(500).send({
            message: err.message || 'Some error occurred while retrieving the completed project.'
          });
        });
    } catch (err) {
      res.status(500).json(err);
    }
  };
  

export const updateCompletedProject = async (req: Request, res: Response) => {
  
  try {
    const completedProjectId = req.params.id;

    if (!completedProjectId) {
      res.status(400).send({ message: 'Invalid Project ID Supplied' });
      return;
    }

    const completedProjects = await CompletedProjects.findById( req.params.id )

    if (!completedProjects) {
      res.status(404).send({ message: 'Project not found' });
      return;
    }

    completedProjects.projectName = req.body.projectName;
    completedProjects.projectDescription = req.body.projectDescription;
    completedProjects.technologies = req.body.technologies;
    completedProjects.completionDate = req.body.completionDate;
    completedProjects.projectManager = req.body.projectManager;

    await completedProjects.save();
    res.status(204).send();
  
  } catch (err: any) {
    res.status(500).json({ message: err.message || 'Some error occurred while processing your request.' });
  }
};

export const deleteCompletedProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const completedProjectId = req.params.id;
    if (!completedProjectId) {
      res.status(400).json({ message: 'Invalid Completed Project ID Supplied' });
      return;
    }
    const result = await CompletedProjects.findById( req.params.id ).deleteOne().exec();
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Completed project not found' });
      return;
    }
    res.status(200).send();
  } catch (err: any) {
    res.status(500).json({ message: err.message || 'Some error occurred while deleting the completed project.' });
  }
    
};

export default {
    create,
    getAll,
    getCompletedProject,
    updateCompletedProject,
    deleteCompletedProjects
    };