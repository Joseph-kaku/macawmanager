// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Router for teams.                                                              |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |                                                 |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import express from 'express';
import teamsController from '../controllers/teams';

const teamsRouter = express.Router();
    teamsRouter.get('/', teamsController.getAll);
    teamsRouter.get('/:teams', teamsController.getTeam);
    teamsRouter.post('/', teamsController.createTeam);
    teamsRouter.delete('/:teams', teamsController.deleteTeam);

export default teamsRouter;