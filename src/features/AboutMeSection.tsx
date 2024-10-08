import { SvgIconComponent } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalanceTwoTone';
import ApartmentIcon from '@mui/icons-material/ApartmentTwoTone';
import FmdGoodIcon from '@mui/icons-material/FmdGoodTwoTone';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebookTwoTone';
import TodayIcon from '@mui/icons-material/TodayTwoTone';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import WorkIcon from '@mui/icons-material/WorkTwoTone';
import { Button, Card, CardContent, Grid2, Typography } from '@mui/material';
import { differenceInYears } from 'date-fns';
import React, { ReactElement } from 'react';
import {
	HStack,
	Motion,
	Section,
	SectionHeader,
	TypographyWithBorder,
} from 'src/components';
import { DEFAULT_MOTION_BODY, Sections } from 'src/constant';

import cv from '../assets/Kerolos-Magdy-Resume.pdf';

export interface AboutMeSectionProps {}

export const AboutMeSection: React.FC<AboutMeSectionProps> = () => {
	return (
		<Section id={Sections.AboutMe}>
			<SectionHeader
				description='Hello! I’m Kerolos Magdy, a frontend developer passionate about
          building clean, responsive, and interactive user interfaces using
          React, JavaScript, and TypeScript. I enjoy solving complex problems
          and continually learning new technologies.'
				title='About Me'
			/>
			<Grid2
				container
				spacing={2}
				sx={{ justifyContent: 'center' }}
			>
				{Object.entries(aboutMeConfig).map(([key, items]) => (
					<Grid2
						key={key}
						size={{ lg: 4, md: 6, xs: 12 }}
					>
						<Motion
							style={{ height: '100%' }}
							whileInView={DEFAULT_MOTION_BODY}
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
														{cta}
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
		</Section>
	);
};

export interface AboutMeItem {
	icon?: SvgIconComponent;
	text?: string;
	cta?: ReactElement;
	onClick?: () => void;
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
		{ icon: WorkIcon, text: 'Available to work' },
		{
			cta: (
				<Button
					download
					href={cv}
					variant='outlined'
				>
					Download CV
				</Button>
			),
		},
	],
};
