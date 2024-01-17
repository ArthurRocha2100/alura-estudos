const {Router} = require('express')
const { getFavorites, addFavorite, removeFavorite } = require('../Controller/favoritesBooksController')

const router = Router()

router.get('/', getFavorites)
router.post('/:id', addFavorite)
router.delete('/:id', removeFavorite)

module.exports = router