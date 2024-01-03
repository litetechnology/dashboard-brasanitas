import React from 'react';

import { Container, Box, Size } from './styles';
import Button from '../button';

const Navinfo = ({name, subname, size, buttonName, onButton, Icon, width}) => {

return (
			<Container width={width}>
				<Box>
					<h3>{name}</h3>
					<Size>
						{size} {subname}
					</Size>
				</Box>
				<Box>
					<Button Icon={Icon} name={buttonName} onButton={() => onButton()}/>
				</Box>
			</Container>
	)

}

export default Navinfo

