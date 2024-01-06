import styled from "styled-components";

export const Container = styled.div`

    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    height: auto;
    display: flex;
    width: 100%;
    padding-top: 2%;

`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    border-radius: 5px;
    height: auto;
    padding: 5%;
    width: 50vw;

`

export const Title = styled.div`
    margin-bottom: 10vh;
    h1 {
        color: ${({theme}) => theme.colors.text};
        font-weight: 800;
        font-size: 40px;
    }
    h3, span {
        color: ${({theme}) => theme.colors.secondaryText};
    }
    h3 > span {
        color: ${({theme}) => theme.colors.primary};
    }
`

export const Question = styled.div`
    flex-direction: column;
    position: relative;
    align-items: start;
    margin: 50px 0;
    display: flex;
    height: auto;
    width: 100%;

    `

export const LabelContainer = styled.div`
margin-bottom: 15px;
font-weight: 600;
span {
    color: rgba(255, 0, 0, 0.60);
    font-size: 15px;
    position: absolute;
}

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
    font-size: 16px;
}

`