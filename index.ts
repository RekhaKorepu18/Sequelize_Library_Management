import { sequelize } from './database';
import { Sequelize} from 'sequelize';
import { Book } from './models/books';
import { Author } from './models/authors';
import {Loan } from './models/loans';
import {Reservation} from './models/reservations';
import {Member} from './models/members';
import {createAuthors, createNewAuthor, allAuthors, getSpecifiedAuthor, updateAuthorDetails, deleteAuthor} from './CRUD/Author_crud';
import {createBooks, createNewBook , allBooks, getSpecifiedBook , updateBookDetails, deleteBook} from './CRUD/book_crud';
import {createMembers, addNewMember, allMembers, getMember, updateMember,deleteMember} from './CRUD/member_crud';
import {createLoans, createNewLoan ,allLoans, getLoan,updateLoanDetails, deleteLoan} from './CRUD/loans_crud';
import {createReservation, createNewReservation ,allReservations, getReservation,updateReservation, deleteReservation} from './CRUD/reservations_crud';


(async () => {
    try {
        await sequelize.authenticate();
        console.log('connection  established');

        await sequelize.sync({force: false});
        console.log("All models synchronized");

        //########===========Authors========================
      Author.sync({ force: true })
          .then(() => {
             console.log('Authors table created');
            return createBooks();
          })
          .then(() => {
           return createNewBook('The insider', 1, 'thrilling', '87654321', 1999);
          })
           .then(() => {
            return allBooks();
           })
            .then(() => {
              return getSpecifiedBook(7);
          })
            .then(() => {
                return updateBookDetails(9,{title: 'It ends with us', publication_year: '2018'});
            })
            .then(()=> {
                 return deleteBook(9);
            })
         .catch((err) => {
           console.log('Error occurred:', err);
        });
    //========###############========= Books===================
    Book.sync({ force: true})
    .then(() => {
       console.log('Books table created');
      return createAuthors();
    })
    .then(() => {
     return createNewAuthor('Rekha', 2002, 'Indian' );
    })
     .then(() => {
      return allAuthors();
     })
      .then(() => {
        return getSpecifiedAuthor(6);
    })
      .then(() => {
          return updateAuthorDetails(6,{name: 'Rekha Korepu', birth_year: '2003'});
      })
      .then(()=> {
           return deleteAuthor(6);
      })
   .catch((err) => {
     console.log('Error occurred:', err);
  });
  

    // =========##########===============Members================
    Member.sync({ force: true})
    .then(() => {
       console.log('Members table created');
      return createMembers();
    })
    .then(() => {
     return addNewMember('Anjani','Basar','982134567','Anjani@gmail.com');
    })
     .then(() => {
      return allMembers();
     })
      .then(() => {
        return getMember(3);
    })
      .then(() => {
          return updateMember(4,{name: 'Anjani Barlapati', address: 'Nigeria'});
      })
      .then(()=> {
           return deleteMember(4);
      })
   .catch((err) => {
     console.log('Error occurred:', err);
  });
  //===============#########===========Loans=======================
  Loan.sync({ force: true})
  .then(() => {
     console.log('Loans table created');
    return createLoans();
  })
  .then(() => {
   return createNewLoan(3,2, new Date("2024-07-01"),new Date("2024-07-04"));
  })
   .then(() => {
    return allLoans();
   })
    .then(() => {11
      return getLoan(3);
  })
    .then(() => {
        return updateLoanDetails(4,{member_id : 3});
    })
    .then(()=> {
         return deleteLoan(7);
    })
 .catch((err) => {
   console.log('Error occurred:', err);
});
//=========########============== Reservations======================
Reservation.sync({ force: true})
.then(() => {
   console.log('reservations table created');
  return createReservation();
})
.then(() => {
 return createNewReservation(3,2, new Date("2024-07-06"));
})
 .then(() => {
  return allReservations();
 })
  .then(() => {
    return getReservation(3);
})
  .then(() => {
      return updateReservation(4,{member_id : 2});
  })
  .then(()=> {
       return deleteReservation(7);
  })
.catch((err) => {
 console.log('Error occurred:', err);
});
   }
    catch(error){
        console.log('Unable to connect to database:', error);
    }
    finally {
      
    }
})();