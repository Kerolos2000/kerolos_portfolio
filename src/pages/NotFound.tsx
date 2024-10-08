import { Box, Button, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mode, Routes } from 'src/constant';
import { useChangeMode } from 'src/hooks';

import NotFoundIcon from '../assets/not-found.svg';

export interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { mode } = useChangeMode();

	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				height: '100%',
				justifyContent: 'center',
			}}
		>
			<Box
				component='img'
				src={NotFoundIcon}
				sx={{
					aspectRatio: '1/1',
					filter: mode === Mode.Dark ? 'saturate(2)' : 'none',
					height: theme.spacing(50),
				}}
			/>
			<Button
				onClick={() => navigate(Routes.Home)}
				variant='contained'
			>
				Go Home
			</Button>
		</Box>
	);
};
