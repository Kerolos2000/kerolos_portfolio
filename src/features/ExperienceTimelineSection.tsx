import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ApartmentIcon from '@mui/icons-material/ApartmentTwoTone';
import FmdGoodIcon from '@mui/icons-material/FmdGoodTwoTone';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebookTwoTone';
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from '@mui/lab';
import { Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Section, SectionHeader } from 'src/components';
import { Sections } from 'src/constant';

export const ExperienceTimelineSection: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const experiences = [
		{
			company: 'Freelance',
			icon: <LaptopChromebookIcon fontSize='small' />,
			location: 'Remote',
			period: '06/2022 – Present',
			role: 'Frontend Developer · Freelance',
		},
		{
			company: 'Echoes Travel',
			icon: <ApartmentIcon fontSize='small' />,
			location: 'Alexandria, Egypt · On-site',
			period: '04/2025 – 07/2025',
			role: 'Frontend Engineer · Part-time',
		},
		{
			company: 'Runnet - The Running Event Platform',
			icon: <LaptopChromebookIcon fontSize='small' />,
			location: 'Remote',
			period: '10/2024 – 04/2025',
			role: 'Frontend Engineer · Full-time',
		},
		{
			company: 'BM Enterprises Management',
			icon: <ApartmentIcon fontSize='small' />,
			location: 'Alexandria, Egypt · On-site',
			period: '08/2023 – 09/2024',
			role: 'Frontend Developer · Full-time',
		},
	];

	return (
		<Section id={Sections.Experience}>
			<SectionHeader
				description='I have experience with these technologies, and I am always looking for new and exciting projects to work on'
				title='Experience'
			/>

			<Timeline
				position={isMobile ? 'right' : 'alternate'}
				sx={{ p: 0 }}
			>
				{experiences.map((exp, idx) => (
					<TimelineItem
						key={idx}
						sx={{ minHeight: { md: 160, xs: 120 } }}
					>
						<TimelineOppositeContent
							color='text.secondary'
							sx={{
								display: isMobile ? 'none' : 'flex',
								justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start',
								pr: 2,
								pt: 3,
							}}
							variant='body2'
						>
							{exp.period}
						</TimelineOppositeContent>

						<TimelineSeparator sx={{ px: 2 }}>
							<TimelineDot
								color='primary'
								sx={{ p: { md: 1.5, xs: 1 } }}
							>
								{exp.icon}
							</TimelineDot>

							{idx < experiences.length - 1 && (
								<TimelineConnector sx={{ minHeight: { md: 120, xs: 60 } }} />
							)}
						</TimelineSeparator>

						<TimelineContent
							sx={{ mt: 1, pb: { md: 4, xs: 2 }, px: { md: 2, xs: 0 } }}
						>
							<Card
								sx={{
									alignItems: 'flex-start',
									display: 'flex',
									flexDirection: 'column',
									gap: 1,
									p: { md: 2, xs: 1.5 },
								}}
							>
								<Typography
									fontWeight={700}
									variant='body1'
								>
									{exp.role}
								</Typography>

								<Box
									sx={{
										alignItems: 'center',
										display: 'flex',
										gap: 0.5,
										mt: 1,
									}}
								>
									<ApartmentIcon fontSize='small' />
									<Typography
										fontWeight={500}
										variant='subtitle2'
									>
										{exp.company}
									</Typography>
								</Box>

								<Box
									sx={{
										alignItems: 'center',
										display: 'flex',
										gap: 0.5,
										mt: 0.5,
									}}
								>
									<FmdGoodIcon fontSize='small' />
									<Typography
										color='text.secondary'
										variant='body2'
									>
										{exp.location}
									</Typography>
								</Box>

								<Box
									sx={{
										alignItems: 'center',
										display: { md: 'none', xs: 'flex' },
										gap: 0.5,
										mt: 0.5,
									}}
								>
									<AccessTimeIcon fontSize='small' />
									<Typography
										color='text.secondary'
										variant='body2'
									>
										{exp.period}
									</Typography>
								</Box>
							</Card>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Section>
	);
};
