const express=require('express');
const BookRouter = express.Router();
import { Book } from '../models/books';
import { books } from './insertionData';

// Get all authors
BookRouter .get('/allBooks', async (req: any , res: any) => {
    try {
        // Fetch all authors include books
        const books = await Book.findAll();
        if (books.length === 0) return res.status(404).json({ message: "No books Found" });
        res.json({Books: books});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
BookRouter .get('/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({ message: "Author Not Found" });
        }
        res.json(book);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// creating all authors at once.
BookRouter .post('/allBooks', async (req , res) => {
    try{
        if(books){
            await Book.bulkCreate(books);
            console.log(' inserted books data');
            res.json(books);
        }
    }catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Create a new author
BookRouter .post('/newBook', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json(book);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
BookRouter .put('/:id', async (req, res) => {
    try {
        const [updated] = await Book.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedBook = await Book.findByPk(req.params.id);
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
BookRouter .delete('/:id', async (req, res) => {
    try {
        const deleted = await Book.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Book Deleted" });
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export default BookRouter;
