import { createBrowserRouter } from 'react-router-dom';
import { Routes } from 'src/constant';
import { Layout } from 'src/layout';

export const router = createBrowserRouter([
	{
		children: [
			{
				index: true,
				async lazy() {
					const { Home } = await import('src/pages');
					return { Component: Home };
				},
			},
			{
				async lazy() {
					const { Projects } = await import('src/pages');
					return { Component: Projects };
				},
				path: Routes.Projects,
			},
			{
				async lazy() {
					const { NotFound } = await import('src/pages');
					return { Component: NotFound };
				},
				path: Routes.NotFound,
			},
		],
		element: <Layout />,
		path: Routes.Home,
	},
]);
