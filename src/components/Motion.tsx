import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

export interface MotionProps extends React.ComponentProps<typeof motion.div> {}

export const Motion: React.FC<PropsWithChildren<MotionProps>> = props => {
	const {
		children,
		transition = {
			mass: 1,
			stiffness: 50,
			type: 'spring',
		},
		whileInView,
		...rest
	} = props;

	return (
		<motion.div
			transition={transition}
			viewport={{ once: true }}
			whileInView={{ ...(whileInView as object), transition }}
			{...rest}
		>
			{children}
		</motion.div>
	);
};
