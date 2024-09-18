import { Box, Container, ContainerOwnProps, useTheme } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import { Motion } from './Motion';

export interface SectionProps extends ContainerOwnProps {
	id: string;
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = props => {
	const { children, id, maxWidth = 'lg', sx, ...rest } = props;

	const theme = useTheme();

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
				maxWidth={maxWidth}
				{...rest}
			>
				<Motion
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: theme.spacing(2),
					}}
					whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
				>
					{children}
				</Motion>
			</Container>
		</Box>
	);
};
