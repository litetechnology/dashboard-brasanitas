import { AiOutlineDown } from 'react-icons/ai';
import React, { useState } from 'react';

import { DropdownContainer, DropdownButton, DropdownList, ListItem, CheckboxLabel, CheckboxInput, IconWrapper, Icon } from './styles';

const MultiSelectDropdown = ({ options, days=[], onChange, name="Selecione", width='200px'}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(days);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    const updatedSelection = [...selectedOptions];
    const index = updatedSelection.indexOf(option);

    if (index === -1) {
      updatedSelection.push(option);
    } else {
      updatedSelection.splice(index, 1);
    }

    setSelectedOptions(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown} width={width}>
        {name}
        <IconWrapper>
          <Icon>
            <AiOutlineDown size={15}/>
          </Icon>
        </IconWrapper>
      </DropdownButton>
      {isOpen && (
        <DropdownList width={width}>
          {options.map((option) => (
            <ListItem key={option}>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                {option}
              </CheckboxLabel>
            </ListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default MultiSelectDropdown;
