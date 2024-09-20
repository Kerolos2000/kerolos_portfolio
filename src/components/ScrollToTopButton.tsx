import ArrowUpwardIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { Fab, useTheme } from '@mui/material';
import { useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Motion } from './Motion';

export interface ScrollToTopButtonProps {}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = () => {
	const theme = useTheme();
	const { scrollY } = useScroll();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		return scrollY.on('change', y => {
			if (y > 300) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		});
	}, [scrollY]);

	const scrollToTop = () => {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	};

	return (
		<Motion
			animate={{
				opacity: visible ? 1 : 0,
				y: visible ? 0 : 50,
			}}
			style={{
				bottom: theme.spacing(3),
				position: 'fixed',
				right: theme.spacing(3),
				zIndex: 1000,
			}}
			whileHover={{ scale: 1.1 }}
		>
			<Fab
				aria-label='scroll back to top'
				color='primary'
				onClick={scrollToTop}
				size='medium'
			>
				<ArrowUpwardIcon />
			</Fab>
		</Motion>
	);
};
