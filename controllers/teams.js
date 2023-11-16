"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeam = exports.getTeam = exports.getAll = exports.create = void 0;
const db_1 = __importDefault(require("../db"));
const newTeams = db_1.default.teams;
const create = (req, res) => {
    try {
        const { teamName } = req.body;
        const teams = new newTeams(req.body);
        teams.save()
            .then((data) => {
            console.log("Data saved: ", data);
            res.status(201).send(data);
        })
            .catch((err) => {
            console.error("Error saving: ", err);
            res.status(500).send({
                message: err.message || 'Error Creating Team.'
            });
        });
    }
    catch (err) {
        console.error("Error: ", err);
        res.status(500).json(err);
    }
};
exports.create = create;
const getAll = (req, res) => {
    try {
        newTeams.find({})
            .then((data) => {
            res.status(200).send(data);
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || 'Error Finding Team.'
            });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getAll = getAll;
const getTeam = (req, res) => {
    try {
        const teamName = req.params.teamName;
        newTeams.find({ teamName })
            .then((data) => {
            if (Object.keys(teamName).length == 0) {
                console.log("No Team Found.");
                res.status(404).send({ message: 'No Team Found.' });
                return;
            }
            else {
                console.log("Team Succesfully Found.");
                res.status(200).send(data);
                console.log(data);
                return;
            }
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || 'Error Finding Team.'
            });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getTeam = getTeam;
// export const updateTeam = async (req: Request, res: Response) => {
//   try {
//     const teamName = req.params.teamName;
//     if (!teamName) {
//       res.status(400).send({ message: 'Invalid Team Name.' });
//       return;
//     }
//     const teams = await newTeams.findOne({ teamName }).exec();
//     if (!teams) {
//       res.status(404).send({ message: 'No Team Found.' });
//       return;
//     }
//     teams.teamName = teamName;
//     teams.teamGoal = req.body.teamGoal;
//     teams.teamTasks = req.body.teamTasks;
//     await teams.save();
//     res.status(204).send();
//   } catch (err: any) {
//     res.status(500).json({ message: err.message || 'Error: could not complete team request.' });
//   }
// };
const deleteTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teamName = req.params.teamName;
        if (!teamName) {
            res.status(400).json({ message: 'Invalid Team Name.' });
            return;
        }
        const result = yield newTeams.deleteOne({ teamName }).exec();
        if (result.deletedCount === 0) {
            res.status(404).json({ message: 'No Team Found.' });
            return;
        }
        res.status(200).send();
    }
    catch (err) {
        res.status(500).json({ message: err.message || 'Error Deleting Team.' });
    }
});
exports.deleteTeam = deleteTeam;
exports.default = {
    create: exports.create,
    getAll: exports.getAll,
    getTeam: exports.getTeam,
    // updateTeam,
    deleteTeam: exports.deleteTeam
};
