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
// | Routes for completed projects.                                                 |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const completedProjects_1 = __importDefault(require("../controllers/completedProjects"));
const completedProjectsRouter = express_1.default.Router();
completedProjectsRouter.get('/', completedProjects_1.default.getAll);
completedProjectsRouter.get('/:completedprojects', completedProjects_1.default.getCompletedProject);
completedProjectsRouter.post('/', completedProjects_1.default.create);
completedProjectsRouter.put('/:completedprojects', completedProjects_1.default.updateCompletedProject);
completedProjectsRouter.delete('/:completedprojects', completedProjects_1.default.deleteCompletedProjects);
exports.default = completedProjectsRouter;
