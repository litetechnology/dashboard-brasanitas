import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';

export const ImageInputContainer = styled.div`
  width: 100%;
  input {
    display: none;
  }
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const ImageLabel = styled.label`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: 50px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  border-radius: 5px;
  object-fit: cover;
  height: 100px;
  width: 100px;
  margin: 0 5px;
`;

export const ImageContainer = styled.div`
    justify-content: center;
    flex-direction: row;
    display: flex;
    align-items: center;
`
