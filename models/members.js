"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var database_1 = require("../database");
var sequelize_1 = require("sequelize");
var Member = database_1.sequelize.define('Member', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING(20)
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
        unique: true
    }
}, {
    tableName: 'members',
    timestamps: false,
    indexes: [
        {
            name: 'indx_email',
            fields: ['email'],
            concurrently: true
        }
    ]
});
exports.Member = Member;
