import StarIcon from '@mui/icons-material/StarOutline';
import { Masonry } from '@mui/lab';
import {
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Typography,
	useTheme,
} from '@mui/material';
import { alpha, styled } from '@mui/system';
import axios from 'axios';
import { noCase } from 'change-case';
import { useQuery } from 'react-query';
import { HStack, Motion, Section, SectionHeader } from 'src/components';
import { DEFAULT_TRANSITION, Routes } from 'src/constant';
import { useNotify } from 'src/hooks';
import stringToColor from 'string-to-color';

export interface ProjectsProps {}

interface Project {
	id: string;
	name: string;
	html_url: string;
	homepage: string | null;
	created_at: string;
	stargazers_count: number;
}

export const Projects: React.FC<ProjectsProps> = () => {
	const theme = useTheme();
	const { notify } = useNotify();
	const { data, error } = useQuery(
		['GetListOfProjects'],
		() =>
			axios.get('https://api.github.com/users/Kerolos2000/repos', {
				params: {
					direction: 'desc',
					sort: 'created_at',
				},
			}),
		{
			keepPreviousData: true,
			onError: () => {
				// @ts-ignore
				notify(error.response.data.message, { type: 'error' });
			},
			onSuccess: data => {
				data.data = data.data.filter(
					(project: Project) => project.homepage && project.homepage !== null,
				);
			},
			retry: 1,
		},
	);

	return (
		<>
			<Section
				id={Routes.Projects}
				sx={{ pt: theme.spacing(8) }}
			>
				<SectionHeader
					description='Here are some of the projects I have worked on'
					title='Projects'
				/>
				{!data?.data || data?.data.length === 0 ? (
					<Typography
						fontWeight='bold'
						textAlign='center'
						variant='h3'
					>
						No Projects Yet!
					</Typography>
				) : (
					<Masonry
						columns={{ lg: 4, md: 3, sm: 2, xs: 1 }}
						spacing={2}
					>
						{data?.data.map((element: Project) => {
							const { homepage, id, name, stargazers_count } = element;
							return (
								<MasonryItem
									key={id}
									sx={{
										':hover .project-card': {
											backgroundColor: alpha(stringToColor(name), 0.2),
										},
									}}
								>
									<Motion
										style={{
											height: '100%',
										}}
										whileHover={{ scale: 1.05 }}
									>
										<Card
											className='project-card'
											sx={{
												backgroundColor: alpha(stringToColor(name), 0.1),
												transition: DEFAULT_TRANSITION,
											}}
										>
											<CardContent>
												<HStack justifyContent={'space-between'}>
													<Typography
														gutterBottom
														variant='h5'
													>
														{noCase(name)}
													</Typography>
													<Chip
														color='default'
														icon={<StarIcon />}
														label={stargazers_count}
													/>
												</HStack>
												{homepage && (
													<Box>
														<Button
															color='inherit'
															href={homepage}
															target='_blank'
															variant='outlined'
														>
															Visit Homepage
														</Button>
													</Box>
												)}
											</CardContent>
										</Card>
									</Motion>
								</MasonryItem>
							);
						})}
					</Masonry>
				)}
			</Section>
		</>
	);
};

const MasonryItem = styled(Box)({
	marginBottom: '16px',
	width: '100%',
});
