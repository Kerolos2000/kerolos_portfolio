import { CssBaseline } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './providers';
import { router } from './routes';
import { GlobalStyles } from './themes';

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
	const queryClient = new QueryClient();

	return (
		<ThemeProvider>
			<CssBaseline />
			<GlobalStyles />
			<SpeedInsights />
			<Analytics />
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ThemeProvider>
	);
};
