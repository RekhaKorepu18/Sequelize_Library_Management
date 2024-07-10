const express=require('express');
const MemberRouter = express.Router();
import { Member } from '../models/members';
import { members } from './insertionData';

// Get all authors
MemberRouter .get('/allMembers', async (req: any , res: any) => {
    try {
        // Fetch all authors include books
        const members = await Member.findAll();
        if (members.length === 0) return res.status(404).json({ message: "No members Found" });
        res.json({Members: members});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
MemberRouter .get('/:id', async (req, res) => {
    try {
        const member = await Member.findByPk(req.params.id);
        if (member === null) {
            return res.status(404).json({ message: "member Not Found" });
        }
        res.json(member);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// creating all authors at once.
MemberRouter .post('/allBooks', async (req , res) => {
    try{
        if(members){
            await Book.bulkCreate(members);
            console.log(' inserted members data');
            res.json(members);
        }
    }catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Create a new author
MemberRouter.post('/newMember', async (req, res) => {
    try {
        const member = await Member.create(req.body);
        res.json(member);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
MemberRouter .put('/:id', async (req, res) => {
    try {
        const [updated] = await Member.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedmember = await Member.findByPk(req.params.id);
            res.json(updatedmember);
        } else {
            res.status(404).json({ message: "member Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
MemberRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Member.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "member Deleted" });
        } else {
            res.status(404).json({ message: "member Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export default MemberRouter;