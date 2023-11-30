// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | File for teams mongoose schema.                                                |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |                                                 |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import mongoose, { Document, Schema } from 'mongoose';


interface incompleteTeams extends Document {
  teamName: { 
    type: string,
    required: [true, 'Team Name Required.']},
  teamGoals: string;
  teamTasks: string;
}

// Completed teams = teamsSchema
const teamsSchema: Schema = new Schema({
    teamName: { type: String,
    required: [true, 'Team Name Required.'] },
    teamGoals: { type: String },
    teamTasks: { type: String },
});

export default mongoose.model<incompleteTeams>('teams', teamsSchema);