import {sequelize} from '../database';
import { DataTypes } from 'sequelize';
const Author = sequelize.define('Author', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    birth_year : {
        type : DataTypes.INTEGER,
    },
    nationality : {
        type : DataTypes.STRING(100)
    }
},
  { 
    tableName: 'authors',
    timestamps : false,

    indexes : [
        {
        name : 'author_name_idx',
        fields: ['name'],
        unique : true,
        concurrently : true
        }
    ]
});

export{Author};
