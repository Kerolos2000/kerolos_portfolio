import { Box, useTheme } from '@mui/material';
import React from 'react';
import { images, ParallaxScroll, Section, SectionHeader } from 'src/components';
import { Sections } from 'src/constant';

import axios from '../assets/axios.png';
import Bootstrap from '../assets/Bootstrap.png';
import casl from '../assets/casl.png';
import css from '../assets/css.png';
import figma from '../assets/Figma.png';
import framerMotion from '../assets/framer-motion.webp';
import framer from '../assets/framer.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import i18 from '../assets/i18.png';
import illustrator from '../assets/illustrator.png';
import jquery from '../assets/jquery.png';
import js from '../assets/js.png';
import mui from '../assets/mui.png';
import paper from '../assets/paper.png';
import photoshop from '../assets/photoshop.png';
import reactAdmin from '../assets/react-admin.png';
import reactHookForm from '../assets/react-hook-form.png';
import reactNative from '../assets/react-native.png';
import reactQuery from '../assets/react-query.png';
import react from '../assets/react.png';
import ts from '../assets/ts.png';
import zod from '../assets/zod.png';
import zustand from '../assets/zustand.png';

const imagesLeft: images[] = [
	{ alt: 'TypeScript', index: 0, src: ts },
	{ alt: 'JavaScript', index: 1, src: js },
	{ alt: 'React', index: 2, src: react },
	{ alt: 'Material UI', index: 3, src: mui },
	{ alt: 'React Admin', index: 4, src: reactAdmin },
	{ alt: 'React Hook Form', index: 5, src: reactHookForm },
	{ alt: 'CASL', index: 6, src: casl },
	{ alt: 'React Query', index: 7, src: reactQuery },
	{ alt: 'Zod', index: 8, src: zod },
	{ alt: 'Zustand', index: 9, src: zustand },
	{ alt: 'Bootstrap', index: 10, src: Bootstrap },
	{ alt: 'Framer', index: 11, src: framer },
	{ alt: 'Framer Motion', index: 12, src: framerMotion },
];

const imagesRight: images[] = [
	{ alt: 'React Native', index: 0, src: reactNative },
	{ alt: 'i18n', index: 1, src: i18 },
	{ alt: 'Axios', index: 2, src: axios },
	{ alt: 'HTML', index: 3, src: html },
	{ alt: 'CSS', index: 4, src: css },
	{ alt: 'Git', index: 5, src: git },
	{ alt: 'GitHub', index: 6, src: github },
	{ alt: 'jQuery', index: 7, src: jquery },
	{ alt: 'Photoshop', index: 8, src: photoshop },
	{ alt: 'Illustrator', index: 9, src: illustrator },
	{ alt: 'Paper', index: 10, src: paper },
	{ alt: 'Figma', index: 11, src: figma },
];

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
					images={imagesLeft}
				/>
				<ParallaxScroll
					baseVelocity={2}
					images={imagesRight}
				/>
			</Box>
		</Section>
	);
};
