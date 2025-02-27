import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import {
	AboutMeSection,
	CertificatesSection,
	ContactSection,
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
			<LazyLoadComponent>
				<AboutMeSection />
			</LazyLoadComponent>
			<LazyLoadComponent>
				<StatsSection />
			</LazyLoadComponent>
			<LazyLoadComponent>
				<SkillsSection />
			</LazyLoadComponent>
			<LazyLoadComponent>
				<ProjectsSection />
			</LazyLoadComponent>
			<LazyLoadComponent>
				<CertificatesSection />
			</LazyLoadComponent>
			<LazyLoadComponent>
				<ContactSection />
			</LazyLoadComponent>
		</>
	);
};
