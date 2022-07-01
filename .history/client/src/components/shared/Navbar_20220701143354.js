import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Logo from '../../images/nifs_logo.png';

const Navbar = () => {
	const pages = [
		{
			id: 0,
			title: 'Home',
			link: '/',
		},
		{
			id: 1,
			title: 'Transport',
			link: '/transport',
		},
	];

	const settings = [
		{
			id: 0,
			title: 'Login',
			link: '/login',
		},
	];

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="fixed" className="main-navbar">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/*Responsive view start here  */}
					<Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
						<img src={Logo} alt="logo" className="nav-logo" />
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages &&
								pages.map((page) => (
									<MenuItem key={page.id} onClick={handleCloseNavMenu}>
										<Link to={page.link} style={{ textDecoration: 'none' }}>
											<Typography textAlign="center">{page.title}</Typography>
										</Link>
									</MenuItem>
								))}
						</Menu>
					</Box>
					{/* Responsive view ends here */}

					{/* Full width starts here */}
					<Box
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
						}}
					>
						<img src={Logo} alt="logo" className="nav-logo" />
					</Box>

					<Box
						sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
						style={{ justifyContent: 'center' }}
					>
						{pages &&
							pages.map((page) => (
								<Link to={page.link} style={{ textDecoration: 'none' }}>
									<Button
										key={page.id}
										onClick={handleCloseNavMenu}
										sx={{ my: 2, color: 'white', display: 'block' }}
									>
										{page.title}
									</Button>
								</Link>
							))}
					</Box>

					{/* end of the navbar */}
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar
									alt="Remy Sharp"
									src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting.id} onClick={handleCloseUserMenu}>
									<Link to={setting.link} style={{ textDecoration: 'none' }}>
										<Typography textAlign="center">{setting.title}</Typography>
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
