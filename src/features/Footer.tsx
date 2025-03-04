import {
	Box,
	Grid2,
	IconButton,
	List,
	ListItem,
	Typography,
} from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { Section } from 'src/components';
import { Contacts, QuickLinks } from 'src/config';
import { Mode, Sections } from 'src/constant';
import { useChangeMode } from 'src/hooks';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
	const { mode } = useChangeMode();

	return (
		<Section
			id={Sections.Footer}
			sx={{ bgcolor: 'background.paper' }}
		>
			<Grid2
				container
				spacing={4}
			>
				<Grid2
					gap={2}
					size={{ md: 6, xs: 12 }}
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<Box
						alt='logo'
						component='img'
						src='assets/logo.webp'
						sx={{
							display: {
								filter: Mode.Light === mode ? 'invert(1)' : 'none',
								md: 'flex',
							},
							height: 35,
							width: 100,
						}}
					/>
					<Typography>
						I work hard to complete projects with the highest quality and as
						quickly as possible. With a strong focus on clean code, performance,
						and user experience, I always strive to deliver efficient and
						scalable solutions.
					</Typography>
					<Typography color='text.secondary'>
						Created in 2025. Always improving and evolving.
					</Typography>
				</Grid2>

				<Grid2
					size={{ md: 2, xs: 12 }}
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<Typography variant='h6'>Quick Links</Typography>
					<List sx={{ p: 0 }}>
						{QuickLinks.map(page => {
							const { link, title } = page;
							return (
								<ListItem
									key={JSON.stringify(page)}
									sx={{ p: 0 }}
								>
									<Box
										color='inherit'
										component={HashLink}
										sx={{
											':hover': {
												textDecoration: 'underline',
											},
											textDecoration: 'none',
										}}
										to={link}
									>
										<Typography variant='body1'>{title}</Typography>
									</Box>
								</ListItem>
							);
						})}
					</List>
				</Grid2>

				<Grid2
					size={{ md: 4, xs: 12 }}
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<Typography variant='h6'>Contact Us</Typography>
					<Typography variant='body1'>
						Contact me via phone or e-mail, waiting for your call or message
					</Typography>

					<Box
						display='flex'
						gap={2}
					>
						{Contacts.map(contact => {
							const { href, icon: Icon } = contact;

							return (
								<IconButton
									aria-label={href}
									component='a'
									href={href}
									key={JSON.stringify(contact)}
									rel='noreferrer'
									sx={{
										border: theme =>
											`1px solid ${theme.palette.secondary.light}`,
										borderRadius: 1,
										color: 'secondary.main',
									}}
									target='_blank'
								>
									<Icon />
								</IconButton>
							);
						})}
					</Box>
				</Grid2>
			</Grid2>
		</Section>
	);
};
