import { reservations } from '../Crud_operations/insertionData';
//import { sequelize } from '../database';
import { Reservation } from '../models/reservations';

async function createReservation(): Promise<void> {
    try {
      await Reservation.bulkCreate(reservations);
      console.log(' inserted values into reservations table');
    } catch (err) {
      console.error('Error while inserting reservatios:', err);
    }
}

async function createNewReservation(book_id: number, member_id: number, reservation_date: Date): Promise<void> {
    try{
        const reservation = await Reservation.create({book_id: book_id, member_id: member_id, reservation_date : reservation_date});
        console.log('new reservation added to database');
        console.table(reservation.toJSON());
    }
    catch(error){
        console.error('Error while inserting new reservation');
    }
}

async function allReservations(): Promise<void> {
    try{
        const reservations=await Reservation.findAll();
        console.log('All reservations retrieved successfully');
        const allreserves = reservations.map(r=> r.toJSON());
     
        console.table(allreserves);
    }
    catch(error){
        console.error('Error while retrieving reservations data');
    }
}

async function  getReservation(reservation_id : number) : Promise<void> {
    try {
        const reserve= await Reservation.findByPk(reservation_id);
        if(reserve)
          console.table(reserve.toJSON());
        else
         console.log('reservation not found');
    }
    catch(error){
        console.error('Error while retrieving data');
    }
}
async function updateReservation(reservation_id: number, update_details : any){
    try {
         const reservation = await Reservation.findByPk(reservation_id);
         if(reservation){
            const updatereserve = await reservation.update(update_details);
            console.table(updatereserve.toJSON());
         }
         else{
            console.log('Reservation not found');
         }
    }catch(error){
        console.error('Unable to retrieve the Reservations data');
    }
}

async function deleteReservation(reserve_id: number){
    try {
        const reservation = await Reservation.findByPk(reserve_id);
        if(reservation){
          await reservation.destroy();
          console.table(reservation);
          console.log('reservation deleted from table');}
        else{
            console.log('reservation not found');
        }
    }catch(error){
        console.error('Error while deleting the reservation data');
    }
} 

export {createReservation, createNewReservation ,allReservations, getReservation,updateReservation, deleteReservation};



