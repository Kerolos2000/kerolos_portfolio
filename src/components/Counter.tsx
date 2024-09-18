import { Typography, useTheme } from '@mui/material';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

import { Motion } from './Motion';
import { HStack, TypographyWithBorder } from './StyledComponents';

export interface CounterProps {
	title: string;
	count: number;
	duration?: number;
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
		<Motion onViewportEnter={startAnimation}>
			<TypographyWithBorder variant='h6'>{title}</TypographyWithBorder>
			<HStack sx={{ alignItems: 'center' }}>
				<Typography
					color='secondary'
					variant='h3'
				>
					+
				</Typography>
				<motion.h3
					style={{
						color: theme.palette.secondary.main,
						fontSize: theme.typography.h3.fontSize,
						margin: 0,
					}}
				>
					{rounded}
				</motion.h3>
			</HStack>
		</Motion>
	);
};
