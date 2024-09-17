import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { DEFAULT_TRANSITION } from 'src/constant';

import { Motion } from './Motion';
export interface SectionHeaderProps {
	title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = props => {
	const { title, ...rest } = props;
	const theme = useTheme();

	return (
		<Motion whileInView={{ x: [-500, 0] }}>
			<Box
				sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
				{...rest}
			>
				<Typography
					sx={{
						'::before': {
							backgroundColor: theme.palette.primary.main,
							borderRadius: theme.shape.borderRadius,
							bottom: 0,
							content: '""',
							height: theme.spacing(1),
							left: 0,
							marginRight: theme.spacing(1),
							position: 'absolute',
							transition: DEFAULT_TRANSITION,
							width: '33%',
						},
						':hover::before': {
							width: '100%',
						},
						fontSize: 'calc(2rem + 2vw)',
						fontWeight: 'bold',
						position: 'relative',
						textAlign: 'center',
						width: 'fit-content',
					}}
					variant='h2'
					{...rest}
				>
					{title}
				</Typography>
			</Box>
		</Motion>
	);
};
