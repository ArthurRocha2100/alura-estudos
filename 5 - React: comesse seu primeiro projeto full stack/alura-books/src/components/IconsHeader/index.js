import bag from '../../img/sacola.svg';
import profile from '../../img/perfil.svg';
import styled from 'styled-components';

const Icon = styled.li`
    cursor: pointer;
`;

const IconsList = styled.ul`
    display: flex;
    gap: 25px;
`;

const iconsList = [profile, bag];

function iconsHeader() {
    return(
        <IconsList>
            {iconsList.map( (icon) => (
                <Icon><img src={icon}></img></Icon>
            ))}
        </IconsList>
    )
}

export default iconsHeader