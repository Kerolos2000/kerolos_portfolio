import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
	return (
		<>
			<CssBaseline />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flexGrow: 1,
					minHeight: '100vh',
					padding: 2,
					width: '100%',
				}}
			>
				<Outlet />
			</Box>
		</>
	);
};
