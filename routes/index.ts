// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.3                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | File for the base/main router.                                                 |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import express from 'express';
import s from './swagger';
import completedProjectsRouter from './completedProjects';
import contactsRouter from './contacts';
import projects from './projects';
import teamsRouter from './teams';
import validate from '../db/validate';

const baseRouter = express.Router();

baseRouter.use('/', s);
baseRouter.use('/completedprojects', validate ,completedProjectsRouter ); 
baseRouter.use('/contacts', validate , contactsRouter);
baseRouter.use('/projects', validate , projects);
baseRouter.use('/teams', validate , teamsRouter)

export default baseRouter;