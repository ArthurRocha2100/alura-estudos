const { Router } =  require('express');
const { getBooks, getABook, postBook, editBook, removeBook } = require('../Controller/bookController');

const router = Router();

router.get('/', getBooks);
router.get('/:id', getABook);
router.post('/', postBook);
router.patch('/:id', editBook);
router.delete('/:id', removeBook);

module.exports = router;