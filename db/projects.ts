// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | File for projects mongoose schema.                                             |
// | JK                                                                               |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import mongoose, { Document, Schema } from 'mongoose';


interface Iprojects extends Document {
    projectName: {
        type: string,
        required: [true, 'Project name is required.']
    },
    company: string;
    projectionDescription: string;
    technologies: [];
    projectStatus: string;
}

const projectsSchema: Schema = new Schema({
    projectName: {
        type: String,
        required: [true, 'Project name is required.']},
        company: {type: String},
        projectionDescription: {type: String},
        technologies: {type: Array},
        projectStatus: {type: String},
});

export default mongoose.model<Iprojects>('projects', projectsSchema);