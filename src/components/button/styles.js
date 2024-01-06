
import styled from 'styled-components'

export const Container = styled.button`
    justify-content: ${({center}) => center ? 'center': 'space-between'};
    background: ${({color}) => color ? '' : 'linear-gradient(118deg, #F37021 0%, #FF8339 50.88%)'};
    background-color: ${({color}) => color ? color : ''};
    color: ${({theme}) => theme.colors.text};
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    border-radius: 2px;
    font-weight: 600;
    min-width: 8vw;
    margin: 1px;
    display: flex;
    border: none;
    inset: unset;
    height: auto;
    min-width: 10vw;
    width: ${({width}) => width ? width : 'auto'};

    &:hover{
        transition: 0.5s ease-in-out;
        filter: brightness(1.1);
        transform: scale(1.05);
    }

    .icon{
        margin-right: 15px;
    }
`
