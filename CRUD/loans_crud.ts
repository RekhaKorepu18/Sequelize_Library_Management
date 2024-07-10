import { loans } from '../Crud_operations/insertionData';
//import { sequelize } from '../database';
import {Loan} from '../models/loans';

async function createLoans(): Promise<void> {
    try {
      await Loan.bulkCreate(loans);
      console.log(' inserted values into loans table');
    } catch (err) {
      console.error('Error while inserting loans:', err);
    }
}

async function createNewLoan(book_id: number, member_id: number, loan_date: Date, due_date: Date): Promise<void> {
    try{
        const loan = await Loan.create({book_id: book_id, member_id: member_id, loan_date: loan_date, due_date: due_date});
        console.log('new loan added to database');
        console.table(loan.toJSON());
    }
    catch(error){
        console.error('Error while inserting new loan');
    }
}

async function allLoans(): Promise<void> {
    try{
        const loans=await Loan.findAll();
        console.log('All loans retrieved successfully');
        const allloans = loans.map(a=> a.toJSON());
     
        console.table(allloans);
    }
    catch(error){
        console.error('Error while retrieving loans data');
    }
}

async function getLoan(loan_id : number) : Promise<void> {
    try {
        const loan= await Loan.findByPk(loan_id);
        if(loan)
          console.table(loan.toJSON());
        else
         console.log('Loan not found');
    }
    catch(error){
        console.error('Error while retrieving data');
    }
}
async function updateLoanDetails(loan_id: number, update_details : any){
    try {
         const loan = await Loan.findByPk(loan_id);
         if(loan){
            const updateLoan = await loan.update(update_details);
            console.table(updateLoan.toJSON());
         }
         else{
            console.log('Loan not found');
         }
    }catch(error){
        console.error('Unable to retrieve the Loans data');
    }
}

async function deleteLoan(loan_id: number){
    try {
        const loan = await Loan.findByPk(loan_id);
        if(loan){
          await loan.destroy();
          console.table(loan);
          console.log('loan deleted from table');}
        else{
            console.log('loan not found');
        }
    }catch(error){
        console.error('Error while deleting the loans data');
    }
} 

export {createLoans, createNewLoan ,allLoans, getLoan,updateLoanDetails, deleteLoan};



