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
// | Router for teams.                                                              |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |                                                 |
// |                                                                                |
// \-------------------------------------------------------------------------------*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teams_1 = __importDefault(require("../controllers/teams"));
const teamsRouter = express_1.default.Router();
teamsRouter.get('/', teams_1.default.getAll);
teamsRouter.get('/:teams', teams_1.default.getTeam);
teamsRouter.post('/', teams_1.default.create);
teamsRouter.delete('/:teams', teams_1.default.deleteTeam);
exports.default = teamsRouter;
