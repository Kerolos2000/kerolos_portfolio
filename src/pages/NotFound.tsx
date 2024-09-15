import { Box, Typography } from '@mui/material';
import React from 'react';

export interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
	return (
		<Box>
			<Typography>NotFound</Typography>
		</Box>
	);
};
