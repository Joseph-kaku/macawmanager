// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.1                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Router for teams.                                                              |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |                                                 |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import express from 'express';
import { Request, Response } from 'express';
import teamsController from '../controllers/teams';

const teamsRouter = express.Router();
    teamsRouter.get('/', (req: Request, res: Response) => {

/*
#swagger.tags = ['Teams']
*/
    
    teamsController.getAll(req, res);
});
    teamsRouter.get('/:id', (req: Request, res: Response) => {

/*
#swagger.tags = ['Teams']
*/
    
    teamsController.getTeam(req, res);
});
    teamsRouter.post('/', (req: Request, res: Response) => {

/*
#swagger.tags = ['Teams']
*/
    
    teamsController.createTeam(req, res);
});
    teamsRouter.delete('/:id', (req: Request, res: Response) => {

/*
#swagger.tags = ['Teams']
*/
    
    teamsController.deleteTeam(req, res);
});

export default teamsRouter;