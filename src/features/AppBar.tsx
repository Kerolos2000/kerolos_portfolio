import MenuIcon from '@mui/icons-material/Menu';
import {
	alpha,
	Box,
	Container,
	IconButton,
	MenuItem,
	AppBar as MuiAppBar,
	Slide,
	SwipeableDrawer,
	Toolbar,
	Tooltip,
	Typography,
	useScrollTrigger,
	useTheme,
} from '@mui/material';
import { pascalCase } from 'change-case';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AppBarLinks } from 'src/config';
import { DEFAULT_TRANSITION, Routes, Sections } from 'src/constant';

import { ToggleButton } from '../components';

export interface AppBarProps {}

export const AppBar: React.FC<AppBarProps> = () => {
	const theme = useTheme();
	const { pathname } = useLocation();
	const trigger = useScrollTrigger();
	const { scrollY } = useScroll();
	const [scrollPosition, setScrollPosition] = useState(0);
	const [drawerOpen, setDrawerOpen] = useState(false);

	useMotionValueEvent(scrollY, 'change', setScrollPosition);

	const handleOpenDrawer = () => setDrawerOpen(true);
	const handleCloseDrawer = () => setDrawerOpen(false);

	const renderMenuItems = () =>
		AppBarLinks.map(link => (
			<MenuItem
				component={HashLink}
				key={link}
				onClick={handleCloseDrawer}
				smooth
				sx={{ display: 'block', padding: 2 }}
				to={`/#${pascalCase(link)}`}
			>
				<Typography textAlign='center'>{link}</Typography>
			</MenuItem>
		));

	const logo = (
		<Box
			component={HashLink}
			smooth
			to={`/#${Sections.Hero}`}
		>
			<Box
				alt='logo'
				component='img'
				src='assets/logo.webp'
				style={{ height: 35, width: 100 }}
			/>
		</Box>
	);

	return (
		<Slide
			appear={false}
			direction='down'
			in={!trigger}
		>
			<MuiAppBar
				elevation={pathname === Routes.Home && scrollPosition === 0 ? 0 : 2}
				position='fixed'
				sx={{
					backdropFilter:
						pathname === Routes.Home && scrollPosition === 0
							? 'none'
							: `blur(${theme.spacing(1)})`,
					background:
						pathname === Routes.Home && scrollPosition === 0
							? 'transparent'
							: `linear-gradient(175deg,${alpha(theme.palette.primary.dark, 0.8)} 0%,${alpha(theme.palette.primary.dark, 0.1)} 100%)`,
					transition: DEFAULT_TRANSITION,
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Box sx={{ display: { md: 'flex', xs: 'none' } }}>{logo}</Box>

						{/* Mobile Menu */}
						<Box sx={{ display: { md: 'none', xs: 'flex' } }}>
							<IconButton
								aria-label='open navigation menu'
								color='inherit'
								onClick={handleOpenDrawer}
							>
								<MenuIcon />
							</IconButton>
							<SwipeableDrawer
								anchor='top'
								onClose={handleCloseDrawer}
								onOpen={handleOpenDrawer}
								open={drawerOpen}
								sx={{
									['& .MuiDrawer-paper']: {
										backdropFilter: `blur(${theme.spacing(1)})`,
										background: `linear-gradient(175deg,${theme.palette.primary.dark} 0%,${alpha(theme.palette.primary.dark, 0.1)} 100%)`,
									},
								}}
							>
								<Box
									sx={{
										alignItems: 'center',
										color: theme.palette.primary.contrastText,
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										padding: 2,
										textAlign: 'center',
									}}
								>
									{renderMenuItems()}
									<Box
										sx={{
											background: `linear-gradient(360deg,${theme.palette.secondary.light} 0%,${alpha(theme.palette.primary.light, 0.1)} 100%)`,
											borderRadius: 3,
											height: 6,
											mt: 3,
											width: 30,
										}}
									/>
								</Box>
							</SwipeableDrawer>
						</Box>

						<Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
							{logo}
						</Box>

						{/* Desktop Menu */}
						<Box
							sx={{
								display: { md: 'flex', xs: 'none' },
								flexGrow: 1,
								justifyContent: 'center',
							}}
						>
							{renderMenuItems()}
						</Box>

						{/* Settings Button */}
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<ToggleButton />
							</Tooltip>
						</Box>
					</Toolbar>
				</Container>
			</MuiAppBar>
		</Slide>
	);
};
