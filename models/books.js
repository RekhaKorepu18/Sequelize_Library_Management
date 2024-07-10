"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var database_1 = require("../database");
var sequelize_1 = require("sequelize");
var authors_1 = require("./authors");
var Book = database_1.sequelize.define('Book', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    author_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: authors_1.Author,
            key: 'id'
        }
    },
    genre: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING(13),
        unique: true
    },
    publication_year: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: 'books',
    timestamps: false
});
exports.Book = Book;
