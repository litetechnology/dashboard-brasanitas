import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.secondaryBackground};
  width: ${(props) => props.width || '100%'};
  color: ${({theme}) => theme.colors.text};
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 50px;
  padding: 8px;
`;

export const InputField = styled.input`
  color: ${({theme}) => theme.colors.text};
  background-color: transparent;
  outline: none;
  margin: 0 8px;
  border: none;
  flex: 1;
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  cursor: pointer;
`;

