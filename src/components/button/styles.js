
import styled from 'styled-components'

export const Container = styled.button`
    background: linear-gradient(118deg, #F37021 0%, #FF8339 50.88%);
    color: ${({theme}) => theme.colors.text};
    justify-content: space-between;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    border-radius: 2px;
    font-weight: 600;
    min-width: 8vw;
    display: flex;
    border: none;
    inset: unset;
    height: auto;
    width: auto;

    &:hover{
        transition: 0.5s ease-in-out;
        filter: brightness(1.1);
        transform: scale(1.05);
    }
`
