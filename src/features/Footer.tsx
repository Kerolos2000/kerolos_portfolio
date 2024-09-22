import {
	Box,
	Grid2,
	IconButton,
	List,
	ListItem,
	Typography,
	useTheme,
} from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { Section } from 'src/components';
import { Contacts, QuickLinks } from 'src/config';
import { Mode, Sections } from 'src/constant';
import { useChangeMode } from 'src/hooks';

import logo from '../assets/logo.webp';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
	const theme = useTheme();
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
					size={{ md: 4, xs: 12 }}
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
				>
					<Box
						alt='logo'
						component='img'
						src={logo}
						sx={{
							display: {
								filter: Mode.Light === mode ? 'invert(1)' : 'none',
								md: 'flex',
								xs: 'none',
							},
							width: theme.spacing(10),
						}}
					/>
					<Typography variant='body1'>
						I work hard to complete projects with the highest quality and as
						quickly as possible.
					</Typography>
					<Typography variant='body2'>created in 2024.</Typography>
				</Grid2>

				<Grid2
					size={{ md: 4, xs: 12 }}
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
										color='primary.main'
										component={HashLink}
										sx={{ textDecoration: 'none' }}
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
					<Typography
						sx={{
							border: `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`,
							padding: theme.spacing(2),
						}}
						variant='body1'
					>
						kerolos1410@gmail.com
					</Typography>

					<Box
						display='flex'
						gap={2}
					>
						{Contacts.map(contact => {
							const { href, icon: Icon } = contact;

							return (
								<IconButton
									component='a'
									href={href}
									key={JSON.stringify(contact)}
									rel='noreferrer'
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
