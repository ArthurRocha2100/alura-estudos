const { getAllBooks } = require('../Services/book')

function getBook(req, res) {
    try {
        const booksList = getAllBooks();
        res.send(booksList);
    }
    catch(error) {
        res.status(500);
        res.send(`Internal error server: ${error.message}`)
    }
}

module.exports = {
    getBook
}