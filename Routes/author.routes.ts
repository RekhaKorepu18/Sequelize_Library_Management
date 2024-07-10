const express=require('express');
const AuthorRouter = express.Router();
import { Author } from '../models/authors';
import { authors} from './insertionData';

// Get all authors
AuthorRouter.get('/Allauthors', async (req: any , res: any) => {
    try {
        // Fetch all authors include books
        const authors = await Author.findAll();
        if (authors.length === 0) return res.status(404).json({ message: "No Authors Found" });
        res.json({Authors: authors});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
AuthorRouter.get('/:authorId', async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        if (author === null) {
            return res.status(404).json({ message: "Author Not Found" });
        }
        res.json(author);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// creating all authors at once.
AuthorRouter.post('/AllAuthors', async (req,res) => {
    try{
        if(authors){
            await Author.bulkCreate(authors);
            console.log(' inserted authors data');
            res.json(authors);
        }
    }catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Create a new author
AuthorRouter.post('/newAuthor', async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.json(author);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
AuthorRouter.put('/:authorId', async (req, res) => {
    try {
        const [updated] = await Author.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await Author.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
AuthorRouter.delete('/:authorId', async (req, res) => {
    try {
        const deleted = await Author.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Author Deleted" });
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export default AuthorRouter;
