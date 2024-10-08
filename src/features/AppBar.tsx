import MenuIcon from '@mui/icons-material/Menu';
import {
	alpha,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	AppBar as MuiAppBar,
	Slide,
	Toolbar,
	Tooltip,
	Typography,
	useScrollTrigger,
	useTheme,
} from '@mui/material';
import { pascalCase } from 'change-case';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AppBarLinks } from 'src/config';
import { DEFAULT_TRANSITION, Routes, Sections } from 'src/constant';

import logo from '../assets/logo.webp';
import { ToggleButton } from '../components';

export interface AppBarProps {}

export const AppBar: React.FC<AppBarProps> = props => {
	const theme = useTheme();
	const { pathname } = useLocation();
	const trigger = useScrollTrigger();
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const MenuItems = () => (
		<>
			{AppBarLinks.map(link => (
				<MenuItem
					component={HashLink}
					key={link}
					onClick={handleCloseNavMenu}
					smooth
					to={`/#${pascalCase(link)}`}
				>
					<Typography textAlign='center'>{link}</Typography>
				</MenuItem>
			))}
		</>
	);

	return (
		<Slide
			appear={false}
			direction='down'
			in={!trigger}
			{...props}
		>
			<MuiAppBar
				elevation={pathname === Routes.Home ? 0 : scrollY === 0 ? 0 : 2}
				position='fixed'
				sx={{
					backdropFilter:
						scrollY === 0 && pathname === Routes.Home
							? 'none'
							: `blur(${theme.spacing(1)})`,
					backgroundColor:
						scrollY === 0 && pathname === Routes.Home
							? 'transparent'
							: alpha(theme.palette.primary.dark, 0.3),
					overflow: 'hidden',
					transition: DEFAULT_TRANSITION,
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						{/* Desktop logo */}
						<Box
							component={HashLink}
							onClick={handleCloseNavMenu}
							smooth
							to={`/#${Sections.Hero}`}
						>
							<Box
								alt='logo'
								component='img'
								src={logo}
								sx={{
									display: { md: 'flex', xs: 'none' },
									width: theme.spacing(10),
								}}
							/>
						</Box>

						{/* Mobile menu icon */}
						<Box sx={{ display: { md: 'none', xs: 'flex' } }}>
							<IconButton
								aria-controls='menu-appbar'
								aria-haspopup='true'
								aria-label='open navigation menu'
								color='inherit'
								onClick={handleOpenNavMenu}
							>
								<MenuIcon />
							</IconButton>
							{/* Mobile menu */}
							<Menu
								anchorEl={anchorElNav}
								anchorOrigin={{
									horizontal: 'left',
									vertical: 'bottom',
								}}
								id='menu-appbar'
								keepMounted
								onClose={handleCloseNavMenu}
								open={Boolean(anchorElNav)}
								sx={{
									display: { md: 'none', xs: 'block' },
								}}
								transformOrigin={{
									horizontal: 'left',
									vertical: 'top',
								}}
							>
								<MenuItems />
							</Menu>
						</Box>

						{/* Mobile logo */}
						<Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
							<Box
								component={HashLink}
								onClick={handleCloseNavMenu}
								smooth
								to={`/#${Sections.Hero}`}
							>
								<Box
									alt='logo'
									component='img'
									src={logo}
									sx={{
										display: { md: 'none', xs: 'flex' },
										width: theme.spacing(10),
									}}
								/>
							</Box>
						</Box>

						{/* Desktop menu */}
						<Box
							sx={{
								alignItems: 'center',
								display: { md: 'flex', xs: 'none' },
								flexGrow: 1,
								justifyContent: 'center',
							}}
						>
							<MenuItems />
						</Box>

						{/* Settings button */}
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
