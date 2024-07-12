import { Model, DataTypes } from 'sequelize';
//import sequelize from './database';
import { Book } from './models/books';
import { Author } from './models/authors';
import {Loan } from './models/loans';
import {Reservation} from './models/reservations';
import {Member} from './models/members';
const { Sequelize, Op } = require('sequelize');
const express=require('express');
const router = express.Router();

router.get('/books/byAuthor/:authorId', async (req, res) => {
    const authorId  = req.params.authorId;
    console.log(authorId);
    try {
        const books = await Book.findAll({
            where: { author_id: authorId },
            include: Author
        });
      if (!books || books.length === 0) {
            return res.status(404).json({ message: 'No books found for the given author ID.' });
        }
       res.json(books);
    } catch (error) {
        console.error('Error finding books by author:', error);
        res.status(500).json({ message: 'Internal server error' });
    }});

// API endpoint to get overdue loans
router.get('/loans/overdue', async (req, res) => {
    try {
        const overdueLoans = await Loan.findAll({
            where: {due_date: {
                    $lt: new Date()}
            },
            include: [
                {   model: Book,
                    attributes: ['title']
                },
                {  model: Member,
                    attributes: ['name']
                }]
            });
       if (overdueLoans.length === 0) {
            return res.status(404).json({ message: 'No overdue loans found' });
        }
      res.json({ overdueLoans });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//List All Books by a Specific Author Published After a Certain Year
router.get('/authors/:authorId/books', async (req, res) => {
    const authorId = req.params.authorId;
    const year = req.query.year;
    console.log(year);

    try {
        const books = await Book.findAll({
            where: {
                author_id: authorId,
                publication_year: {
                    [Op.gt]: year
                }
            },
            include: {
                model: Author,
                attributes: ['name']
            }
        });

        if (books.length === 0) {
            return res.status(404).json({ message: 'No books found' });
        }

        res.json(books);
    } catch (error) {
        console.error('Error finding books by author and year:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Member who borrowed more books
router.get('/members/mostBooks', async (req, res) => {
    try {
      const mostActiveMember = await Loan.findAll({
        attributes: [
          'member_id',
          [Sequelize.fn('COUNT', Sequelize.col('id')), 'borrow_count']
        ],
        group: ['member_id'],
        order: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'DESC']],
        limit: 1,
        include: {
          model: Member,
          attributes: ['id', 'name']
        }
      });
  
      if (mostActiveMember.length > 0) {
        res.json(mostActiveMember[0]);
      } else {
        res.status(404).json({ error: 'No active members found' });
      }
    } catch (error) {
      console.error('Error :', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});


export default router;
