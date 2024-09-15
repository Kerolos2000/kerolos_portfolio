import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
export interface ToggleButtonProps {}

export const ToggleButton: React.FC<ToggleButtonProps> = () => {
	const theme = useTheme();
	const [isOn, setIsOn] = useState(false);
	const toggleSwitch = () => setIsOn(!isOn);

	return (
		<Box
			className='switch'
			data-isOn={isOn}
			onClick={toggleSwitch}
			sx={{
				'&[data-isOn="true"]': {
					justifyContent: 'flex-end',
				},
				alignItems: 'center',
				backgroundColor: isOn
					? theme.palette.info.dark
					: theme.palette.warning.light,
				borderRadius: theme.shape.borderRadius * 5,
				boxShadow: theme.shadows[5],
				cursor: 'pointer',
				display: 'flex',
				height: theme.spacing(4),
				justifyContent: 'flex-start',
				padding: theme.spacing(0.5),
				transition: 'background-color 0.3s ease',
				width: theme.spacing(10),
			}}
		>
			<motion.div
				className='handle'
				layout
				style={{
					alignItems: 'center',
					backgroundColor: isOn
						? theme.palette.common.black
						: theme.palette.common.white,
					borderRadius: '50%',
					display: 'flex',
					height: theme.spacing(4),
					justifyContent: 'center',
					width: theme.spacing(4),
				}}
				transition={spring}
				whileHover={{ rotate: 360, scale: 0.9 }}
			>
				{isOn ? (
					<Brightness2Icon sx={{ color: theme.palette.common.white }} />
				) : (
					<Brightness7Icon />
				)}
			</motion.div>
		</Box>
	);
};

const spring = {
	damping: 25,
	stiffness: 250,
	type: 'spring',
};
