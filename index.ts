import { sequelize } from './database';
const express=require('express');
import {associations} from './associations';
import authorRoutes from './Routes/author.routes';
import bookRoutes from './Routes/book.routes';
import memberRoutes from './Routes/member.routes';
import LoanRoutes from './Routes/loan.route';
import reserveRoutes from './Routes/reservation.routes';

const app = express();
import { Sequelize} from 'sequelize';

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded requests
app.use(express.json());  // Middleware to parse JSON requests

(async () => {
    try {
        await sequelize.authenticate();
        console.log('connection  established');
         
        associations(); // Setting-up associations
        await sequelize.sync({force: false});
        console.log("All models synchronized");

        

     
app.use('/authors',authorRoutes);
app.use('/books',bookRoutes);
app.use('/members',memberRoutes);
app.use('/loans',LoanRoutes);
app.use('/reservations',reserveRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

   }
    catch(error){
        console.log('Unable to connect to database:', error);
    }
    finally {
      
    }
})();
