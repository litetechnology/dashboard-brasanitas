import styled from "styled-components";

export const Container = styled.div`
        background-color: #fff;
        justify-content: center;
        box-sizing: border-box;
        align-items: center;
        height: auto;
        display: flex;
        width: 100%;
    
`

export const TitleContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
`;
export const TitleBoxContainer = styled.div`
    box-shadow: 0px 8px 19px 0px rgba(0,0,0,0.1);
    justify-content: space-evenly;
    border-radius: 5px 0 0 5px;
    background-color: #fff;
    flex-direction: column;
    top: calc(50% - 35vh);
    position: absolute;
    padding: 30px;
    display: flex;
    height: 40vh;
    width: 60vw;
    right: 0;

    h1{
        font-weight: 900;
        color: #262626;
        font-size: 40px;
    }
    p{
        font-weight: 500;
        color: #363636;
        font-size: 20px;
    }
    button{
        background-image: linear-gradient(to right, #066687, #024778);
        -webkit-background-clip: text;
        background-color: transparent;
        align-items: center;
        letter-spacing: 0.2px;
        color: transparent;
        font-weight: 800;
        font-size: 15px;
        display: flex;
        inset: unset;
        border: none;

        &:hover{
            letter-spacing: 1px;
            transition: 0.5s;
            svg {
                transform: translateX(5px);
            }
        }
        svg{
            margin-left: 10px;
            color: #066687;
        }

    }
`;

export const Image = styled.img`
    border-radius: 0 0 500px 0;
    position: absolute;
    height: auto;
    width: 50vw;
    left: 0;
    top: 0;
`