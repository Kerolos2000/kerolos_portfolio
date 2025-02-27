import { GlobalStyles as MuiGlobalStyles, useTheme } from '@mui/material';
import React from 'react';
import { DEFAULT_TRANSITION } from 'src/constant';

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
				':root': {
					'--toastify-color-dark': '#121212',
					'--toastify-color-error': '#e74d3c',
					'--toastify-color-info': '#3498db',
					'--toastify-color-light': '#f8f8f8',
					'--toastify-color-success': '#07bc0c',
					'--toastify-color-warning': '#FFA726',
					'--toastify-font-family': '"Inter Variable", sans-serif',
					'--toastify-text-color-dark': '#121212',
					'--toastify-text-color-light': '#757575',
					'--toastify-toast-background': '#f8f8f8',
				},
				'.image-wrapper img': {
					'&:hover': {
						objectPosition: 'bottom',
					},
					objectPosition: 'top',
					transition: DEFAULT_TRANSITION,
				},
				'.lazy-load-image-background.blur': {
					filter: 'blur(15px)',
				},
				'.lazy-load-image-background.blur.lazy-load-image-loaded': {
					filter: 'blur(0)',
					transition: 'filter .3s',
				},
				'.lazy-load-image-background.blur.lazy-load-image-loaded > img': {
					opacity: 1,
					transition: 'opacity .3s',
				},
				'.lazy-load-image-background.blur > img': {
					opacity: 0,
				},
				'.parallax': {
					display: 'flex',
					flexWrap: 'nowrap',
					letterSpacing: '-2px',
					lineHeight: 0.8,
					margin: 0,
					overflow: 'hidden',
					whiteSpace: 'nowrap',
				},
				'.parallax .scroller': {
					display: 'flex',
					flexWrap: 'nowrap',
					fontSize: '64px',
					fontWeight: 600,
					textTransform: 'uppercase',
					whiteSpace: 'nowrap',
				},
				'.parallax span': {
					display: 'block',
					marginRight: '30px',
				},
				'.text-wrap': {
					display: 'inline-block !important',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					width: '100%',
				},
				'*::-webkit-scrollbar': {
					width: theme.spacing(0.75),
				},
				'*::-webkit-scrollbar-thumb': {
					'&:hover': {
						backgroundColor: theme.palette.primary.dark,
					},
					backgroundColor: theme.palette.primary.main,
				},
				body: {
					overflowX: 'hidden',
					transition: 'color 0.5s ease, background-color 0.5s ease',
				},
				html: {
					scrollBehavior: 'smooth',
				},
			}}
		/>
	);
};
