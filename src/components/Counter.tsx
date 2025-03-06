import { Typography, useTheme } from '@mui/material';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

import { HStack, TypographyWithBorder } from './StyledComponents';

export interface CounterProps {
	count: number;
	duration?: number;
	title: string;
}

export const Counter: React.FC<CounterProps> = props => {
	const { count, duration = 1, title } = props;
	const theme = useTheme();
	const motionCount = useMotionValue(0);
	const rounded = useTransform(motionCount, Math.round);

	const startAnimation = () => {
		const animation = animate(motionCount, count, {
			duration,
		});

		return () => animation.stop();
	};

	return (
		<motion.div onViewportEnter={startAnimation}>
			<TypographyWithBorder
				className='text-wrap'
				variant='h6'
			>
				{title}
			</TypographyWithBorder>
			<HStack sx={{ alignItems: 'center' }}>
				<Typography
					color='primary'
					variant='h3'
				>
					+
				</Typography>
				<motion.h3
					style={{
						fontSize: theme.typography.h3.fontSize,
						margin: 0,
					}}
					viewport={{ once: true }}
				>
					{rounded}
				</motion.h3>
			</HStack>
		</motion.div>
	);
};
