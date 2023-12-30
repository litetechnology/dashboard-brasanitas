
import styled from 'styled-components'

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100vh;
    width: 100%;

`

export const Background = styled.div`
  overflow: auto;
  padding: 2.5%;
  height: 100%;
  width: 100%;
  `

export const Menu = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    height: 100vh;
    width: 15vw;
    
    .header {
        min-height: 10vh;
        height: auto;
        width: 100%;
        
        img {
            transform: translateY(-2px);
            height: 100%;
            width: 100%;
        }
    }
    
    .buttons {
        flex-direction: column;
        display: flex;
        height: 100%;
        padding: 5%;
        width: 100%;
    }
`

export const MenuSelector = styled.button`
    background-color: ${({select}) => select ? 'rgba(238, 238, 238, 0.085)' : 'transparent'};
    justify-content: start;
    flex-direction: row;
    align-items: center;
    border-radius: 2px;
    display: flex;
    margin: 5px 0;
    border: none;
    inset: unset;
    height: 50px;
    padding: 5%;
    width: 100%;
    
    p {
        color: ${({theme}) => theme.colors.text};
        letter-spacing: 1.6px;
        line-height: normal;
        margin-left: 15px;
        font-weight: 500;
        font-size: 14px;
    }

    &:hover{
        background-color: rgba(238, 238, 238, 0.085);
        transition: 0.5s;
    }

`
