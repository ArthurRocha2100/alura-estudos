import logo from '../../img/logo.svg';
import styled from 'styled-components';

const LogoConainer = styled.div`
    display: block;
`;

const LogoImage = styled.img`
    width: 1.5rem;

`;

const LogoTitle = styled.p`
    border-bottom: 1px solid #000;
    font-size: 1.5rem;
    margin: 0;
`;

const LogoSubTitle = styled.p`
    margin: 0;
    font-size: .7rem;
`;


function Logo() {
    return(
    <LogoConainer>
        <LogoTitle>
            <LogoImage src={logo} alt='Simbolo da logo do site'/> 
            <strong>lura</strong>Books
        </LogoTitle>
        <LogoSubTitle>Sua loja de livros online</LogoSubTitle>
    </LogoConainer>
    );
}

export default Logo;