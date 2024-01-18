import axios from 'axios'

const url = 'http://localhost'
const port = 8000

const booksAPI = axios.create({baseURL:`${url}:${port}/livros`})

async function getBooks() {
    const response = await booksAPI.get('/')
    return response.data
}

export {
    getBooks
}