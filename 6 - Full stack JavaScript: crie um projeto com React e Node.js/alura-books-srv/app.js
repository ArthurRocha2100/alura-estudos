import express from 'express';
const app = express();
const port = 1104; 

app.listen(port, () => {
    console.log(`Express escutando na porta: ${port}`);
})

app.get('/', (req, res) => {
    res.send('hello world. I am Full stack Development');
})