// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.2                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Routes for contacts.                                                           |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import express from 'express';
import contactsController from '../controllers/contacts';
import { Request, Response } from 'express';

const contactsRouter = express.Router();
    contactsRouter.get('/', (req: Request, res: Response) => {

/*
#swagger.tags = ['Contacts']
*/        

        contactsController.getAll(req, res);
    });

    contactsRouter.get('/:id', (req: Request, res: Response) => {

/*
#swagger.tags = ['Contacts']
*/
    
    contactsController.getContact(req, res);
});

    contactsRouter.post('/', (req: Request, res: Response) => {

/*
#swagger.tags = ['Contacts']
*/ 
    contactsController.create(req, res);
});

export default contactsRouter;