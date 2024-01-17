const {getAllFavorites, addFavoriteBook, deleteFavoritesBookOfID} = require('../Services/favorites')


function getFavorites(req, res) {
    try{
        const books = getAllFavorites()
        res.send(books)
    }
    catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function addFavorite(req, res) {
    try {
        const id = req.params.id
        addFavoriteBook(id)
        res.status(201)
        res.send('Success')
    } 
    catch (error) {
        res.status(500)
        res.send(error.message)    
    }
}


function removeFavorite(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteFavoritesBookOfID(id)
            res.send('success')
        }
        else {
            res.status(422)
            res.send('Invalid ID')
        }
    } 
    catch (error) {
        res.status(500)
        res.send(error.message)    
    }
}

module.exports = {
    getFavorites,
    addFavorite,
    removeFavorite
}