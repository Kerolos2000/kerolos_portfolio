import { Box } from '@mui/material';
import React from 'react';
import { SectionHeader } from 'src/components';

export interface AboutMeProps {}

export const AboutMe: React.FC<AboutMeProps> = () => {
	return (
		<Box
			component='section'
			id='AboutMe'
			sx={{ my: 2 }}
		>
			<SectionHeader title='About Me' />
		</Box>
	);
};
