import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    display: flex;
    height: auto;
    width: 100%;
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

export const Question = styled.div`
    flex-direction: column;
    position: relative;
    align-items: start;

    display: flex;
    height: auto;
    width: 100%;
    margin: 20px 0;

    `
export const Value = styled.div`
    background-color: #262626;
    flex-direction: column;
    border-radius: 2px;
    align-items: start;
    min-height: 50px;
    padding: 20px;
    display: flex;
    height: auto;
    width: 100%;
`

export const LabelContainer = styled.div`
margin-bottom: 15px;
font-weight: 600;

label{
    color: ${({theme}) => theme.colors.text};
    margin-right: 10px;
    font-size: 18px;
    
    span {
        color: ${({theme}) => theme.colors.secondaryText};
        position: relative;
        font-size: 13px;
        
    }
}

.waterSpan{
    color: ${({theme}) => theme.colors.primary};
    font-size: 14px;
}

`