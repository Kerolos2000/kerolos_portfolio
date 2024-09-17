import { SvgIconComponent } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalanceTwoTone';
import ApartmentIcon from '@mui/icons-material/ApartmentTwoTone';
import FmdGoodIcon from '@mui/icons-material/FmdGoodTwoTone';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebookTwoTone';
import TodayIcon from '@mui/icons-material/TodayTwoTone';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import { Button, Card, CardContent, Grid2, Typography } from '@mui/material';
import { differenceInYears } from 'date-fns';
import React from 'react';
import {
	HStack,
	Motion,
	Section,
	SectionHeader,
	TypographyWithBorder,
} from 'src/components';

export interface AboutMeSectionProps {}

export const AboutMeSection: React.FC<AboutMeSectionProps> = () => {
	return (
		<Section id='about-me'>
			<SectionHeader
				description='Hello! I’m Kerolos Magdy, a frontend developer passionate about
          building clean, responsive, and interactive user interfaces using
          React, JavaScript, and TypeScript. I enjoy solving complex problems
          and continually learning new technologies.'
				title='About Me'
			/>
			<Motion whileInView={{ scale: [0, 1] }}>
				<Grid2
					container
					spacing={4}
					sx={{ mt: 4 }}
				>
					{Object.entries(aboutMeConfig).map(([key, items]) => (
						<Grid2
							key={key}
							size={{ lg: 4, md: 6, xs: 12 }}
						>
							<Motion
								style={{
									height: '100%',
								}}
								whileHover={{ scale: 1.1 }}
							>
								<Card
									sx={{
										height: '100%',
									}}
								>
									<CardContent
										sx={{
											display: 'flex',
											flexDirection: 'column',
											gap: 1,
										}}
									>
										<TypographyWithBorder variant='h4'>
											{key}
										</TypographyWithBorder>
										{items.map((item: AboutMeItem) => {
											const { cta, icon: Icon, text } = item;
											return (
												<HStack key={JSON.stringify(item)}>
													{Icon ? <Icon /> : null}
													{text ? (
														<Typography variant='body1'>{text}</Typography>
													) : null}
													{cta ? (
														<Motion whileHover={{ rotate: -5, scale: 1.1 }}>
															<Button variant='outlined'>{cta}</Button>
														</Motion>
													) : null}
												</HStack>
											);
										})}
									</CardContent>
								</Card>
							</Motion>
						</Grid2>
					))}
				</Grid2>
			</Motion>
		</Section>
	);
};

export interface AboutMeItem {
	icon?: SvgIconComponent;
	text?: string;
	cta?: string;
}

export interface AboutMeConfig {
	education: AboutMeItem[];
	experience: AboutMeItem[];
	personal: AboutMeItem[];
}

const aboutMeConfig: AboutMeConfig = {
	education: [
		{
			icon: AccountBalanceIcon,
			text: 'Faculty of Business MIS Department',
		},
		{ icon: FmdGoodIcon, text: 'Alexandria, Egypt' },
		{ icon: WorkspacePremiumIcon, text: 'Very Good with Honer' },
		{ icon: TodayIcon, text: '2018 - 2022' },
	],
	experience: [
		{ icon: LaptopChromebookIcon, text: 'Frontend Developer' },
		{ icon: ApartmentIcon, text: 'B.M Enterprise' },
		{ icon: FmdGoodIcon, text: 'Alexandria, Egypt' },
		{ icon: TodayIcon, text: '11/2023 - 9/2024' },
	],
	personal: [
		{ icon: FmdGoodIcon, text: 'Alexandria, Egypt' },
		{
			icon: TodayIcon,
			text: differenceInYears(new Date(), new Date(2000, 10, 14)) + ' Years',
		},
		{ cta: 'Download CV' },
	],
};
