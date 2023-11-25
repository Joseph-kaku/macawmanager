// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | File for modeling our MongoDB via Mongoose.                                    |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import dbConfig from '../config/db.config';
import mongoose from 'mongoose';
import completedProjectsModel from './completedProjects';
import contactsModel from './contacts';
import projectsModel from './projects';
import teamsModel from './teams';

const db: {
  mongoose: typeof mongoose;
  url: string;
  completedProjects: any;
  contacts: any;
  projects: any;
  teams:any;
} = {
  mongoose,
  url: dbConfig.url,
  completedProjects: completedProjectsModel,
  contacts: contactsModel, 
  projects: projectsModel,  
  teams: teamsModel,
};

export default db;