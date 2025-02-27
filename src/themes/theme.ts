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
			default: '#F8F9FA',
			paper: '#FFFFFF',
		},
		common: {
			black: '#1C1C1E',
			white: '#FFFFFF',
		},
		mode: 'light',
		primary: {
			contrastText: '#FFFFFF',
			dark: '#37474F',
			light: '#90A4AE',
			main: '#546E7A',
		},
		secondary: {
			contrastText: '#FFFFFF',
			dark: '#5D4037',
			light: '#D7CCC8',
			main: '#8D6E63',
		},
		text: {
			primary: '#2D2D2D',
			secondary: '#757575',
		},
		warning: {
			dark: '#D84315',
			light: '#FFCCBC',
			main: '#FF7043',
		},
	},
	shape: {
		borderRadius: 12,
	},
};
