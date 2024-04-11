import React from 'react';
import { CardContainer, Title, Description, Actions, AcceptButton, Container } from './styles';

const Card = ({name, onClick}) => {
  return (
    <Container>
    <CardContainer>
      <Title>Bem vindo</Title>
      <Description>{name}, Seja bem vindo ao controle de atividades do complexo Vargem Grande</Description>
      <Actions>
        <AcceptButton onClick={onClick}>continuar</AcceptButton>
      </Actions>
    </CardContainer>
    </Container>
  );
};

export default Card;

