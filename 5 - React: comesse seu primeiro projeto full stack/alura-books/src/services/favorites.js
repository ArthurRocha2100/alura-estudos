import axios from 'axios'

const url = 'http://localhost'
const port = 8000

const favoritesAPI = axios.create({baseURL:`${url}:${port}/favoritos`})

async function getFavorites() {
    const response = await favoritesAPI.get('/')
    return response.data
}

export {
    getFavorites
}