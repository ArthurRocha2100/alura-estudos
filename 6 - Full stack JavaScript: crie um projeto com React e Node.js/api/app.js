const express = require('express');
const rotaDeLivros = require('./Routers/book');
const cors = require('cors');
const app = express();
const port = 1104; 

app.use(express.json());
app.use(cors({origin: '*'}));

app.use('/livros', rotaDeLivros);

app.listen(port, () => {
    console.log(`Express escutando na porta: ${port}`);
})