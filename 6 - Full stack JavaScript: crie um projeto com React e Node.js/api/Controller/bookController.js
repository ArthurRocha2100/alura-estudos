const { getAllBooks, getBookById, insertBook, modifyBook, deleteBook} = require('../Services/book');


function getBooks(req, res) {
    try {
        const booksList = getAllBooks();
        res.send(booksList);
    }
    catch(error) {
        res.status(500);
        res.send(`Internal error server: ${error.message}`)
    }
}

function getABook(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            const book = getBookById(id);
            res.send(book);
        }
        else  {
            res.status(422);
            res.send('invalid ID');
        }
    }
    catch(error) {
        res.status(500);
        res.send(`Internal error server: ${error.message}`)
    }
}

function postBook(req, res) {
    try {
        const book = req.body;

        if(book.name && book.id) {
            insertBook(book);
            res.status(201);   
            res.send('Success');
        }
        else {
            res.status(422);
            res.send('invalid body require')
        }
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

function editBook(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        
        if(id && Number(id)) {
            modifyBook(body, id);
            res.send('Successful modification')
        }
        else {
            res.status(422);
            res.send('Invalid Id');
        }
    }
    catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function removeBook(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            deleteBook(id);
            res.send('Deleted book successful');   
        }
        else {
            res.status(422);
            res.send('Invalid ID')
        }
    } 
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getBooks,
    getABook,
    postBook,
    editBook,
    removeBook
}