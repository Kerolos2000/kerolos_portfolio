import { createBrowserRouter } from 'react-router-dom';
import { Layout } from 'src/layout';
import { Home, NotFound } from 'src/pages';

export const router = createBrowserRouter([
	{
		children: [
			{
				element: <Home />,
				index: true,
			},
		],
		element: <Layout />,
		path: '/',
	},
	{
		element: <NotFound />,
		path: '*',
	},
]);
