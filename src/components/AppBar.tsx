import MenuIcon from '@mui/icons-material/Menu';
import {
	alpha,
	Box,
	Button,
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
import { useEffect, useState } from 'react';

import logo from '../assets/logo.png';
import { ToggleButton } from './ToggleButton';

const pages = ['Products', 'Pricing', 'Blog'];

export interface AppBarProps {}

export const AppBar: React.FC<AppBarProps> = props => {
	const theme = useTheme();
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

	return (
		<Slide
			appear={false}
			direction='down'
			in={!trigger}
			{...props}
		>
			<MuiAppBar
				elevation={scrollY === 0 ? 0 : 2}
				position='fixed'
				sx={{
					backdropFilter: scrollY === 0 ? 'none' : `blur(${theme.spacing(1)})`,
					backgroundColor:
						scrollY === 0
							? 'transparent'
							: alpha(theme.palette.primary.dark, 0.3),
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						{/* Desktop logo */}
						<Box
							alt='logo'
							component='img'
							src={logo}
							sx={{
								display: { md: 'flex', xs: 'none' },
								width: theme.spacing(10),
							}}
						/>

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
								{pages.map(page => (
									<MenuItem
										key={page}
										onClick={handleCloseNavMenu}
									>
										<Typography textAlign='center'>{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						{/* Mobile logo */}
						<Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
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

						{/* Desktop menu */}
						<Box
							sx={{
								alignItems: 'center',
								display: { md: 'flex', xs: 'none' },
								flexGrow: 1,
								justifyContent: 'center',
							}}
						>
							{pages.map(page => (
								<Button
									key={page}
									sx={{ color: 'white', display: 'block', my: 2 }}
								>
									{page}
								</Button>
							))}
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
