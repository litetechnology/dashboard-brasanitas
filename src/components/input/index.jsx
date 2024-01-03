import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Container, InputField, IconContainer } from './styles';

const Input = ({ Icon, password, onClick, placeholder, value, onInput, width }) => {
  const [showPassword, setShowPassword] = useState(false);
  const InputType = password && !showPassword ? 'password' : 'text';
  const inputRef = useRef(null);

  useEffect(() => {
    // Mantém o foco no input após cada renderização
    inputRef.current.focus();
  }, [value]);

  return (
    <Container width={width}>
      {Icon && <IconContainer>{<Icon />}</IconContainer>}
      <InputField
        ref={inputRef}
        type={InputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onInput(e.target.value)}
      />
      {password && (
        <IconContainer onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </IconContainer>
      )}
      {onClick && Icon && (
        <IconContainer onClick={onClick}>
          {<Icon />}
        </IconContainer>
      )}
    </Container>
  );
};

export default Input;
