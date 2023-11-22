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

const completedProjectsRouter = express.Router();
    completedProjectsRouter.get('/', completedProjectsController.getAll);
    completedProjectsRouter.get('/:id', completedProjectsController.getCompletedProject);
    completedProjectsRouter.post('/', completedProjectsController.create);
    completedProjectsRouter.put('/:id', completedProjectsController.updateCompletedProject);
    completedProjectsRouter.delete('/:id', completedProjectsController.deleteCompletedProjects);

export default completedProjectsRouter;