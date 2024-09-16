import React from 'react';
import { HeroSection } from 'src/components';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<HeroSection />
		</>
	);
};
