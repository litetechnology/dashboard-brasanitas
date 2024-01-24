
import styled from 'styled-components'

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100vh;
    width: 100%;

`

export const Background = styled.div`

  padding: 2%;
  height: 100vh;
  width: 100%;
  overflow:auto; 
  `

export const Menu = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    height: 100vh;
    width: 15vw;
    
    .header {

        width: 100%;
        height: 10vh;
        
        img {
            height: 100%;
            width: 100%;
        }
    }
    
    .buttons {
        flex-direction: column;
        display: flex;
        height: 90vh;
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
    margin: 5px auto;
    border: none;
    inset: unset;
    height: 50px;
    padding: 5%;
    width: 80%;

    
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
export const Paste = styled.button`
    background-color: ${({select}) => select ? 'rgba(238, 238, 238, 0.085)' : 'transparent'};
    justify-content: space-between;
    flex-direction: row-reverse;
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
        font-weight: 500;
        font-size: 14px;
    }

    &:hover{
        background-color: rgba(238, 238, 238, 0.085);
        transition: 0.5s;
    }

`
