import styled from "styled-components";

export const Container = styled.div`
        background-color: #fff;
        justify-content: center;
        box-sizing: border-box;
        align-items: center;
        height: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
    
`

export const TitleContainer = styled.section`
    position: relative;
    height: 95vh;
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
        margin: 0 20px;
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

    button:first-child{
        margin-left: 0;
    }

    .logout, .logout > svg{
        color: #DC143C;
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

export const Carroussel = styled.div`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: auto;
    width: 100%;
`

export const InfoContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    display: flex;
    height: auto;
    width: 100%;
    margin-top: 10vh;
`

export const InfoRow = styled.div`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    display: flex;
    width: 100%;
`
export const InfoBox = styled.div`
    padding: 30px;
    height: 25vh;
    width: 40vw;

    span{
        background-image: linear-gradient(to right, #066687, #024778);
        border-radius: 15px 5px 15px 5px;
        padding: 15px;
        font-weight: 900;
        color: #fff;
    }

    p{
        margin-top: 50px;
        color: #363636;
        font-size: 16px;
    }
`

export const ButtonsContainer = styled.div`
 flex-direction: row;
 align-items: center;
 display: flex;
 width: 100%;
`