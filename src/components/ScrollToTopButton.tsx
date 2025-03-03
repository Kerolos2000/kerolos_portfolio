import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Fab, useScrollTrigger, useTheme } from '@mui/material';
import React from 'react';
import { DEFAULT_MOTION_SCALE } from 'src/constant';

import { Motion } from './Motion';

export interface ScrollToTopButtonProps {}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = () => {
	const theme = useTheme();

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 300,
	});

	const scrollToTop = () => {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	};

	return (
		<Motion
			animate={{
				y: trigger ? 0 : 100,
			}}
			style={{
				bottom: theme.spacing(3),
				position: 'fixed',
				right: theme.spacing(3),
				zIndex: 1000,
			}}
			whileHover={DEFAULT_MOTION_SCALE}
		>
			<Fab
				aria-label='scroll back to top'
				color='primary'
				onClick={scrollToTop}
				size='medium'
			>
				<KeyboardArrowUpOutlinedIcon sx={{ fontSize: 30 }} />
			</Fab>
		</Motion>
	);
};
