import { sequelize } from '../database';
import { DataTypes } from 'sequelize';
import {Author } from './authors';
const Book = sequelize.define('Book', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title : {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    author_id : {
        type : DataTypes.INTEGER,
        allowNull: false,
        references: {
              model : Author,
              key: 'id'
        }
    },
    genre : {
        type : DataTypes.STRING(100),
    },
    isbn : {
        type : DataTypes.STRING(13),
        unique: true
    },
    publication_year : {
        type : DataTypes.INTEGER
    }
}, {
    tableName : 'books',
    timestamps: false

});



export{Book}
