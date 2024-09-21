import { useTheme } from '@mui/material';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useChangeMode } from './useChangeMode';

export function useNotify() {
	const theme = useTheme();
	const { mode } = useChangeMode();

	const defaultOptions: ToastOptions = {
		autoClose: 3000,
		closeOnClick: true,
		draggable: true,
		hideProgressBar: false,
		pauseOnHover: true,
		position: 'bottom-left',
		style: {
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary,
		},
		theme: mode,
	};

	const notify = (msg: string, options?: ToastOptions) => {
		const mergedOptions = { ...defaultOptions, ...options };
		toast(msg, mergedOptions);
	};

	return { notify, ToastContainer };
}
