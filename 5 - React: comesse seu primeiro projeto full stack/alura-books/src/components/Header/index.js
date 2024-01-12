import Logo from '../Logo/index.js';
import NavOption from '../NavOptions/index.js';
import IconsHeader from '../IconsHeader/index.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    align-items: center;
    background-color: #eaeaea;
    box-shadow: 15px 0 20px #000;
    display: flex;
    justify-content: center;
    padding: 0 25px;
`

const LogoLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: black
`

function Header() {
    return(
        <HeaderContainer>
            <LogoLink to='/'>
                <Logo/>
            </LogoLink>
            <NavOption/>
            <IconsHeader/>
         </HeaderContainer>
    );
}

export default Header