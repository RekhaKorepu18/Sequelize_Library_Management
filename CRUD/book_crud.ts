import { books} from '../Crud_operations/insertionData';
//import { sequelize } from '../database';
import {Book} from '../models/books';

async function createBooks(): Promise<void> {
    try {
      await Book.bulkCreate(books);
      console.log(' inserted book values');
    } catch (err) {
      console.error('Error while inserting books:', err);
    }
}

async function createNewBook(title: string, author_id: number, genre: string, isbn: string, publication_year:number): Promise<void> {
    try{
        const book = await Book.create({title: title, author_id: author_id, genre: genre, isbn: isbn, publication_year:publication_year});
        console.log('new Book added');
        console.table(book.toJSON());
    }
    catch(error){
        console.error('Error while inserting new book');
    }
}

async function allBooks(): Promise<void> {
    try{
        const books=await Book.findAll();
        console.log('All books retrieved successfully');
        const allbooks = books.map(b=> b.toJSON());
        console.table(allbooks);
    }
    catch(error){
        console.error('Error while retrieving books data');
    }
}

async function getSpecifiedBook(book_id : number) : Promise<void> {
    try {
        const book= await Book.findByPk(book_id);
        if(book)
          console.table(book.toJSON());
        else
         console.log('Book not found');
    }
    catch(error){
        console.error('Error while retrieving data');
    }
}
async function updateBookDetails(book_id: number, update_details : any){
    try {
         const book = await Book.findByPk(book_id);
         if(book){
            const updateBook = await book.update(update_details);
            console.table(updateBook.toJSON());
         }
         else{
            console.log('Book not found');
         }
    }catch(error){
        console.error('Unable to retrieve the Books data');
    }
}

async function deleteBook(book_id: number){
    try {
        const book = await Book.findByPk(book_id);
        if(book){
          await book.destroy();
          console.table(book);
          console.log('book deleted from table');}
        else{
            console.log('book not found');
        }
    }catch(error){
        console.error('Error while deleting the books data');
    }
} 

export {createBooks, createNewBook , allBooks, getSpecifiedBook , updateBookDetails,deleteBook};



