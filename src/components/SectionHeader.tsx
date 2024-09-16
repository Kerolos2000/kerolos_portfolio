import { Box, Typography } from '@mui/material';
import React from 'react';

export interface SectionHeaderProps {
	title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = props => {
	const { title, ...rest } = props;

	return (
		<Box
			sx={{ textAlign: 'center' }}
			{...rest}
		>
			<Typography
				sx={{ fontSize: 'calc(2rem + 2vw)', fontWeight: 'bold' }}
				variant='h2'
				{...rest}
			>
				{title}
			</Typography>
		</Box>
	);
};
