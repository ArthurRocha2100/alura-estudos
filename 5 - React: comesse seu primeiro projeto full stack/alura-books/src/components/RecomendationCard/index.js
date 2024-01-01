import styled from "styled-components";
import { Title } from "../Title";

const Card = styled.div`
    display: flex;
    background-color: #eaeaea;
    border-radius: 10px;
    box-shadow: 0px 10px 20px black;
    justify-content: space-around;
    align-content: center;
    margin: 20px auto;
    padding: 10px;
    max-width: 60%;
`
styled.div`
    display: block;
`

function RecomendationCard({title, subtitle, description, img}) {
    return(
        <Card>
            <div>
                <Title size="1.2rem">{title}</Title>
                <h4>{subtitle}</h4>
                <p>{description}</p>
            </div>
            <div>
                <img src={img}/>
                <button>Saiba mais</button>
            </div>
        </Card>
    )
}
export default RecomendationCard