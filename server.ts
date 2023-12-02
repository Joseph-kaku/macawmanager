// +--------------------------------------------------------------------------------+
// | Repository: https://github.com/Joseph-kaku/macawmanager                        |                                                                       
// | Created for BYU-I Web Services Course.                                         |
// +--------------------------------------------------------------------------------+
// | This module was programmed by Nicole Fluckiger, Jospeh Kaku, and Ryker Swensen |
// +--------------------------------------------------------------------------------|
// | File Version 1.1                                                               |
// +--------------------------------------------------------------------------------+
// | CODE DESCRIPTION                                                               |
// | Main typescript file.                                                          |
// |                                                                                |
// +--------------------------------------------------------------------------------+
// | NOTES                                                                          |
// | Please be sure to update files with comments so we can help eachother with this|
// | team assignment. Please comment any issues, bugs, or successes to help each of |
// | of us learn. Thanks, - Ryker.                                                  |
// |                                                                                |
// \-------------------------------------------------------------------------------*/

// import express, { Request, Response, NextFunction } from 'express';
// import bodyParser from 'body-parser';
// import mainRouter from './routes';

// // Port 8080
// const port: string | number = process.env.PORT || 8080;
// const app = express();
// const { auth, requiresAuth } = require('express-openid-connect');
// import dotenv from 'dotenv';

// dotenv.config();

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:8080',
//   clientID: 'tsS7rm0pRY2SejsKP3aNSmEW7zEExYw8',
//   issuerBaseURL: 'https://dev-2of2wzj2x83rpvs7.us.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req: Request, res: Response) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

// app
//   .use(bodyParser.json())
//   .use((req: Request, res: Response, next: NextFunction) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })
//   .use('/', mainRouter);  
// import db from './db';
// db.mongoose.connect(db.url, {
// })
// .then(() => {
//   app.listen(port, () => {
//     console.log(`DB Connected and server running on ${port}.`);
//   });
// })
// .catch((err: Error) => { 
//   console.log('Cannot connect to the database!', err);
//   process.exit();
// });


// CODE BELOW SHOULD WORK

import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import baseRouter from './routes';
import {auth, requiresAuth} from 'express-openid-connect';
import dotenv from 'dotenv';
 
dotenv.config();
 
// Port 8080
const port: string | number = process.env.PORT || 8080;
const app = express();
 
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:8080',
  clientID: 'tsS7rm0pRY2SejsKP3aNSmEW7zEExYw8',
  issuerBaseURL: 'https://dev-2of2wzj2x83rpvs7.us.auth0.com'
};
 
app
  .use(auth(config))
  .use(bodyParser.json())
  .use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', baseRouter);  
import db from './db';
db.mongoose.connect(db.url, {
})
.then(() => {
  app.listen(port, () => {
    console.log(`DB Connected and server running on ${port}.`);
  });
})
.catch((err: Error) => { 
  console.log('Cannot connect to the database!', err);
  process.exit();
});
 
app.get('/', (req: Request, res: Response) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
 
app.get('/contacts', requiresAuth(), (req: Request, res: Response) => {
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = app