// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | File for contacts mongoose schema.                                             |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import mongoose, { Document, Schema } from 'mongoose';


interface Icontacts extends Document {
  name: { 
    type: string,
    required: [true, 'Project name is required.']},
  title: string;
  email: string;
  phone: string;
  department: string;
  projects: [];
}

const contactsSchema: Schema = new Schema({
  name: { type: String,
    required: [true, 'Project name is required.'] },
  title: { type: String },
  email: { type: String },
  phone: { type: String },
  department: { type: String },
  projects: { type: Array },
});

export default mongoose.model<Icontacts>('contacts', contactsSchema);