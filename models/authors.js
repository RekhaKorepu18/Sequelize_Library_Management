"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
var database_1 = require("../database");
var sequelize_1 = require("sequelize");
var Author = database_1.sequelize.define('Author', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    birth_year: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING(100)
    }
}, {
    tableName: 'authors',
    timestamps: false
});
exports.Author = Author;
