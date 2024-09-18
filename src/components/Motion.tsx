import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

export interface MotionProps extends React.ComponentProps<typeof motion.div> {}

export const Motion: React.FC<PropsWithChildren<MotionProps>> = props => {
	const {
		children,
		transition = {
			mass: 1.5,
			stiffness: 150,
			type: 'spring',
		},
		whileInView,
		...rest
	} = props;

	return (
		<motion.div
			transition={transition}
			whileInView={{ ...(whileInView as object), transition }}
			{...rest}
		>
			{children}
		</motion.div>
	);
};
