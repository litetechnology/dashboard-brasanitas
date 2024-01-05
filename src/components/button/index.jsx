import React from "react";

import { Container } from "./styles";

const Button = ({ name, Icon, onButton, width, height, center, color }) => {
  return (
    <Container
      width={width}
      height={height}
      center={center}
      color={color}
      onClick={() => onButton()}
    >
      {Icon && <Icon className='icon' size={24} color={"#eeeeee"} />}
      {name}
    </Container>
  );
};

export default Button;
