import {sequelize} from '../database';
import { DataTypes } from 'sequelize';
import {Book} from './books';
import {Member} from './members';


const Reservation = sequelize.define('Reservation',{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },
    book_id : {
         type : DataTypes.INTEGER,
         references : {
            model : Book,
            key : 'id'
        }
    },
    member_id : {
        type : DataTypes.INTEGER,
        references : {
            model : Member,
            key : 'id'
        }
    },
    reservation_date : {
        type : DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName : 'reservations',
    timestamps: false,
    indexes : [
        {
            name : 'indx_reservation_date',
            fields : ['reservation_date']
        },{
            name : 'bookId_idx',
            fields: ['book_id'],
            concurrently: true
        }
    ]
});

 export{Reservation};