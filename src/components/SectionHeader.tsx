import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { DEFAULT_TRANSITION } from 'src/constant';

import { Motion } from './Motion';
export interface SectionHeaderProps {
	title: string;
	description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = props => {
	const { description, title, ...rest } = props;
	const theme = useTheme();

	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				justifyContent: 'center',
			}}
			{...rest}
		>
			<Motion whileInView={{ x: [-500, 0] }}>
				<Typography
					sx={{
						'::before': {
							backgroundColor: theme.palette.primary.main,
							borderRadius: theme.shape.borderRadius,
							bottom: 0,
							content: '""',
							height: theme.spacing(1),
							left: 0,
							marginRight: theme.spacing(1),
							position: 'absolute',
							transition: DEFAULT_TRANSITION,
							width: '33%',
						},
						':hover::before': {
							width: '100%',
						},
						fontSize: 'calc(2rem + 2vw)',
						fontWeight: 'bold',
						position: 'relative',
						textAlign: 'center',
						width: 'fit-content',
					}}
					variant='h2'
					{...rest}
				>
					{title}
				</Typography>
			</Motion>

			{description ? (
				<Motion
					style={{
						display: 'flex',
						flex: 1,
						justifyContent: 'center',
						width: '100%',
					}}
					whileInView={{ x: [-500, 0] }}
				>
					<Typography
						sx={{
							color: 'text.secondary',
							textAlign: 'center',
							width: { md: '90%', xs: '100%' },
						}}
					>
						{description}
					</Typography>
				</Motion>
			) : null}
		</Box>
	);
};
