import { AiOutlineDown } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';

import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  ListItem,
  CheckboxLabel,
  CheckboxInput,
  IconWrapper,
  Icon
} from './styles';

const MultiSelectDropdown = ({ options, days = [], onChange, name = "Selecione", width = '200px', color = '#333', oneSelect = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(days);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (oneSelect && selectedOptions.length > 1) {
      const newSelectedOption = selectedOptions[selectedOptions.length - 1];
      setSelectedOptions([newSelectedOption]);
      setSelectedOption(newSelectedOption);
      onChange([newSelectedOption]);
    }
  }, [selectedOptions, oneSelect, onChange]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option, index) => {
    if (oneSelect) {
      setSelectedOptions([option]);
      setSelectedOption(option);
      onChange([option], index);
    } else {
      const updatedSelection = [...selectedOptions];
      const index = updatedSelection.indexOf(option);

      if (index === -1) {
        updatedSelection.push(option);
      } else {
        updatedSelection.splice(index, 1);
      }

      setSelectedOptions(updatedSelection);
      onChange(updatedSelection, index);
    }
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown} width={width} color={color}>
        {name}
        <IconWrapper>
          <Icon>
            <AiOutlineDown size={15} />
          </Icon>
        </IconWrapper>
      </DropdownButton>
      {isOpen && (
        <DropdownList width={width} color={color}>
          {options.map((option, index) => (
            <ListItem key={option}>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option, index)}
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
