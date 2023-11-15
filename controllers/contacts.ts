// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Controller for contacts.                                                       |
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
const Contacts = db.contacts;

export const create = (req: Request, res: Response): void => {

  try {
    const { name } = req.body;

    const contacts = new Contacts(req.body);

    contacts.save()
      .then((data: object) => {
        console.log("Data saved: ", data);
        res.status(201).send(data);
      })
      .catch((err: Error) => {
        console.error("Error in saving: ", err);
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the contact.'
        });
      });
  } catch (err) {
    console.error("General Error: ", err);
    res.status(500).json(err);
  }
};


export const getAll = (req: Request, res: Response): void => {
 
  try {
    Contacts.find({})
      .then((data: object) => {
        res.status(200).send(data);
      })
      .catch((err: { message: object }) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving the contacts.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getContact = (req: Request, res: Response): void => {
  try {
    const name = req.params.name;
    
     Contacts.find({ name })
       .then((data: object) => {
        
        if(Object.keys(name).length==0){
          console.log("no contact found");
          res.status(404).send({ message: 'Contact not found' });
          return
        }else{
          console.log("Contact found");
          res.status(200).send(data); console.log(data);
          return
    }
  })
  .catch((err: { message: object }) => {
         res.status(500).send({
           message: err.message || 'Some error occurred while retrieving the contact.'
         });
       });
   } catch (err) {
     res.status(500).json(err);
   }
 };


export default {
    create,
    getAll,
    getContact,
    };