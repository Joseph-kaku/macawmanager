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
// | Controller for contacts.                                                       |
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
exports.getContact = exports.getAll = exports.create = void 0;
const db_1 = __importDefault(require("../db"));
const Contacts = db_1.default.contacts;
const create = (req, res) => {
    try {
        const { name } = req.body;
        const contacts = new Contacts(req.body);
        contacts.save()
            .then((data) => {
            console.log("Data saved: ", data);
            res.status(201).send(data);
        })
            .catch((err) => {
            console.error("Error in saving: ", err);
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the contact.'
            });
        });
    }
    catch (err) {
        console.error("General Error: ", err);
        res.status(500).json(err);
    }
};
exports.create = create;
const getAll = (req, res) => {
    try {
        Contacts.find({})
            .then((data) => {
            res.status(200).send(data);
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving the contacts.'
            });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getAll = getAll;
const getContact = (req, res) => {
    try {
        const name = req.params.name;
        Contacts.find({ name })
            .then((data) => {
            if (Object.keys(name).length == 0) {
                console.log("no contact found");
                res.status(404).send({ message: 'Contact not found' });
                return;
            }
            else {
                console.log("Contact found");
                res.status(200).send(data);
                console.log(data);
                return;
            }
        })
            .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving the contact.'
            });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.getContact = getContact;
exports.default = {
    create: exports.create,
    getAll: exports.getAll,
    getContact: exports.getContact,
};
