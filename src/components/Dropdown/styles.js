import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownButton = styled.button`
  justify-content: center;
    background-color: ${({color}) => color };
  align-items: center;
  cursor: pointer;
  padding: 15px;
  display: flex;
  width: ${({width}) => width};
  height: 50px;
  border: none;
  color: #fff;

  &:hover {
    background-color: #303030;
    transition: 0.2s;
  }
`;

export const DropdownList = styled.ul`
  border: 0.1px solid rgba(238, 238, 238, 0.35);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transform: translateY(10px);
    background-color: ${({color}) => color };
  position: absolute;
  list-style: none;
  width: ${({width}) => width};
  padding: 8px;
  max-height: 35vh;
  height: auto;
  overflow-y: scroll;
  margin: 0;
  z-index: 15;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
  padding: 5px;
`;

export const CheckboxLabel = styled.label`
  align-items: center;
  color: #eeeeee;
  display: flex;
`;

export const CheckboxInput = styled.input`
  border: 1px solid ${({theme}) => theme.colors.text};
  margin-right: 5px;
  appearance: none;
  width: 16px;
  border-radius: 3px;
  background-color: #333;
  cursor: pointer;
  height: 16px;
  
  margin-right: 10px;
  &:checked {
      border: 1px solid ${({theme}) => theme.colors.primary};
      background-color: ${({theme}) => theme.colors.primary};
    }
    `;

export const CheckboxText = styled.span`
  flex-grow: 1;
`;

export const IconWrapper = styled.span`
  margin-left: auto;
`;

export const Icon = styled.span`
  margin-left: 5px;
  font-size: 18px;
`;
