import React from 'react';
import { Loader } from 'src/components';
import {
	AboutMeSection,
	AppBar,
	HeroSection,
	SkillsSection,
	StatsSection,
} from 'src/features';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<Loader />
			<AppBar />
			<HeroSection />
			<AboutMeSection />
			<StatsSection />
			<SkillsSection />
		</>
	);
};
