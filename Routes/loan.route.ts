const express=require('express');
const loanRouter = express.Router();
import { Loan } from '../models/loans';
import { loans } from './insertionData';

// Get all authors
loanRouter .get('/allLoans', async (req: any , res: any) => {
    try {
        // Fetch all authors include books
        const loans = await Loan.findAll();
        if (loans.length === 0) return res.status(404).json({ message: "No loans Found" });
        res.json({Loans: loans});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
loanRouter.get('/:id', async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan === null) {
            return res.status(404).json({ message: "loan Not Found" });
        }
        res.json(loan);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// creating all authors at once.
loanRouter.post('/allLoans', async (req , res) => {
    try{
        if(loans){
            await Loan.bulkCreate(loans);
            console.log(' inserted loans data');
            res.json(loans);
        }
    }catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Create a new author
loanRouter.post('/newLoan', async (req, res) => {
    try {
        const loan = await Loan.create(req.body);
        res.json(loan);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
loanRouter .put('/:id', async (req, res) => {
    try {
        const [updated] = await Loan.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedloan = await Loan.findByPk(req.params.id);
            res.json(updatedloan);
        } else {
            res.status(404).json({ message: "loan Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
loanRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Loan.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Loan Deleted" });
        } else {
            res.status(404).json({ message: "loan Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export default loanRouter;