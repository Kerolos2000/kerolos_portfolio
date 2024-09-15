import { ThemeOptions } from '@mui/material';

export const darkTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#121212',
			paper: '#0A0F11',
		},
		common: {
			black: '#000000',
			white: '#ffffff',
		},
		error: {
			contrastText: '#ffffff',
			main: '#d32f2f',
		},
		info: {
			contrastText: '#ffffff',
			main: '#0288d1',
		},
		mode: 'dark',
		primary: {
			contrastText: '#ffffff',
			dark: '#004e59',
			light: '#83c5be',
			main: '#006d77',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#805d93',
			light: '#e29578',
			main: '#805d93',
		},
		success: {
			contrastText: '#ffffff',
			main: '#2e7d32',
		},
		text: {
			disabled: 'rgba(255, 255, 255, 0.5)',
			primary: '#ffffff',
			secondary: '#cfd8dc',
		},
		warning: {
			contrastText: '#ffffff',
			main: '#ff9800',
		},
	},
	shape: {
		borderRadius: 8,
	},
};

export const lightTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#edf6f9',
			paper: '#f1ffff',
		},
		common: {
			black: '#000000',
			white: '#ffffff',
		},
		error: {
			contrastText: '#ffffff',
			main: '#ba1a1a',
		},
		info: {
			contrastText: '#ffffff',
			main: '#006d70',
		},
		mode: 'light',
		primary: {
			contrastText: '#ffffff',
			dark: '#004e59',
			light: '#83c5be',
			main: '#006d77',
		},
		secondary: {
			contrastText: '#ffffff',
			dark: '#805d93',
			light: '#e29578',
			main: '#805d93',
		},
		success: {
			contrastText: '#ffffff',
			main: '#006d43',
		},
		text: {
			disabled: 'rgba(25, 28, 29, 0.38)',
			primary: '#191c1d',
			secondary: '#6f797b',
		},
		warning: {
			contrastText: '#ffffff',
			main: '#795900',
		},
	},
	shape: {
		borderRadius: 8,
	},
};
