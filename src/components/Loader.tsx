import { alpha, useTheme } from '@mui/material';
import {
	animate,
	AnimatePresence,
	motion,
	useMotionValue,
	useTransform,
} from 'framer-motion';
import { useEffect, useState } from 'react';

export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
	const theme = useTheme();
	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);
	const [isVisible, setIsVisible] = useState(true);

	const body = document.body;

	useEffect(() => {
		body.style.overflow = 'hidden';
		const animation = animate(count, 100, {
			duration: 3,
			onComplete: () => {
				setIsVisible(false);
				body.style.overflow = 'auto';
			},
		});

		return () => animation.stop();
	}, [count]);

	return (
		<AnimatePresence>
			{isVisible ? (
				<motion.div
					exit={{
						opacity: 0,
						scale: 50,
						transition: { duration: 1 },
					}}
					style={{
						alignItems: 'center',
						backdropFilter: 'blur(10px)',
						backgroundColor: alpha(theme.palette.background.default, 0.75),
						bottom: 0,
						display: 'flex',
						flexDirection: 'column',
						height: '100vh',
						justifyContent: 'center',
						left: 0,
						position: 'fixed',
						right: 0,
						top: 0,
						zIndex: theme.zIndex.drawer + 1,
					}}
				>
					<motion.h1
						style={{
							color: theme.palette.primary.main,
							fontSize: theme.typography.h1.fontSize,
						}}
					>
						{rounded}
					</motion.h1>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};
