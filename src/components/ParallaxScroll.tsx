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
import { LazyLoadImage } from 'react-lazy-load-image-component';

export interface images {
	alt: string;
	index: number;
	src: string;
}

interface ParallaxScrollProps {
	baseVelocity: number;
	images: images[];
}

export const ParallaxScroll: React.FC<
	PropsWithChildren<ParallaxScrollProps>
> = props => {
	const { baseVelocity, images } = props;
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
		} else {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<Box
			sx={{
				display: 'flex',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
			}}
		>
			<Box
				component={motion.div}
				style={{ x }}
				sx={{
					display: 'flex',
					flexWrap: 'nowrap',
				}}
			>
				{[...images, ...images, ...images].map((image, index) => {
					const { alt, src } = image;
					return (
						<Box
							alt={alt}
							component={LazyLoadImage}
							key={index}
							src={src}
							sx={{
								aspectRatio: 3 / 2,
								marginRight: theme.spacing(2),
								objectFit: 'contain',
								width: theme.spacing(12),
							}}
						/>
					);
				})}
			</Box>
		</Box>
	);
};
