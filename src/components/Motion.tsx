import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

export interface MotionProps extends React.ComponentProps<typeof motion.div> {}

export const Motion: React.FC<PropsWithChildren<MotionProps>> = props => {
	const {
		children,
		initial = { opacity: 0, scale: 0.8 },
		transition = {
			mass: 1,
			stiffness: 50,
			type: 'spring',
		},
		whileInView = { opacity: 1, scale: 1 },
		...rest
	} = props;

	return (
		<motion.div
			initial={initial}
			style={{ willChange: 'transform, scale, opacity' }}
			transition={transition}
			whileInView={whileInView}
			{...rest}
		>
			{children}
		</motion.div>
	);
};
