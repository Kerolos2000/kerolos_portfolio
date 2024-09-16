import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './providers';
import { router } from './routes';

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<ThemeProvider>
			<SpeedInsights />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};
