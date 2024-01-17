const fs = require('fs');

function getAllFavorites() {
    return JSON.parse( fs.readFileSync('favorites.json'))
}

function deleteFavoritesBookOfID(id) {
    const favoritesBooks = JSON.parse( fs.readFileSync('favorites.json'))

    const books = favoritesBooks.filter( favoriteBook => favoriteBook.id !== id )

    fs.writeFileSync('favorites.json', JSON.stringify(books))
}

function addFavoriteBook(id) {

    const booksList = JSON.parse( fs.readFileSync('books.json') )
    const favoritesList = JSON.parse( fs.readFileSync('favorites.json'))

    const book = booksList.find( book => book.id === id)

    console.log(book)
    const newFavoritesList = [...favoritesList, book]

    fs.writeFileSync('favorites.json', JSON.stringify(newFavoritesList))

}

module.exports = {
    getAllFavorites,
    deleteFavoritesBookOfID,
    addFavoriteBook
}