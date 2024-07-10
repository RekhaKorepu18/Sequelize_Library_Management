"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
//import { path } from 'path';
require('dotenv').config({
    override: true,
    path: 'development.env'
});
var database = '';
if (process.env.DATABASE != undefined)
    database = process.env.DATABASE;
var user = '';
if (process.env.USER != undefined)
    user = process.env.USER;
var password = '';
if (process.env.PASSWORD != undefined)
    password = process.env.PASSWORD;
var sequelize = new sequelize_1.Sequelize(database, user, password, {
    host: process.env.HOST,
    dialect: 'postgres',
});
exports.sequelize = sequelize;
