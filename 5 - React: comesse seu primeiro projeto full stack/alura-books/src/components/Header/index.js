import Logo from '../Logo/index.js';
import NavOption from '../NavOptions/index.js';
import IconsHeader from '../IconsHeader/index.js';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    align-items: center;
    background-color: #eaeaea;
    box-shadow: 15px 0 20px #000;
    display: flex;
    justify-content: center;
    padding: 0 25px;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <NavOption/>
            <IconsHeader/>
         </HeaderContainer>
    );
}

export default Header