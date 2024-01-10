const fs = require('fs');

function getAllBooks() {
    return JSON.parse( fs.readFileSync('books.json'))
}

function getBookById(id) {
    const books = JSON.parse( fs.readFileSync('books.json'));

    const filteredBook = books.filter(book => book.id === id)[0]
    return filteredBook;
}

function insertBook(newBook) {
    const booksList = JSON.parse(fs.readFileSync('books.json'));
    const newBooksList = [...booksList, newBook];

    fs.writeFileSync('books.json', JSON.stringify(newBooksList));
}

function modifyBook(modification, id) {
    let booksList = JSON.parse(fs.readFileSync('books.json'));
    const modifyIndex = booksList.findIndex(book => book.id === id);

    const contentModify = { ...booksList[modifyIndex], ...modification}

    booksList[modifyIndex] = contentModify;

    fs.writeFileSync('books.json', JSON.stringify(booksList))
}

function deleteBook(id) {
    let booksList = JSON.parse(fs.readFileSync('books.json'));
    const indexOfTheDeletedBook = booksList.findIndex(book => book.id === id);

    booksList.splice(indexOfTheDeletedBook, 1);
    
    fs.writeFileSync('books.json', JSON.stringify(booksList));
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook,
    deleteBook
}