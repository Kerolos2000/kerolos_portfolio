import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { Mode } from 'src/constant';
import { useChangeMode } from 'src/hooks';
import { darkTheme, lightTheme } from 'src/themes';

interface ThemeProviderProps {}

export const ThemeProvider = (
	props: React.PropsWithChildren<ThemeProviderProps>,
) => {
	const { children } = props;

	const { mode } = useChangeMode();

	const theme = useMemo(
		() => createTheme(mode === Mode.Dark ? darkTheme : lightTheme, {}),
		[mode],
	);

	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
