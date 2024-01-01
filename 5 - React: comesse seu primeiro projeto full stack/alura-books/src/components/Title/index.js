import styled from "styled-components";

export const Title = styled.h2`
    text-align: ${props => props.align || 'left'};
    font-size: ${props => props.size || '1rem'};
    padding: 20px 0;
    color: ${props => props.color || '#000'};
`;
