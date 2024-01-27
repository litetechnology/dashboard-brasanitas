import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    height: auto;
    display: flex;
    width: 100%;
`

export const BoxDataContainer = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    margin: 5vh 10px;
    text-align: center;
    display: flex;
    height: 15vh;
    width: 25vw;
    padding: 1%;

    p:nth-child(1){
        color: ${({theme}) => theme.colors.primary};
        letter-spacing: 1.6px;
        font-weight: 700;
        font-size: 40px;
    }
    p:nth-child(2){
        color: ${({theme}) => theme.colors.secondaryText};
        letter-spacing: 1.6px;
        font-weight: 400;
        font-size: 14px;
    }
`
export const DataContainer = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    height: auto;
    width: auto;
`

export const Row = styled.div`
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    margin: 2.5vh 0;
    display: flex;
`