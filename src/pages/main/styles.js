import styled from "styled-components";

export const Container = styled.div`
        background: linear-gradient(90deg, #024778 0%, #066687 100%);
        justify-content: center;
        box-sizing: border-box;
        align-items: center;
        height: 100vh;
        display: flex;
        width: 100%;
    
        #linhas{
            position: absolute;
            height: 100vh;
            width: 100vw;
            z-index: 1;
        }
    `

export const Box = styled.div`
        flex-direction: column;
        justify-content: space-around;
        box-sizing: border-box;
        align-items: center;
        min-height: 100vh;
        display: flex;
        padding: 2.5%;
        height: auto;
        width: 100%;
        z-index: 2;
`

export const TextContainer = styled.div`
        flex-direction: column;
        align-items: center;
        display: flex;
        margin: 2.5%;

        h1 {
            color: ${({theme}) => theme.colors.primary};
            font-weight: 900;
            font-size: 96px;
        }

        h3 {
            color: ${({theme}) => theme.colors.text};
            font-weight: 800;
            font-size: 35px;
        }
`

export const ButtonContainer = styled.div`
        justify-content: space-evenly;
        flex-direction: row;
        align-items: center;
        padding: 2.5%;
        display: flex;
        width: 20vw;

        button {
            background-color: ${({theme}) => theme.colors.secondary};
            color: ${({theme}) => theme.colors.text};
            inset: unset;
            border: none;
            border-radius: 2px;
            padding: 5px 10px;
            width: 45%;
            height: 40px;
            border: 0.1px solid rgba(238, 238, 238, 0.35);
        }

        button:hover {
            filter: brightness(1.05);
            transform: scale(1.05);
            transition: 0.5s;
        }

    `
