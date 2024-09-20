import { createBrowserRouter } from 'react-router-dom';
import { Routes } from 'src/constant';
import { Layout } from 'src/layout';
import { Home, NotFound, Projects } from 'src/pages';

export const router = createBrowserRouter([
	{
		children: [
			{
				element: <Home />,
				index: true,
			},
			{
				element: <Projects />,
				path: Routes.Projects,
			},
			{
				element: <NotFound />,
				path: Routes.NotFound,
			},
		],
		element: <Layout />,
		path: Routes.Home,
	},
]);
