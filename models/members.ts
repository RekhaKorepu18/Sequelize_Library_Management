import {sequelize} from '../database';
import { DataTypes } from 'sequelize';


const Member = sequelize.define('Member', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    address : {
        type : DataTypes.STRING(255),
    },
    phone_number : {
        type : DataTypes.STRING(20)
    },
    email : {
        type: DataTypes.STRING(255),
        unique : true
    }
}, {
   tableName: 'members',
   timestamps: false
});


 export{Member};

