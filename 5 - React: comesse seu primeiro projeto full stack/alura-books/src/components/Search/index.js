import Input from "../Input";
import styled from "styled-components";
import { useState , useEffect} from "react";
import { books } from "./dbBooksTemp";
import { getBooks } from "../../services/books";
import { postFavorite } from "../../services/favorites";

const SearchContainer = styled.section`
    min-height: 100vh;
    text-align: center;
    width: 100%;
`
const Title = styled.h2`
    color: #eaeaea;
    font-size: 2rem;
    margin: 70px 0 20px 0;
`
const SubTitle = styled.h3`
    color: #eaeaea;
    font-size: .7rem;
    margin: 0 0 10px 0;
`
const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
    width: 100%;
    flex-wrap: wrap;
`
const CardBook = styled.div`
    background-color: #eaeaea;
    padding: 10px;
    border-radius: 20px;
    width:20%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`
const BookImage = styled.img`
    border-radius: 10px;
    width: 100%;
    height: 80%;
`
const BookTitle = styled.p`
    font-size:1.2rem;
    margin: 10px 0;
    align-items: center;
    background-color: white;
    padding: 10px;
    border-radius:10px;
`
function Search() {
    const [bookSearch, setBookSearch] = useState([])
    const [books, setBook] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const bookOfAPI = await getBooks()
        setBook(bookOfAPI)
    }

    async function insertFavorite(id) {
        await postFavorite(id)
        alert('Successful add')
    }

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Econtre seu livro em nossa estante</SubTitle>
            <Input 
                placeholder="Digite aqui o nome da sua próxima aventura..."
                onBlur={event => {
                    const writtenText = event.target.value;
                    const searchResult = books.filter( book => book.name.includes(writtenText));
                    setBookSearch(searchResult);
                }}           
            />

            <ResultContainer>
                {bookSearch.map(book  => (
                <CardBook onClick={() => insertFavorite(book.id)}>
                        <BookImage src={book.ImageURL}/>
                        <BookTitle>{book.name}</BookTitle>
                </CardBook>
                ))}
            </ResultContainer>
            
        </SearchContainer>
    )
}

export default Search
