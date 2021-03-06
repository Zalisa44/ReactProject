import styled, { css } from 'styled-components';

export const Title = styled.h1`
font-size:3rem;
font-weight:600px;
${props => props.theme === 'dark' && css`
    backgroud:#000;
    color:#fff;
    &:hover {
        background:blue;
        color:white;
        font-size:40px;
        font-weight:10px;
    }
    `
    }
`