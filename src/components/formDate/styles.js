import styled from 'styled-components';

export const DateInputContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const Input = styled.input`
  background-color: ${({color}) => color };
  width: ${({width}) => width };
  cursor: pointer;
  padding: 15px;
  height: auto;
  height: 50px;
  inset: unset;
  border: none;
  color: #fff;

  &::-webkit-calendar-picker-indicator {
    color: ${({theme}) => theme.colors.text};
    filter: invert(0.8) brightness(100%);
    cursor: pointer;
    height: 25px;
    width: 25px;
  }

`;

