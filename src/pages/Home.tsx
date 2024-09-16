import React from 'react';
import { AppBar, HeroSection } from 'src/components';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<AppBar />
			<HeroSection />
		</>
	);
};
