import { Box, Container, ContainerOwnProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export interface SectionProps extends ContainerOwnProps {
	id: string;
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = props => {
	const { children, id, maxWidth = 'lg', sx, ...rest } = props;

	return (
		<Box
			component='section'
			id={id}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				overflow: 'hidden',
				py: 2,
				...sx,
			}}
			{...rest}
		>
			<Container
				maxWidth={maxWidth}
				{...rest}
			>
				{children}
			</Container>
		</Box>
	);
};
