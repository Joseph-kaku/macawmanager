// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Router for the projects.                                                       |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/


import express from 'express';
import projectsController from '../controllers/projects';
import { Request, Response } from 'express';


const projectsControllerRouter = express.Router();
    projectsControllerRouter.get('/', (req: Request, res: Response) => {
/*
#swagger.tags = ['Projects']
*/
projectsController.getAll(req, res);
});

    projectsControllerRouter.get('/:projects', (req: Request, res: Response) => {
/*
#swagger.tags = ['Projects']
*/
projectsController.getOneProject(req, res);
});

    projectsControllerRouter.post('/', (req: Request, res: Response) => {
/*
#swagger.tags = ['Projects']
*/
        projectsController.createNew(req, res);
    });

    projectsControllerRouter.put('/:projects', (req:Request, res:Response) => {
/*
#swagger.tags = ['Projects']
*/
projectsController.updateProject(req, res);
    } );
    projectsControllerRouter.delete('/:projects', (req:Request, res:Response) => {
/*
#swagger.tags = ['Projects']
*/
projectsController.deleteProject(req, res);
    });

export default projectsControllerRouter;