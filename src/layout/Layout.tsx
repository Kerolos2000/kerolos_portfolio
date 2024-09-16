import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from 'src/themes';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
	return (
		<>
			<CssBaseline />
			<GlobalStyles />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flexGrow: 1,
					minHeight: '100vh',
					overflowX: 'hidden',
					width: '100%',
				}}
			>
				<Outlet />
			</Box>
		</>
	);
};
