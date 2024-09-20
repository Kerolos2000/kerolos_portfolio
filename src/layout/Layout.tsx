import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, ScrollToTopButton } from 'src/components';
import { AppBar, Footer } from 'src/features';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
	return (
		<>
			<Loader />
			<ScrollToTopButton />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flexGrow: 1,
					justifyContent: 'space-between',
					minHeight: '100vh',
					overflowX: 'hidden',
					width: '100%',
				}}
			>
				<AppBar />
				<Outlet />
				<Footer />
			</Box>
		</>
	);
};
