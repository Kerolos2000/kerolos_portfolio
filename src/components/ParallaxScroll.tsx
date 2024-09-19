import { wrap } from '@motionone/utils';
import { Box, useTheme } from '@mui/material';
import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
} from 'framer-motion';
import React, { PropsWithChildren, useRef } from 'react';

export interface images {
	alt: string;
	src: string;
	index: number;
}

interface ParallaxScrollProps {
	baseVelocity: number;
	images?: images[];
}

export const ParallaxScroll: React.FC<
	PropsWithChildren<ParallaxScrollProps>
> = props => {
	const { baseVelocity = 100, children, images } = props;

	const theme = useTheme();
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});

	const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((_, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<Box className='parallax'>
			<motion.div
				className='scroller'
				style={{ x }}
			>
				{Array.from({ length: 4 }, (_, index) => (
					<Box
						className='span'
						component='span'
						key={index}
					>
						{images ? (
							images?.map(image => (
								<Box
									alt={image.alt}
									component='img'
									key={JSON.stringify(image)}
									src={image.src}
									sx={{
										aspectRatio: '1/1',
										height: theme.spacing(10),
										marginRight: theme.spacing(2),
										objectFit: 'contain',
									}}
								/>
							))
						) : (
							<Box
								component='span'
								sx={{ marginLeft: theme.spacing(2) }}
							>
								{children}
							</Box>
						)}
					</Box>
				))}
			</motion.div>
		</Box>
	);
};
