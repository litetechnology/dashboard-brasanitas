// styles.js
import styled from 'styled-components';

export const Container = styled.div`
 background-color: rgba(0, 0, 0, 0.9); /* Cor preta com transparência */
    height: 100vh;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 9;

`
export const CardContainer = styled.div`
  width: 50vw;
  height: 15vh;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;

  box-shadow: 20px 20px 30px rgba(0, 0, 0, .05);
  z-index: 10;
`;

export const Title = styled.span`
  font-weight: 600;
  color: rgb(31, 41, 55);
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(75, 85, 99);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  column-gap: 1rem;
  flex-shrink: 0;
`;

export const AcceptButton = styled.button`
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: rgb(17, 24, 39);
  font-weight: 500;
  border-radius: 0.5rem;
  color: #fff;
  padding: 0.625rem 1rem;
  border: none;
  transition: all .15s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(55, 65, 81);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
