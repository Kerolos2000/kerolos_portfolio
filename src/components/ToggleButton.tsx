import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Mode } from 'src/constant';
import { useChangeMode } from 'src/hooks';
export interface ToggleButtonProps {}

export const ToggleButton: React.FC<ToggleButtonProps> = () => {
	const theme = useTheme();
	const { mode, setMode } = useChangeMode();
	const isDark = mode === Mode.Dark;

	const toggleSwitch = () => {
		setMode(isDark ? Mode.Light : Mode.Dark);
	};

	return (
		<Box
			className='switch'
			onClick={toggleSwitch}
			sx={{
				alignItems: 'center',
				backgroundColor: isDark
					? theme.palette.info.dark
					: theme.palette.warning.light,
				borderRadius: theme.shape.borderRadius * 5,
				boxShadow: theme.shadows[5],
				cursor: 'pointer',
				display: 'flex',
				height: theme.spacing(4),
				justifyContent: isDark ? 'flex-end' : 'flex-start',
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
					backgroundColor: isDark
						? theme.palette.info.main
						: theme.palette.warning.main,
					borderRadius: '50%',
					display: 'flex',
					height: theme.spacing(3),
					justifyContent: 'center',
					width: theme.spacing(3),
				}}
				transition={spring}
				whileHover={{ rotate: 360, scale: 0.9 }}
			>
				{isDark ? (
					<Brightness2Icon
						fontSize='small'
						sx={{ color: theme.palette.common.white }}
					/>
				) : (
					<Brightness7Icon
						fontSize='small'
						sx={{ color: theme.palette.common.black }}
					/>
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
