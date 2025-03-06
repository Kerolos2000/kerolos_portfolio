import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Box, Fab, useScrollTrigger } from '@mui/material';
import React from 'react';

import { Motion } from './Motion';

export interface ScrollToTopButtonProps {}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = () => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 300,
	});

	const scrollToTop = () => {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	};

	return (
		<Box
			animate={{
				y: trigger ? 0 : 100,
			}}
			component={Motion}
			sx={{
				bottom: 20,
				position: 'fixed',
				right: 20,
				zIndex: 1000,
			}}
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
		>
			<Fab
				aria-label='scroll back to top'
				color='primary'
				onClick={scrollToTop}
				size='small'
				sx={{ borderRadius: 1 }}
			>
				<KeyboardArrowUpOutlinedIcon sx={{ fontSize: 30 }} />
			</Fab>
		</Box>
	);
};
