import React from 'react';
import styled, { keyframes } from 'styled-components';
import c1 from '../../../assets/images/c1.png';
import c2 from '../../../assets/images/c2.png';
import c3 from '../../../assets/images/c3.png';
import c4 from '../../../assets/images/c4.png';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const CarrousselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarrousselInner = styled.div`
  display: flex;
  animation: ${scroll} 30s linear infinite;
`;

const CarrousselItem = styled.img`
  flex: 0 0 auto;
  margin: 0 20px; 
`;

const Carroussel = () => {
  const carroussel = [c1, c2, c3];
  const numItems = Math.ceil(100 / carroussel.length);

  const duplicatedItems = Array.from({ length: numItems }, (_, index) => index).flatMap(() => carroussel);

  return (
    <CarrousselContainer>
      <CarrousselInner>
        {duplicatedItems.map((image, index) => (
          <CarrousselItem src={image} alt={`Carousel Item ${index}`} key={index} />
        ))}
      </CarrousselInner>
    </CarrousselContainer>
  );
};

export default Carroussel;
