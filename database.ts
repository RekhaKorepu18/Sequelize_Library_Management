import { Sequelize } from 'sequelize';
//import { path } from 'path';

require('dotenv').config({
    override: true,
    path: 'development.env'
});
var database : string='';
if(process.env.DATABASE!=undefined)
     database = process.env.DATABASE;
     
var user : string='';
if(process.env.USER!=undefined)
    user = process.env.USER;

var password : string='';
if(process.env.PASSWORD!=undefined)
   password = process.env.PASSWORD;

const sequelize = new Sequelize(database, user, password, {
    host: process.env.HOST,
    dialect: 'postgres',
});

export{sequelize};




  