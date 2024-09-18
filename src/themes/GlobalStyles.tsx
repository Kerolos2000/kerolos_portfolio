import { GlobalStyles as MuiGlobalStyles, useTheme } from '@mui/material';
import React from 'react';

export interface GlobalStylesProps {}

export const GlobalStyles: React.FC<GlobalStylesProps> = () => {
	const theme = useTheme();

	return (
		<MuiGlobalStyles
			styles={{
				'::selection': {
					background: theme.palette.secondary.light,
					color: theme.palette.primary.main,
				},
				'.text-wrap': {
					display: 'inline-block !important',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					width: '100%',
				},
				'*::-webkit-scrollbar': {
					width: theme.spacing(1.5),
				},
				'*::-webkit-scrollbar-thumb': {
					'&:hover': {
						backgroundColor: theme.palette.primary.dark,
					},
					backgroundColor: theme.palette.primary.main,
				},
				body: {
					overflowX: 'hidden',
					transition: 'color 0.5s ease , background-color 0.5s ease',
				},
				html: {
					scrollBehavior: 'smooth',
				},
			}}
		/>
	);
};
