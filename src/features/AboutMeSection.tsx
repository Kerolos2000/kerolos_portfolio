import React from 'react';
import { Section, SectionHeader } from 'src/components';
import { Sections } from 'src/constant';

export interface AboutMeSectionProps {}

export const AboutMeSection: React.FC<AboutMeSectionProps> = () => {
	return (
		<Section id={Sections.AboutMe}>
			<SectionHeader title='About Me' />
		</Section>
	);
};
