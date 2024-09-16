import { Box, Typography, useTheme } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import WaterWave from 'react-water-wave';
import { Mode } from 'src/constant';
import { useChangeMode } from 'src/hooks';
import Typed from 'typed.js';

import background from '../assets/background.jpg';
export interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
	const theme = useTheme();
	const typedRef = useRef(null);
	const { mode } = useChangeMode();

	useEffect(() => {
		const typed = new Typed(typedRef.current, {
			backSpeed: 25,
			loop: true,
			strings: ['Frontend Developer', 'React Native Developer'],
			typeSpeed: 25,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<>
			<WaterWave
				imageUrl={background}
				resolution={500}
				style={{
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					filter: mode === Mode.dark ? 'saturate(0.5)' : 'none',
					height: '100vh',
					userSelect: 'none',
					width: '100%',
				}}
			>
				{() => (
					<Box
						id='HeroSection'
						sx={{
							alignItems: 'center',
							display: 'flex',
							height: '100%',
							justifyContent: 'center',
						}}
					>
						<Box
							gap={theme.spacing(1)}
							sx={{
								alignItems: 'center',
								display: 'flex',
								flexDirection: 'column',
								padding: theme.spacing(2),
							}}
						>
							<Typography
								sx={{
									color: theme.palette.primary.contrastText,
									fontSize: theme.spacing(4),
									fontWeight: 'bold',
									textAlign: 'center',
								}}
							>
								Hello I'm
							</Typography>
							<Typography
								sx={{
									color: theme.palette.secondary.light,
									fontSize: 'calc(2rem + 2vw);',
									fontWeight: 'bold',
									textAlign: 'center',
									textShadow: `0 0 ${theme.spacing(2.5)} ${theme.palette.common.black}`,
								}}
							>
								Kerolos Magdy
							</Typography>
							<Box
								sx={{
									alignItems: 'center',
									color: theme.palette.primary.contrastText,
									display: 'flex',
									justifyContent: 'center',
									minHeight: theme.spacing(5),
								}}
							>
								<Typography
									component='span'
									id='typed'
									ref={typedRef}
									sx={{ fontSize: theme.spacing(3), textAlign: 'center' }}
								/>
							</Box>
						</Box>
					</Box>
				)}
			</WaterWave>
		</>
	);
};
