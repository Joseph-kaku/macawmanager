// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.2                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Routes for completed projects.                                                 |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import express from 'express';
import completedProjectsController from '../controllers/completedProjects';
import { Request, Response } from 'express';

const completedProjectsRouter = express.Router();
    completedProjectsRouter.get('/', (req: Request, res: Response) => {

/*
#swagger.tags = ['Completed Projects']
*/
    
    completedProjectsController.getAll(req, res);
});
    completedProjectsRouter.get('/:id', (req: Request, res: Response) => {

/*
#swagger.tags = ['Completed Projects']
*/
    
    completedProjectsController.getCompletedProject(req, res);
});
    completedProjectsRouter.post('/', (req: Request, res: Response) => {

/*
#swagger.tags = ['Completed Projects']
*/
    
    completedProjectsController.create(req, res);
});
    completedProjectsRouter.put('/:id', (req: Request, res: Response) => {

/*
#swagger.tags = ['Completed Projects']
*/
    
    completedProjectsController.updateCompletedProject(req, res);
});
    completedProjectsRouter.delete('/:id', (req: Request, res: Response) => {

/*
#swagger.tags = ['Completed Projects']
*/
    
    completedProjectsController.deleteCompletedProjects(req, res);
});

export default completedProjectsRouter;