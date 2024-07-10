const express=require('express');
const reserveRouter = express.Router();
import { Reservation } from '../models/reservations';
import { reservations } from './insertionData';

// Get all authors
reserveRouter .get('/allReserves', async (req: any , res: any) => {
    try {
        // Fetch all authors include books
        const reserves = await Reservation.findAll();
        if (reserves.length === 0) return res.status(404).json({ message: "No reserves Found" });
        res.json({Reserves: reserves});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// Get one author
reserveRouter.get('/:id', async (req, res) => {
    try {
        const reserve = await Reservation.findByPk(req.params.id);
        if (reserve === null) {
            return res.status(404).json({ message: "reserve Not Found" });
        }
        res.json(reserve);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});
// creating all authors at once.
reserveRouter.post('/allReserves', async (req , res) => {
    try{
        if(reservations){
            await Reservation.bulkCreate(reservations);
            console.log(' inserted loans data');
            res.json(reservations);
        }
    }catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Create a new author
reserveRouter.post('/newReserve', async (req, res) => {
    try {
        const reserve = await Reservation.create(req.body);
        res.json(reserve);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
reserveRouter .put('/:id', async (req, res) => {
    try {
        const [updated] = await Reservation.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedreserve = await Reservation.findByPk(req.params.id);
            res.json(updatedreserve);
        } else {
            res.status(404).json({ message: "reserve Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
reserveRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Reservation.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "reservation Deleted" });
        } else {
            res.status(404).json({ message: "reserve Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export default reserveRouter;