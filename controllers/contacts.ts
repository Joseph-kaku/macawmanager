// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.2                                                               |
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
import { ObjectId } from 'mongodb';
const Contacts = db.contacts;
import * as usernameValidator from '../db/passValidator'

export const create = (req: Request, res: Response): void => {

  try {
    const { name } = req.body;

    // Error checking for empty fields
    if (!name) {
      res.status(400).send({message: 'Name Cannot Be Empty'});
      return;
    }

    const usernameValid = usernameValidator.passwordPass(name);

    if (usernameValid.error) {
      res.status(400).send({message: usernameValid.error});
      return;
    }
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
    const contacts = new ObjectId(req.params.id);
     Contacts.findById( req.params.id )
     .then((data: object) => {
      res.status(200).send(data);
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