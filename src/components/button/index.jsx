import React from 'react';

import { Container } from './styles';

const Button = ({name, Icon, onButton, width, height}) => {

return (
			<Container width={width} height={height} onClick={() => onButton()}>
				{
					Icon && <Icon size={24} color={'#eeeeee'}/>
				}
				{
					name
				}
			</Container>
	)

}

export default Button

