// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Controller for teams.                                                          |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |                                                 |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

// import { Request, Response } from 'express';
// import db from '../db';
// const newTeams = db.teams;

// export const create = (req: Request, res: Response): void => {

//   try {
//     const { teamName } = req.body;

//     const teams = new newTeams(req.body);

//     teams.save()
//       .then((data: object) => {
//         console.log("Data saved: ", data);
//         res.status(201).send(data);
//       })
//       .catch((err: Error) => {
//         console.error("Error saving: ", err);
//         res.status(500).send({
//           message: err.message || 'Error Creating Team.'
//         });
//       });
//   } catch (err) {
//     console.error("Error: ", err);
//     res.status(500).json(err);
//   }
// };


// export const getAll = (req: Request, res: Response): void => {
 
//   try {
//     newTeams.find({})
//       .then((data: object) => {
//         res.status(200).send(data);
//       })
//       .catch((err: { message: object }) => {
//         res.status(500).send({
//           message: err.message || 'Error Finding Team.'
//         });
//       });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// export const getTeam= (req: Request, res: Response): void => {
//   try {
//     const teamName = req.params.teamName;
    
//     newTeams.find({ teamName })
//        .then((data: object) => {
        
//         if(Object.keys(teamName).length==0){
//           console.log("No Team Found.");
//           res.status(404).send({ message: 'No Team Found.' });
//           return
//         }else{
//           console.log("Team Succesfully Found.");
//           res.status(200).send(data); console.log(data);
//           return
//     }
//   })
//   .catch((err: { message: object }) => {
//          res.status(500).send({
//            message: err.message || 'Error Finding Team.'
//          });
//        });
//    } catch (err) {
//      res.status(500).json(err);
//    }
//  };

// // export const updateTeam = async (req: Request, res: Response) => {
  
// //   try {
// //     const teamName = req.params.teamName;

// //     if (!teamName) {
// //       res.status(400).send({ message: 'Invalid Team Name.' });
// //       return;
// //     }

// //     const teams = await newTeams.findOne({ teamName }).exec();

// //     if (!teams) {
// //       res.status(404).send({ message: 'No Team Found.' });
// //       return;
// //     }

// //     teams.teamName = teamName;
// //     teams.teamGoal = req.body.teamGoal;
// //     teams.teamTasks = req.body.teamTasks;

// //     await teams.save();
// //     res.status(204).send();
  
// //   } catch (err: any) {
// //     res.status(500).json({ message: err.message || 'Error: could not complete team request.' });
// //   }
// // };

// export const deleteTeam = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const teamName = req.params.teamName;
//     if (!teamName) {
//       res.status(400).json({ message: 'Invalid Team Name.' });
//       return;
//     }
//     const result = await newTeams.deleteOne({ teamName }).exec();
//     if (result.deletedCount === 0) {
//       res.status(404).json({ message: 'No Team Found.' });
//       return;
//     }
//     res.status(200).send();
//   } catch (err: any) {
//     res.status(500).json({ message: err.message || 'Error Deleting Team.' });
//   }
// };

// export default {
//     create,
//     getAll,
//     getTeam,
//     // updateTeam,
//     deleteTeam
//     };