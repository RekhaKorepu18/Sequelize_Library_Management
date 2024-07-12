import { Book } from './models/books';
import { Author } from './models/authors';
import {Loan } from './models/loans';
import {Reservation} from './models/reservations';
import {Member} from './models/members';
import { sequelize } from './database';
const { Sequelize, Op } = require('sequelize');
const express=require('express');
const router = express.Router();
router.get('/insert_authorbook', async(req, res) =>{
    try{
        const result = await sequelize.transaction(async t => {
            const author: any = await Author.create({
                name : 'Rekha',
                birth_year : 2003,
                nationality : 'Indian'
            },{transaction : t},);
            //const authorr:any  = await Author.findAll({where : {name : 'Rekha'}});
            if(author && author.id){
                const book= await Book.create({
                    title: 'The goal and the destiny',
                    author_id: author.id,
                    genre: 'Fantasy',
                    isbn: 2307149018,
                    publication_year : 2030
                }, {transaction : t}, );
                res.json(book);
             }
           
        });
        console.log(result);
        console.log('transaction committed');

    }
    catch(error){
        console.log(error);
        console.log('Transaction rolled back');
    }
});

router.get('/borrow_book/:memberid/:bookid', async(req, res)=> {
    try {
        const result = await sequelize.transaction(async t =>{
             const member_id = req.params.memberid;
             const book_id = req.params.bookid;
             const reserved_book = await Reservation.findAll(
                {
                    where : {
                        [Op.and]: [
                        {book_id : book_id},
                        {member_id : member_id}]
                    }
                }
            );
            //res.json(reserved_book);
            if(reserved_book.length > 0){
            const createLoan = await Loan.create({
                book_id: book_id,
                member_id : member_id,
                loan_date : new Date(),
                due_date :  new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) //3 days away from due_date
            })
            res.json(createLoan);
            }
            await Reservation.destroy({where : {
                [Op.and]: [
                {book_id : book_id},
                {member_id : member_id}]
            }});
            
            console.log(result);
            console.log("Transaction committed");
         });
        }
         catch(error){
            console.log(error);
            console.log('Transaction failed and it was rollbacked');

         }
});

export default router;