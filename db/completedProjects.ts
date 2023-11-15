// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | File for completed projects mongoose schema.                                   |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import mongoose, { Document, Schema } from 'mongoose';


interface IcompletedProjects extends Document {
  projectName: { 
    type: string,
    required: [true, 'Project name is required.']},
  projectDescription: string;
  technologies: [];
  completionDate: [Date];
  projectManager: string;
}

const completedProjectsSchema: Schema = new Schema({
  projectName: { type: String,
    required: [true, 'Project name is required.'] },
  projectDescription: { type: String },
  technologies: { type: Array },
  completionDate: { type: Date },
  projectManager: { type: String },
});

export default mongoose.model<IcompletedProjects>('completedProjects', completedProjectsSchema);