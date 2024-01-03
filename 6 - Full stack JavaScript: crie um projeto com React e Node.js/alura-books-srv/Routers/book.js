const { Router } =  require('express');
const { getBook } = require('../Controller/bookController');

const router = Router();

router.get('/', getBook);

module.exports = router;