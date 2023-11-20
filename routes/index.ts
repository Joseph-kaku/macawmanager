// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
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
import projectsRouter from './projects';
import projects from './projects';
// import teamsRouter from './teams';

const baseRouter = express.Router();

baseRouter.use('/', s);
baseRouter.use('/completedprojects',completedProjectsRouter ); 
baseRouter.use('/contactsRouter', contactsRouter);
baseRouter.use('/projects', projects);
// baseRouter.use('teamsRouter', teamsRouter)

export default baseRouter;