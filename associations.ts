import { Book } from './models/books';
import { Author } from './models/authors';
import {Loan } from './models/loans';
import {Reservation} from './models/reservations';
import {Member} from './models/members';

//Author.hasMany(Book);
//Book.belongsTo(Author);
async function associations() : Promise<void>
{      
     Author.hasMany(Book, { foreignKey: 'author_id' });
     Book.belongsTo(Author, { foreignKey: 'author_id' });

     Member.hasMany(Loan, { foreignKey: 'member_id' });
     Loan.belongsTo(Member, { foreignKey: 'member_id' });

     Member.hasMany(Reservation, { foreignKey: 'member_id' });
     Reservation.belongsTo(Member, { foreignKey: 'member_id' });

    Book.hasMany(Loan, { foreignKey: 'book_id' });
    Loan.belongsTo(Book, { foreignKey: 'book_id' });

    Book.hasMany(Reservation, { foreignKey: 'book_id' });
    Reservation.belongsTo(Book, { foreignKey: 'book_id' });
}
export{associations}


