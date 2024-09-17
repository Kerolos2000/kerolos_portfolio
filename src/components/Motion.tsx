import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

export interface MotionProps extends React.ComponentProps<typeof motion.div> {}

export const Motion: React.FC<PropsWithChildren<MotionProps>> = props => {
	const {
		children,
		transition = { mass: 1, stiffness: 100, type: 'spring' },
		...rest
	} = props;

	return (
		<motion.div
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	);
};
