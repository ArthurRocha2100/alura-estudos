const express = require('express');
const rotaDeLivros = require('./Routers/book');
const app = express();
const port = 1104; 

app.use('/livro', rotaDeLivros);

app.listen(port, () => {
    console.log(`Express escutando na porta: ${port}`);
})