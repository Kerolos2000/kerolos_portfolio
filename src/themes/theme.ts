import { ThemeOptions } from '@mui/material';

export const darkTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#040705',
			paper: '#2F3E35',
		},
		common: {
			black: '#000000',
			white: '#e0e0e0',
		},
		mode: 'dark',
		primary: {
			contrastText: '#e0e0e0',
			dark: '#1B2B23',
			light: '#4A5B51',
			main: '#2F3E35',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#3A4D41',
			light: '#a3b5a8',
			main: '#4A5B51',
		},
		text: {
			primary: '#e0e0e0',
			secondary: '#cfd8dc',
		},
	},
	shape: {
		borderRadius: 8,
	},
};

export const lightTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#EDF5E1',
			paper: '#f1ffff',
		},
		common: {
			black: '#2C3E50',
			white: '#ffffff',
		},
		mode: 'light',
		primary: {
			contrastText: '#ffffff',
			dark: '#388E3C',
			light: '#88B04B',
			main: '#4CAF50',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#6E7F5E',
			light: '#C2D1B5',
			main: '#88B04B',
		},
		text: {
			primary: '#2C3E50',
			secondary: '#6f797b',
		},
	},
	shape: {
		borderRadius: 8,
	},
};
