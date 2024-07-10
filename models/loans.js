"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
var database_1 = require("../database");
var sequelize_1 = require("sequelize");
var books_1 = require("./books");
var members_1 = require("./members");
var Loan = database_1.sequelize.define('Loan', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: books_1.Book,
            key: 'id'
        }
    },
    member_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: members_1.Member,
            key: 'id'
        }
    },
    loan_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    due_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'loans',
    timestamps: false
});
exports.Loan = Loan;
// Associations.
/*Member.hasMany(Loan);
Loan.belongsTo(Member);

Loan.hasOne(Book);
Book.hasMany(Loan);*/
Loan.sync({ force: true }).then(function () {
    console.log('loans table created');
}).catch(function (err) {
    console.error('Error while creating loans table', err);
});
