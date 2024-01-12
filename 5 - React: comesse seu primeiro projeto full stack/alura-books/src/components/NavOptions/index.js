import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderNav = styled.ul`
    align-items: center;
    display: flex;
    justify-content: space-around;
    gap: 50px;
    margin: 0;
`

const HeaderNavOption = styled.li`
    cursor: pointer;
`

const NavLink = styled(Link)`
    cursor: pointer;
    color: black;
    text-decoration: none;
`

function navOption() {
    const navOption = ['Category', 'Bookcase', 'Favorites']

    return (
        <HeaderNav>
            { navOption.map( (option) => (
                <NavLink to={`/${option.toLowerCase()}`}>
                    <HeaderNavOption>{option}</HeaderNavOption>
                </NavLink>
            ))}
        </HeaderNav>  
    )
}

export default navOption;