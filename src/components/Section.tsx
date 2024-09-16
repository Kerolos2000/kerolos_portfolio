import { Container, ContainerOwnProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export interface SectionProps extends ContainerOwnProps {
	id: string;
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = props => {
	const { children, id, maxWidth = 'xl', sx, ...rest } = props;

	return (
		<Container
			component='section'
			id={id}
			maxWidth={maxWidth}
			sx={{ py: 2, ...sx }}
			{...rest}
		>
			{children}
		</Container>
	);
};
