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
// | File for the base/main router.                                                 |
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
const swagger_1 = __importDefault(require("./swagger"));
const completedProjects_1 = __importDefault(require("./completedProjects"));
const contacts_1 = __importDefault(require("./contacts"));
const teams_1 = __importDefault(require("./teams"));
const baseRouter = express_1.default.Router();
baseRouter.use('/', swagger_1.default);
baseRouter.use('/completedprojects', completedProjects_1.default);
baseRouter.use('/contactsRouter', contacts_1.default);
baseRouter.use('teamsRouter', teams_1.default);
exports.default = baseRouter;
