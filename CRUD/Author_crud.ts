import { authors} from '../Crud_operations/insertionData';
//import { sequelize } from '../database';
import {Author} from '../models/authors';

async function createAuthors(): Promise<void> {
    try {
      await Author.bulkCreate(authors);
      console.log(' inserted values');
    } catch (err) {
      console.error('Error while inserting authors:', err);
    }
}

async function createNewAuthor(name: string, birth_year: number, nationality: string): Promise<void> {
    try{
        const author = await Author.create({name: name, birth_year: birth_year,nationality :nationality});
        console.log('new author added');
        console.table(author.toJSON());
    }
    catch(error){
        console.error('Error while inserting new author');
    }
}

async function allAuthors(): Promise<void> {
    try{
        const authors=await Author.findAll();
        console.log('All authors retrieved successfully');
        const allAuthors = authors.map(a=> a.toJSON());
        console.table(allAuthors);
    }
    catch(error){
        console.error('Error while retrieving authors data');
    }
}

async function getSpecifiedAuthor(author_id : number) : Promise<void> {
    try {
        const author = await Author.findByPk(author_id);
        if(author)
          console.table(author.toJSON());
        else
         console.log('Author not found');
    }
    catch(error){
        console.error('Error while retrieving data');
    }
}
async function updateAuthorDetails(author_id: number, update_details : any){
    try {
         const author = await Author.findByPk(author_id);
         if(author){
            const updateAuthor = await author.update(update_details);
            console.table(updateAuthor.toJSON());
         }
         else{
            console.log('Author not found');
         }
    }catch(error){
        console.error('Unable to retrieve the authors data');
    }
}

async function deleteAuthor(author_id: number){
    try {
        const author = await Author.findByPk(author_id);
        if(author){
          await author.destroy();
          console.log('author deleted from table');}
        else{
            console.log('author not found');
        }
    }catch(error){
        console.error('Error while deleting the authors data');
    }
} 

export {createAuthors, createNewAuthor, allAuthors, getSpecifiedAuthor, updateAuthorDetails, deleteAuthor};



//########===========Authors========================
//       Author.sync({ force: true })
//           .then(() => {
//              console.log('Authors table created');
//             return createBooks();
//           })
//           .then(() => {
//            return createNewBook('The insider', 1, 'thrilling', '87654321', 1999);
//           })
//            .then(() => {
//             return allBooks();
//            })
//             .then(() => {
//               return getSpecifiedBook(7);
//           })
//             .then(() => {
//                 return updateBookDetails(9,{title: 'It ends with us', publication_year: '2018'});
//             })
//             .then(()=> {
//                  return deleteBook(9);
//             })
//          .catch((err) => {
//            console.log('Error occurred:', err);
//         });
//     //========###############========= Books===================
//     Book.sync({ force: true})
//     .then(() => {
//        console.log('Books table created');
//       return createAuthors();
//     })
//     .then(() => {
//      return createNewAuthor('Rekha', 2002, 'Indian' );
//     })
//      .then(() => {
//       return allAuthors();
//      })
//       .then(() => {
//         return getSpecifiedAuthor(6);
//     })
//       .then(() => {
//           return updateAuthorDetails(6,{name: 'Rekha Korepu', birth_year: '2003'});
//       })
//       .then(()=> {
//            return deleteAuthor(6);
//       })
//    .catch((err) => {
//      console.log('Error occurred:', err);
//   });
  

//     // =========##########===============Members================
//     Member.sync({ force: true})
//     .then(() => {
//        console.log('Members table created');
//       return createMembers();
//     })
//     .then(() => {
//      return addNewMember('Anjani','Basar','982134567','Anjani@gmail.com');
//     })
//      .then(() => {
//       return allMembers();
//      })
//       .then(() => {
//         return getMember(3);
//     })
//       .then(() => {
//           return updateMember(4,{name: 'Anjani Barlapati', address: 'Nigeria'});
//       })
//       .then(()=> {
//            return deleteMember(4);
//       })
//    .catch((err) => {
//      console.log('Error occurred:', err);
//   });
//   //===============#########===========Loans=======================
//   Loan.sync({ force: true})
//   .then(() => {
//      console.log('Loans table created');
//     return createLoans();
//   })
//   .then(() => {
//    return createNewLoan(3,2, new Date("2024-07-01"),new Date("2024-07-04"));
//   })
//    .then(() => {
//     return allLoans();
//    })
//     .then(() => {11
//       return getLoan(3);
//   })
//     .then(() => {
//         return updateLoanDetails(4,{member_id : 3});
//     })
//     .then(()=> {
//          return deleteLoan(7);
//     })
//  .catch((err) => {
//    console.log('Error occurred:', err);
// });
// //=========########============== Reservations======================
// Reservation.sync({ force: true})
// .then(() => {
//    console.log('reservations table created');
//   return createReservation();
// })
// .then(() => {
//  return createNewReservation(3,2, new Date("2024-07-06"));
// })
//  .then(() => {
//   return allReservations();
//  })
//   .then(() => {
//     return getReservation(3);
// })
//   .then(() => {
//       return updateReservation(4,{member_id : 2});
//   })
//   .then(()=> {
//        return deleteReservation(7);
//   })
// .catch((err) => {
//  console.log('Error occurred:', err);
// });