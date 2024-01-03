function getBook(req, res) {
    try {
        res.send('Successful request')
    }
    catch(error) {
        res.status(500);
        res.send(`Internal error server: ${error.message}`)
    }
}

module.exports = {
    getBook
}