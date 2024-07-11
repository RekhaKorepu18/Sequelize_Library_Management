import {sequelize} from '../database';
import { DataTypes } from 'sequelize';
import {Book} from './books';
import {Member} from './members';

const Loan = sequelize.define('Loan',{
    id : {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey : true
    },
    book_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : Book,
            key : 'id'
        }
    },
    member_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : Member,
            key : 'id'
        }
    },
    loan_date : {
        type : DataTypes.DATE,
        allowNull : false
    },
    due_date : {
        type : DataTypes.DATE,
        allowNull : false
    }
}, {
    tableName: 'loans',
    timestamps: false,
    indexes : [
        {
            name : 'indx_due_date',
            fields : ['due_date']
        },{
            name : 'bookid_memberid_idx',
            fields: ['book_id', 'member_id'],
            concurrently: true
        }
    ]
}); 

 export{Loan};
