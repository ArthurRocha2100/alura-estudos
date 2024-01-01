import { books } from "./lastReleasesData.js";
import {Title} from '../Title/index.js'
import RecomendationCard from "../RecomendationCard/index.js";
import recomendationImage from "../../img/livro2.png";
import styled from "styled-components";

const SectionContainer = styled.section`

`
    
const SectionContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 30px 0;
    background-color: white;
`

function LastReleases() {
    return( 
        <SectionContainer>
            <Title 
                color="#EB9B00" 
                align="center"
                size="1.5rem"
            >ÚLTIMOS LANÇAMENTOS</Title>
            <SectionContent>
            {books.map( book => (
                 <img src={book.src}></img>
            ))}
            </SectionContent>
            <RecomendationCard
                title="Chamos que você gostaria desse tipo de conteudo"
                subtitle="Angular 11"
                description="Construindo um aplicação com a plataforma Google."
                img={recomendationImage}
            />
        </SectionContainer>
    )
}

export default LastReleases
