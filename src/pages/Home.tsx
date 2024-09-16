import React from 'react';
import { AboutMeSection, AppBar, HeroSection } from 'src/features';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<AppBar />
			<HeroSection />
			<AboutMeSection />
		</>
	);
};
