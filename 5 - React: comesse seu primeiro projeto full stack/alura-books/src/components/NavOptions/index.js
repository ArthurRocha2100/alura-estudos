import styled from "styled-components";

const HeaderNav = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-around;
    gap: 50px;
    margin: 0;
`;

const HeaderNavOption = styled.li`
    cursor: pointer;
`

function navOption() {
    const navOption = ['Categoria', 'Minha estante', 'Favoritos']

    return (
        <HeaderNav>
            { navOption.map( (option) => (
            <HeaderNavOption>{option}</HeaderNavOption>
            ))}
        </HeaderNav>  
    )
}

export default navOption;