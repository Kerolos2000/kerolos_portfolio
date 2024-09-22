import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid2,
	useTheme,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	Motion,
	Section,
	SectionHeader,
	TypographyWithBorder,
} from 'src/components';
import { Projects } from 'src/config';
import {
	DEFAULT_MOTION_BODY,
	DEFAULT_MOTION_SCALE,
	DEFAULT_TRANSITION,
	Routes,
	Sections,
} from 'src/constant';

export interface ProjectsSectionProps {}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	return (
		<Section id={Sections.Projects}>
			<SectionHeader
				description='Here are some of the projects I have worked on'
				title='Projects'
			/>
			<Grid2
				container
				spacing={2}
				sx={{ justifyContent: 'center' }}
			>
				{Projects.map(project => {
					const { image, link, title } = project;

					return (
						<Grid2
							key={JSON.stringify(project)}
							size={{ lg: 4, md: 6, xl: 3, xs: 12 }}
						>
							<Motion whileInView={DEFAULT_MOTION_BODY}>
								<Box
									component={Link}
									sx={{ textDecoration: 'none' }}
									target='_blank'
									to={link}
								>
									<Card
										sx={{ '&:hover .image': { backgroundPosition: 'bottom' } }}
									>
										<CardContent
											sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
										>
											<TypographyWithBorder variant='h5'>
												{title}
											</TypographyWithBorder>
											<CardMedia
												className='image'
												image={image}
												sx={{
													backgroundPosition: 'top',
													backgroundSize: 'cover',
													height: theme.spacing(50),
													transition: DEFAULT_TRANSITION,
												}}
											/>
										</CardContent>
									</Card>
								</Box>
							</Motion>
						</Grid2>
					);
				})}
			</Grid2>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Motion whileHover={DEFAULT_MOTION_SCALE}>
					<Button
						onClick={() => navigate(Routes.Projects)}
						size='large'
						variant='contained'
					>
						All Projects
					</Button>
				</Motion>
			</Box>
		</Section>
	);
};
