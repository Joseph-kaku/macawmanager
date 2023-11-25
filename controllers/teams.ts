// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.1                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Controller for teams.                                                          |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |                                                 |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import { Request, Response } from 'express';
import db from '../db';
import { ObjectId } from 'mongodb';

const newTeams = db.teams;

export const createTeam = (req: Request, res: Response): void => {

  try {
    const { teamName } = req.body;

    const teams = new newTeams(req.body);

    teams.save()
      .then((data: object) => {
        console.log("Data saved: ", data);
        res.status(201).send(data);
      })
      .catch((err: Error) => {
        console.error("Error saving: ", err);
        res.status(500).send({
          message: err.message || 'Error Creating Team.'
        });
      });
  } catch (err) {
    console.error("Error: ", err);
    res.status(500).json(err);
  }
};


export const getAll = (req: Request, res: Response): void => {
 
  try {
    newTeams.find({})
      .then((data: object) => {
        res.status(200).send(data);
      })
      .catch((err: { message: object }) => {
        res.status(500).send({
          message: err.message || 'Error Finding Team.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getTeam= (req: Request, res: Response): void => {
  try {
    const teamID = new ObjectId(req.params.id);
    
    newTeams.findById( req.params.id )
    .then((data: object) => {
        res.status(200).send(data);
        })
        .catch((err: { message: object }) => {
          res.status(500).send({
            message: err.message || 'Some error occurred while retrieving the completed project.'
          });
        });
    } catch (err) {
      res.status(500).json(err);
    }
  };

export const deleteTeam = async (req: Request, res: Response): Promise<void> => {
  try {
    const teamId = req.params.id;
    if (!teamId) {
      res.status(400).json({ message: 'Invalid Team Name.' });
      return;
    }
    const result = await newTeams.findById( req.params.id ).deleteOne().exec();
    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'No Team Found.' });
      return;
    }
    res.status(200).send();
  } catch (err: any) {
    res.status(500).json({ message: err.message || 'Error Deleting Team.' });
  }
};

export default {
    createTeam,
    getAll,
    getTeam,
    deleteTeam
    };