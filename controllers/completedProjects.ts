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

import { Request, Response } from 'express';
import db from '../db';
import { ObjectId } from 'mongodb';
const CompletedProjects = db.completedProjects;

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


const getCompletedProject = async (req: Request, res: Response) => {
  // #swagger.summary = "This endpoint returns the details of a single completed project."
  /*  #swagger.parameters['completedProjectId'] = {
                in: 'path',
                description: 'A MongoDB ObjectId',
                required: true
        } */
  try {
    let id: ObjectId;
    try {
      id = new ObjectId(req.params.projectId);
    } catch (err) {
      /* #swagger.responses[400] = {
            description: 'An invalid MongoDB ObjectId was provided.'
    } */
      res.status(400).json('Please provide a valid completed project id.');
      return;
    }
    const completedProjects = await CompletedProjects.findById(id).exec();
    res.status(200).json(completedProjects);
    /* #swagger.responses[200] = {
            description: 'Returns a completed project object.',
            schema: { $ref: '#/definitions/CompletedProject' },
    } */
    res.status(200).json(completedProjects);
  } catch (err) {
    /* #swagger.responses[500] = {
            description: 'An error occured.'
    } */
    res.status(500).json(err);
  }
};

// export const getCompletedProject = (req: Request, res: Response): void => {
//   try {
//     const completedProjectId = new ObjectId(req.params.id);
//      CompletedProjects.findById({ completedProjectId })
//        .then((data: object) => {
//         res.status(200).send(data);
//         })
//         .catch((err: { message: object }) => {
//           res.status(500).send({
//             message: err.message || 'Some error occurred while retrieving the completed project.'
//           });
//         });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   };
  

export const updateCompletedProject = async (req: Request, res: Response) => {
  
  try {
    const projectName = req.params.projectName;

    if (!projectName) {
      res.status(400).send({ message: 'Invalid Project Name Supplied' });
      return;
    }

    const completedProjects = await CompletedProjects.findOne({ projectName }).exec();

    if (!completedProjects) {
      res.status(404).send({ message: 'Project not found' });
      return;
    }

    completedProjects.projectName = projectName;
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
    const projectName = req.params.projectName;
    if (!projectName) {
      res.status(400).json({ message: 'Invalid Project Name Supplied' });
      return;
    }
    const result = await CompletedProjects.deleteOne({ projectName }).exec();
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    res.status(200).send();
  } catch (err: any) {
    res.status(500).json({ message: err.message || 'Some error occurred while deleting the project.' });
  }
};

export default {
    create,
    getAll,
    getCompletedProject,
    updateCompletedProject,
    deleteCompletedProjects
    };