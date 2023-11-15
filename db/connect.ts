// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.0                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | File for intializing and connecting to mongodb via the MONGODB_URI in our .env |
// | file.                                                                          |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';

dotenv.config();

let _db: Db | undefined;

const initDb = (callback: (error: Error | null, db?: Db) => void) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  
  MongoClient.connect(process.env.MONGODB_URI as string)
    .then((client: MongoClient) => {
      
      _db = client.db();
      callback(null, _db);
    })
    .catch((err: Error) => {
      
      callback(err);
    });
};

const getDb = (): Db | undefined => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

export { initDb, getDb };