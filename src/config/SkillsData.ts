import { images } from 'src/components';

import axios from '../assets/axios.webp';
import Bootstrap from '../assets/Bootstrap.webp';
import casl from '../assets/casl.webp';
import css from '../assets/css.webp';
import figma from '../assets/figma-logo.webp';
import framerMotion from '../assets/framer-motion.webp';
import framer from '../assets/framer.webp';
import git from '../assets/git.webp';
import github from '../assets/github.webp';
import html from '../assets/html.webp';
import i18 from '../assets/i18.webp';
import illustrator from '../assets/illustrator.webp';
import jquery from '../assets/jquery.webp';
import js from '../assets/js.webp';
import mui from '../assets/mui.webp';
import paper from '../assets/paper.webp';
import photoshop from '../assets/photoshop.webp';
import reactAdmin from '../assets/react-admin.webp';
import reactHookForm from '../assets/react-hook-form.webp';
import reactNative from '../assets/react-native.webp';
import reactQuery from '../assets/react-query.webp';
import react from '../assets/react.webp';
import ts from '../assets/ts.webp';
import zod from '../assets/zod.webp';
import zustand from '../assets/zustand.webp';

export const ImagesLeft: images[] = [
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

export const ImagesRight: images[] = [
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
