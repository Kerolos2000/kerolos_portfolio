import { Box, useTheme } from '@mui/material';
import React from 'react';
import { ParallaxScroll, Section, SectionHeader } from 'src/components';
import { ImagesLeft, ImagesRight } from 'src/config';
import { Sections } from 'src/constant';

export interface SkillsSectionProps {}

export const SkillsSection: React.FC<SkillsSectionProps> = () => {
	const theme = useTheme();
	return (
		<Section
			disableGutters
			id={Sections.Skills}
			maxWidth={false}
		>
			<SectionHeader
				description='I have experience with these technologies, and I am always looking for new and exciting projects to work on'
				title='Skills'
			/>
			<Box
				sx={{
					'::after': {
						background: `linear-gradient(90deg, transparent, ${theme.palette.background.default})`,
						content: '""',
						height: '100%',
						position: 'absolute',
						right: 0,
						top: 0,
						width: theme.spacing(5),
						zIndex: 1,
					},
					'::before': {
						background: `linear-gradient(270deg, transparent, ${theme.palette.background.default})`,
						content: '""',
						height: '100%',
						left: 0,
						position: 'absolute',
						top: 0,
						width: theme.spacing(5),
						zIndex: 1,
					},
					display: 'flex',
					flexDirection: 'column',
					gap: theme.spacing(4),
					position: 'relative',
					py: 2,
				}}
			>
				<ParallaxScroll
					baseVelocity={-2}
					images={ImagesLeft}
				/>
				<ParallaxScroll
					baseVelocity={2}
					images={ImagesRight}
				/>
			</Box>
		</Section>
	);
};
