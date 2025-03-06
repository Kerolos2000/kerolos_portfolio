import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

export interface MotionProps extends React.ComponentProps<typeof motion.div> {}

export const Motion: React.FC<PropsWithChildren<MotionProps>> = props => {
	const {
		children,
		initial = { scale: 0.9 },
		transition = {
			mass: 0.5,
			stiffness: 50,
			type: 'spring',
		},
		whileInView = { scale: 1 },
		...rest
	} = props;

	return (
		<motion.div
			initial={initial}
			style={{ willChange: 'scale' }}
			transition={transition}
			viewport={{ once: true }}
			whileInView={whileInView}
			{...rest}
		>
			{children}
		</motion.div>
	);
};
