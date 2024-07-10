"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
var database_1 = require("../database");
var sequelize_1 = require("sequelize");
var books_1 = require("./books");
var members_1 = require("./members");
var Reservation = database_1.sequelize.define('Reservation', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: books_1.Book,
            key: 'id'
        }
    },
    member_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: members_1.Member,
            key: 'id'
        }
    },
    reservation_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'reservations',
    timestamps: false
});
exports.Reservation = Reservation;
