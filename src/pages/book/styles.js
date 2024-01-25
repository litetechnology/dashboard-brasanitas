import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`
export const EditContainer = styled.div`
    height: auto;
    margin: 0 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    width: 50%;
    
    .buttons{
        margin: 5vh 0;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        display: flex;
        width: 50%;
    }
`

export const BoxContainer = styled.div`
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
    display: flex;
    height: auto;
    width: 100%;
`

export const Box = styled.div`

    display: flex;
    width: 40vw;
    height: auto;
    min-height: 25vh;
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    color: ${({theme}) => theme.colors.text};
    border-radius: 5px;
    padding: 2% 5%;
    flex-direction: column;
    margin: 2vh 0;
`