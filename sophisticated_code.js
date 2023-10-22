/* filename: sophisticated_code.js */

// This code demonstrates a complex and sophisticated implementation of a library management system.

class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
    this.borrowedBooks = [];
  }

  addBook(title, author, publicationDate) {
    const book = new Book(title, author, publicationDate);
    this.books.push(book);
  }

  borrowBook(title) {
    const bookIndex = this.books.findIndex(book => book.title === title && !book.borrowed);
    if (bookIndex !== -1) {
      const book = this.books[bookIndex];
      book.borrowed = true;
      this.borrowedBooks.push(book);
      this.books.splice(bookIndex, 1);
      console.log(`Successfully borrowed "${book.title}" by ${book.author}`);
    } else {
      console.log(`No available copies of "${title}" at the moment.`);
    }
  }

  returnBook(title) {
    const bookIndex = this.borrowedBooks.findIndex(book => book.title === title);
    if (bookIndex !== -1) {
      const book = this.borrowedBooks[bookIndex];
      book.borrowed = false;
      this.books.push(book);
      this.borrowedBooks.splice(bookIndex, 1);
      console.log(`Successfully returned "${book.title}" by ${book.author}`);
    } else {
      console.log(`You haven't borrowed "${title}".`);
    }
  }
}

class Book {
  constructor(title, author, publicationDate) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.borrowed = false;
  }
}

function logLibraryInfo(library) {
  console.log(`\n${library.name} Library (${library.location})`);
  console.log("Books:");
  for (const book of library.books) {
    console.log(`${book.title} by ${book.author}`);
  }
  console.log("Borrowed Books:");
  for (const book of library.borrowedBooks) {
    console.log(`${book.title} by ${book.author}`);
  }
}

// Usage example:

const myLibrary = new Library("My Library", "Town A");
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", 1960);
myLibrary.borrowBook("To Kill a Mockingbird");
myLibrary.borrowBook("Nonexistent Book");
myLibrary.returnBook("The Great Gatsby");
logLibraryInfo(myLibrary);
