import { Grid2 } from '@mui/material';
import React from 'react';
import { Counter, Section, SectionHeader } from 'src/components';
import { Sections } from 'src/constant';

export interface StatsSectionProps {}

const countersData = [
	{
		count: 30,
		title: 'Projects completed',
	},
	{
		count: 3,
		title: 'Active Projects',
	},
	{
		count: 20,
		title: 'Happy clients',
	},
	{
		count: 2,
		title: 'Years of experience',
	},
];

export const StatsSection: React.FC<StatsSectionProps> = () => {
	return (
		<Section id={Sections.Counter}>
			<SectionHeader
				description='A quick overview of our accomplishments and capabilities'
				title='Quick stats'
			/>
			<Grid2
				container
				spacing={2}
			>
				{countersData.map(counter => {
					const { count, title } = counter;
					return (
						<Grid2
							key={JSON.stringify(counter)}
							size={{ lg: 3, xs: 6 }}
						>
							<Counter
								count={count}
								title={title}
							/>
						</Grid2>
					);
				})}
			</Grid2>
		</Section>
	);
};
