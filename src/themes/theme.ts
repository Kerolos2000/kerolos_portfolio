import { ThemeOptions } from '@mui/material';

export const darkTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#0D1117',
			paper: '#161B22',
		},
		common: {
			black: '#000000',
			white: '#E3E8EE',
		},
		info: {
			dark: '#0A192F',
			main: '#1B4F72',
		},
		mode: 'dark',
		primary: {
			contrastText: '#E3E8EE',
			dark: '#1E2D3D',
			light: '#3A506B',
			main: '#486581',
		},
		secondary: {
			contrastText: '#FFFFFF',
			dark: '#273A47',
			light: '#AAB7C4',
			main: '#5E7385',
		},
		text: {
			primary: '#E3E8EE',
			secondary: '#AAB7C4',
		},
	},
	shape: {
		borderRadius: 12,
	},
};

export const lightTheme: ThemeOptions = {
	palette: {
		background: {
			default: '#F7F8FA',
			paper: '#FFFFFF',
		},
		common: {
			black: '#1B1F23',
			white: '#FFFFFF',
		},
		mode: 'light',
		primary: {
			contrastText: '#FFFFFF',
			dark: '#1E4D63',
			light: '#A6C8DD',
			main: '#3D7EA6',
		},
		secondary: {
			contrastText: '#FFFFFF',
			dark: '#4A3D34',
			light: '#D4BEB3',
			main: '#A98272',
		},
		text: {
			primary: '#2A2A2E',
			secondary: '#72757E',
		},
		warning: {
			dark: '#9A3324',
			light: '#FFD5C2',
			main: '#E67E5A',
		},
	},
	shape: {
		borderRadius: 12,
	},
};
