"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
// Port 8080
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
app
    .use(body_parser_1.default.json())
    .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
    .use('/', routes_1.default);
const db_1 = __importDefault(require("./db"));
db_1.default.mongoose.connect(db_1.default.url, {})
    .then(() => {
    app.listen(port, () => {
        console.log(`DB Connected and server running on ${port}.`);
    });
})
    .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
});
