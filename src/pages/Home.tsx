import React from 'react';
import {
	AboutMeSection,
	CertificatesSection,
	HeroSection,
	ProjectsSection,
	SkillsSection,
	StatsSection,
} from 'src/features';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<HeroSection />
			<AboutMeSection />
			<StatsSection />
			<SkillsSection />
			<ProjectsSection />
			<CertificatesSection />
		</>
	);
};
