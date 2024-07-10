import { Optional } from "sequelize";
const books = [
    {
        "title": "Lord of the Rings",
        "author_id": 1,
        "genre": "Fantasy",
        "isbn": "9780261102385",
        "publication_year": 1954
    },
    {
        "title": "Harry Potter Series",
        "author_id": 2,
        "genre": "Fantasy",
        "isbn": "9780747532743",
        "publication_year": 1997
    },
    {
        "title": "Arthashastra",
        "author_id": 3,
        "genre": "Philosophy",
        "isbn": "9780140446036",
        "publication_year": 300
    },
    {
        "title": "The Alchemist",
        "author_id": 4,
        "genre": "Adventure",
        "isbn": "9780061122415",
        "publication_year": 1988
    },
    {
        "title": "Gone Girl",
        "author_id": 5,
        "genre": "Thriller",
        "isbn": "9780307588364",
        "publication_year": 2012
    },
    {
        "title": "Harry Potter and the Philosopher's Stone",
        "author_id": 2,
        "genre": "Fantasy",
        "isbn": "9780747532745",
        "publication_year": 1997
    },
    
    {
        "title": "Sharp Objects",
        "author_id": 5,
        "genre": "Thriller",
        "isbn": "9780307351487",
        "publication_year": 2006
    },
    {
        "title": "Chanakya Neeti",
        "author_id": 3,
        "genre": "Philosophy",
        "isbn": "9788120806057",
        "publication_year": 300
    }
];

const authors = [
    {
        name: "J.R.R. Tolkien",
        birth_year: 1892,
        nationality: "British"
    },
    {
        name: "J.K. Rowling",
        birth_year: 1965,
        nationality: "British"
    },
    {
        name: "Kautilya (Chanakya)",
        birth_year: -370,
        nationality: "Indian"
    },
    {
        name: "Paulo Coelho",
        birth_year: 1947,
        nationality: "Brazilian"
    },
    {
        name: "Gillian Flynn",
        birth_year: 1971,
        nationality: "American"
    }
];

const members = [
    {
        "name": "Rekha",
        "address": "Sircilaa",
        "phone_number": "12345677",
        "email": "rekha@gmail.com"
    },
    {
        "name": "Anush",
        "address": "Karimnagar",
        "phone_number": "87655425645",
        "email": "anush@gmail.com"
    },
    {
        "name": "Ammu",
        "address": "Basar",
        "phone_number": "9873245789",
        "email": "ammu@gmail.com"
    }
];

const loans = [
    {
        "book_id": 1,
        "member_id": 1,
        "loan_date": new Date("2024-06-15"),
        "due_date": new Date("2024-07-15")
    },
    {
        
        "book_id": 2,
        "member_id": 2,
        "loan_date": new Date("2024-06-20"),
        "due_date": new Date("2024-07-20")
    },
    {
        
        "book_id": 3,
        "member_id": 3,
        "loan_date": new Date("2024-06-25"),
        "due_date": new Date("2024-07-25")
    },
    {
      
        "book_id": 4,
        "member_id": 1,
        "loan_date": new Date("2024-07-01"),
        "due_date": new Date("2024-08-01")
    },
    {
       
        "book_id": 5,
        "member_id": 2,
        "loan_date": new Date("2024-07-05"),
        "due_date": new Date("2024-08-05")
    },
    {
      
        "book_id": 6,
        "member_id": 3,
        "loan_date": new Date("2024-07-10"),
        "due_date": new Date("2024-08-10")
    }
];

const reservations = [
    {
        "book_id": 1,
        "member_id": 1,
        "reservation_date": new Date("2024-07-04")
    },
    {
        "book_id": 2,
        "member_id": 2,
        "reservation_date": new Date("2024-07-05")
    },
    {
        "book_id": 3,
        "member_id": 3,
        "reservation_date": new Date("2024-07-03")
    },
    {
        "book_id": 4,
        "member_id": 1,
        "reservation_date": new Date("2024-07-04")
    },
    {
        "book_id": 5,
        "member_id": 2,
        "reservation_date": new Date("2024-07-02")
    },
    {
        "book_id": 6,
        "member_id": 3,
        "reservation_date": new Date("2024-07-04")
    }
];
export{books, authors, members, loans, reservations};