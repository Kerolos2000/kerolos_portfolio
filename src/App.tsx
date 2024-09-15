import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};
