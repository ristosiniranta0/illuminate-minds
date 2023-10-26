// filename: complex_js_code.js

// This code demonstrates a sophisticated and elaborate implementation of a library management system

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  searchByTitle(title) {
    return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchByAuthor(author) {
    return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  searchByYear(year) {
    return this.books.filter(book => book.year === year);
  }

  getAllBooks() {
    return this.books;
  }
}

// Create a library instance
const library = new Library();

// Add books to the library
library.addBook(new Book("Book1", "Author1", 2000));
library.addBook(new Book("Book2", "Author2", 2010));
library.addBook(new Book("Book3", "Author3", 2005));

// Search for books by title
const searchedBooksByTitle = library.searchByTitle("book");
console.log("Books matching title:", searchedBooksByTitle);

// Search for books by author
const searchedBooksByAuthor = library.searchByAuthor("author1");
console.log("Books matching author:", searchedBooksByAuthor);

// Search for books by year
const searchedBooksByYear = library.searchByYear(2005);
console.log("Books matching year:", searchedBooksByYear);

// Remove a book from the library
library.removeBook("Book2");

// Get all books in the library
const allBooks = library.getAllBooks();
console.log("All books in the library:", allBooks);