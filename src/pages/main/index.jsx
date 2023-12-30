import React from 'react';

import { Container, Box, TextContainer, ButtonContainer } from './styles';
import linhas from '../../assets/images/linhas.png';
import logos from '../../assets/images/logos.png';

const Main = () => {

    return (
                    <Container>
                       <img src={linhas} alt="linhas" id="linhas"/>
                        <Box>
                            <img src={logos} alt="logos"/>
                            <TextContainer>
                                    <h1>DASHBOARD</h1>
                                    <h3>Controle de atividades</h3>
                            </TextContainer>
                            <ButtonContainer>
                                    <button href="/dashboard" >Ir para dashboard</button>
                                    <button href="/formulario">Preencher formulario</button>
                            </ButtonContainer>
                        </Box>
                    </Container>
    )
}

export default Main