import { Box, Container, ContainerOwnProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export interface SectionProps extends ContainerOwnProps {
	id: string;
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = props => {
	const { children, disableGutters, id, maxWidth = 'xl', sx, ...rest } = props;

	return (
		<Box
			component='section'
			id={id}
			sx={{
				overflow: 'hidden',
				py: 4,
				...sx,
			}}
			{...rest}
		>
			<Container
				disableGutters={disableGutters}
				maxWidth={maxWidth}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
				}}
			>
				{children}
			</Container>
		</Box>
	);
};
