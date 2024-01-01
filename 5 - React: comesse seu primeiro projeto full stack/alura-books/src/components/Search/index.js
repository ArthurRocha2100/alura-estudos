import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./dbBooksTemp";

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
`
function Search() {
    const [bookSearch, setBookSearch] = useState([]);

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
                <CardBook>
                        <BookImage src={book.src}/>
                        <BookTitle>{book.name}</BookTitle>
                </CardBook>
                ))}
            </ResultContainer>
            
        </SearchContainer>
    )
}

export default Search
