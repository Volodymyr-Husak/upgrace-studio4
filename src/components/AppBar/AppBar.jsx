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
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import MdPhone from '@mui/icons-material/Phone';
// import Chip from '@mui/material/Chip';

import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { LinkEl } from './AppBar.styled';
import { LinkElMenu } from './AppBar.styled';
import css from './AppBar.module.css';
// import { ReactSVG } from 'react-svg';

import logo from '../../images/logo/logo.jpg';
// import phone from './images/icon/sprite.svg#smartphone';
// import { ReactComponent as PhoneSvg } from '../../images/icons/sprite.svg#smartphone';
// import phone from '../../images/icons/sprite.svg#smartphone';

import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import { Link, NavLink } from 'react-router-dom';

const theme = createTheme({
  palette: {
    // primary: {
    //   // Purple and green play nicely together.
    //   main: purple[500],
    // },
    // secondary: {
    //   // This is green.A700 as hex.
    //   main: '#11cb5f',
    // },
    beige: {
      main: 'RGB(143, 110, 106)',
    },
  },
});
// import AdbIcon from '@mui/icons-material/Adb';
// import AdbIcon from '../../images/logo/logo.jpg';
// import Avatar from '@mui/material/Avatar';

// const pages = ['Наші роботи', 'Прайс', 'Майстри', 'Контакти'];
const pages2 = [
  { name: 'Головна', path: '/' },
  { name: 'Наші роботи', path: '/our-works' },
  { name: 'Прайс', path: '/price' },
  { name: 'Майстри', path: '/masters' },
  { name: 'Контакти', path: '/contacts' },
];
// console.log()
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = event => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   // setAnchorElUser(null);
  // };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        // className={css.app_bar}
        position="static"
        color="beige"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Avatar
              alt="Logo"
              src={logo}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              className={css.logo}
              variant="h6"
              // variant="body1"
              noWrap
              component="a"
              href="/upgrace-studio/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Upgrace Studio
            </Typography>
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
                {pages2.map(page => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    {/* <Typography textAlign="center" >
                      {page}
                    </Typography> */}
                    <LinkElMenu
                      to={page.path}
                      // className={css.link_menu}
                    >
                      {page.name}
                    </LinkElMenu>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <Avatar alt="Logo" src="/static/images/avatar/1.jpg" /> */}
            <Avatar
              alt="Logo"
              src={logo}
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            {/* <img src="../../images/logo/logo.jpg" alt="Logo" width="100" /> */}
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              className={css.logo}
              variant="h5"
              noWrap
              component="a"
              href="/upgrace-studio/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                // fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Upgrace Studio
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages2.map(page => (
                // <Button
                //   key={page}
                //   onClick={handleCloseNavMenu}
                //   sx={{ my: 2, color: 'white', display: 'block' }}
                // >
                //   {page}
                // </Button>
                <LinkEl key={page.name} to={page.path}>
                  {page.name}
                </LinkEl>
              ))}
            </Box>
            <Box sx={{ display: 'flex' }}>
              <li style={{ listStyle: 'none', marginRight: '10px' }}>
                {/* <ReactSVG src={phone} /> */}
                <a href="https://www.instagram.com/upgrace_studio_/?igshid=YmMyMTA2M2Y%3D">
                  <Icon name="instagram" size="big" link color="black" />
                </a>
              </li>
              <li style={{ listStyle: 'none' }}>
                <a href="tel:+380972137860">
                  <Icon name="phone" size="big" link color="black" />
                </a>
              </li>
            </Box>
            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
